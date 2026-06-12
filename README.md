# G.R.A.M.S Styling — Migration WooCommerce → Medusa v2

> Projet de stage réalisé chez **Aiteklabs** dans le cadre de la formation OpenClassrooms.  
> Migration de [gramsstyling.co.uk](https://gramsstyling.co.uk) depuis WooCommerce vers une stack headless moderne.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Backend e-commerce | Medusa JS v2 |
| Frontend | Next.js 15 + React 19 |
| SDK | @medusajs/js-sdk |
| Base de données | PostgreSQL |
| Style | CSS Modules |
| Monorepo | Yarn Workspaces |

---

## Structure du projet

```
grams-styling/
├── apps/
│   └── storefront/              ← Next.js 15 (frontend)
│       └── src/
│           ├── app/             ← Pages (App Router)
│           │   ├── page.jsx         → Homepage
│           │   ├── shop/            → Catalogue + navigation marque/modèle
│           │   ├── product/[slug]/  → Page produit + sélecteur variantes
│           │   └── cart/            → Page panier
│           ├── components/
│           │   ├── layout/      ← TopBar, Navbar (mega menu), Footer
│           │   └── ui/          ← ProductCard, CartDrawer
│           ├── context/         ← CurrencyContext, CartContext
│           ├── lib/             ← medusa-client.js, medusa-helpers.js, currency.js
│           └── data/            ← mock-products.js (fallback sans backend)
└── packages/
    └── backend/                 ← Medusa v2
        ├── src/
        │   ├── modules/
        │   │   └── currency-rates/  ← Module custom multi-devise
        │   └── api/store/
        │       └── currency-rates/  ← GET /store/currency-rates
        ├── medusa-data/         ← Données de migration
        │   ├── products.json        → 417 produits / 7 417 variantes
        │   ├── categories.json      → 98 catégories hiérarchiques
        │   └── shipping_rules.json  → 60 règles Weight-Based Shipping
        └── medusa-import.ts     ← Script d'import TypeScript
```

---

## Démarrage rapide

### Prérequis

- Node.js 20+
- PostgreSQL 15+
- npm ou yarn

### 1. Backend Medusa

```bash
cd packages/backend

# Configurer l'environnement
cp .env.template .env
# Éditer .env : DATABASE_URL, JWT_SECRET, COOKIE_SECRET

# Installer et démarrer
npm install
npm run dev
# Admin disponible sur http://localhost:9000/app
```

### 2. Créer un compte admin

```bash
cd packages/backend
npx medusa user -e admin@example.com -p votre_mot_de_passe
```

### 3. Configurer une région

Dans l'admin Medusa (`http://localhost:9000/app`) :
**Settings → Regions → Create region**
- Name : `UK`
- Currency : `GBP`
- Countries : `GB`

### 4. Importer les données

```bash
cd packages/backend

# Test sur 5 produits d'abord
LIMIT=5 MEDUSA_URL=http://localhost:9000 \
MEDUSA_ADMIN_EMAIL=admin@example.com \
MEDUSA_ADMIN_PASSWORD=votre_mot_de_passe \
DATA_DIR=./medusa-data SKIP_CUSTOMERS=true \
npx tsx medusa-import.ts

# Import complet (417 produits)
MEDUSA_URL=http://localhost:9000 \
MEDUSA_ADMIN_EMAIL=admin@example.com \
MEDUSA_ADMIN_PASSWORD=votre_mot_de_passe \
DATA_DIR=./medusa-data SKIP_CUSTOMERS=true \
npx tsx medusa-import.ts
```

> **Windows PowerShell** : remplacer les `\` par `;` et mettre chaque variable sur la même ligne.

> **Reprise sur interruption** : le script génère `medusa-data/import-mapping.json`.
> En cas d'arrêt, supprimer ce fichier et relancer.

### 5. Créer une Publishable API Key

Dans l'admin : **Settings → API Key Management → Create → type Publishable**  
Copier la clé générée (commence par `pk_...`).

### 6. Storefront Next.js

```bash
cd apps/storefront

npm install

cp .env.local.example .env.local
# Éditer .env.local :
#   NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
#   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY=pk_xxxxxx

npm run dev
# Storefront sur http://localhost:3000
```

---

## Données de migration

| Fichier | Contenu |
|---|---|
| `products.json` | 417 produits publiés, 7 417 variantes, prix GBP/EUR/USD |
| `categories.json` | 98 catégories (hiérarchie Marque → Modèle → Série) |
| `shipping_rules.json` | 60 règles tarifaires Weight-Based Shipping |

Les prix sont stockés en **pence entiers** (ex: `4500` = £45.00).  
Les images pointent vers `cdn.gramsstyling.co.uk` (CDN original conservé).

---

## Module custom : currency-rates

Module Medusa v2 développé pour gérer les taux de change fixes sans dépendance externe.

**Configuration** dans `packages/backend/medusa-config.ts` :

```typescript
{
  resolve: "./src/modules/currency-rates",
  options: {
    rates: [
      { currency_code: "eur", rate: 1.2,  symbol: "€", label: "EUR €" },
      { currency_code: "usd", rate: 1.35, symbol: "$", label: "USD $" },
    ],
  },
}
```

**Endpoint exposé** :

```
GET /store/currency-rates
→ { rates: [{ currency_code, rate, symbol, label }] }
```

Pour modifier les taux : éditer `medusa-config.ts` et redémarrer le backend.

---

## Variables d'environnement

### Backend (`packages/backend/.env`)

```env
DATABASE_URL=postgres://postgres:password@localhost:5432/medusa_grams
JWT_SECRET=your-jwt-secret
COOKIE_SECRET=your-cookie-secret
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:9000,http://localhost:3000
```

### Storefront (`apps/storefront/.env.local`)

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_API_KEY=pk_xxxxxx
```

---

## Fonctionnalités implémentées

- [x] Import 417 produits / 98 catégories depuis WooCommerce
- [x] Module multi-devise custom (GBP / EUR / USD taux fixes)
- [x] Homepage avec produits réels
- [x] Page shop avec navigation par marque/modèle et recherche
- [x] Page produit avec sélecteur de variantes (Finish / Series / Fitting kit)
- [x] Prix dynamique selon la variante sélectionnée
- [x] Drawer panier + page panier complète
- [x] Switcher de devises branché sur l'API Medusa
- [x] Fallback mock-products si backend non disponible


## Problèmes connus et solutions

**`Module not found: @medusajs/medusa-js`**  
Ce package (v1) n'existe plus sur npm. Ce projet utilise `@medusajs/js-sdk` (v2).

**`Missing required pricing context - region_id`**  
Une région doit être configurée dans l'admin Medusa avant de fetcher les produits.  
Admin → Settings → Regions → Create region (GBP / UK).

**Produits importés à 0 après l'import**  
Le fichier `medusa-data/import-mapping.json` contient des IDs `dry_xxx` d'un ancien dry-run.  
Solution : supprimer ce fichier et relancer l'import.

**`category_ids` rejeté par l'API**  
L'API Medusa v2 attend `categories: [{ id: "pcat_xxx" }]` et non `category_ids`.  
Déjà corrigé dans `medusa-import.ts`.

---

## Auteur

Mohamed 
Stage chez **Aiteklabs** — 2026  
Formation **Développeur Full-Stack** — OpenClassrooms
