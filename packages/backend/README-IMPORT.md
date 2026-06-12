# Import des données GRAMS → Medusa v2

## Données disponibles

| Fichier                         | Contenu                                    |
|---------------------------------|--------------------------------------------|
| `medusa-data/products.json`     | 417 produits / 7 417 variantes / prix GBP+EUR+USD |
| `medusa-data/categories.json`   | 98 catégories avec hiérarchie parent       |
| `medusa-data/shipping_rules.json` | 60 règles Weight-Based Shipping          |
| `medusa-import.ts`              | Script d'import TypeScript (Admin API)     |

## Pré-requis

1. Medusa v2 backend démarré (`npm run dev` dans `packages/backend`)
2. Admin créé (via `npx medusa user -e admin@example.com -p password`)
3. Node.js 20+ et `tsx` installé

```bash
npm install -g tsx
```

## Lancer l'import

### Dry-run (test sans écriture)
```bash
DRY_RUN=true \
MEDUSA_URL=http://localhost:9000 \
MEDUSA_ADMIN_EMAIL=admin@example.com \
MEDUSA_ADMIN_PASSWORD=yourpassword \
DATA_DIR=./medusa-data \
SKIP_CUSTOMERS=true \
npx tsx medusa-import.ts
```

### Test sur 5 produits
```bash
LIMIT=5 \
MEDUSA_URL=http://localhost:9000 \
MEDUSA_ADMIN_EMAIL=admin@example.com \
MEDUSA_ADMIN_PASSWORD=yourpassword \
DATA_DIR=./medusa-data \
SKIP_CUSTOMERS=true \
npx tsx medusa-import.ts
```

### Import complet (417 produits + 98 catégories)
```bash
MEDUSA_URL=http://localhost:9000 \
MEDUSA_ADMIN_EMAIL=admin@example.com \
MEDUSA_ADMIN_PASSWORD=yourpassword \
DATA_DIR=./medusa-data \
SKIP_CUSTOMERS=true \
npx tsx medusa-import.ts
```

## Résumé des données

- **417 produits** publiés (+ quelques drafts exclus)
- **7 417 variantes** Medusa (produit cartésien WC variations × WAPF choices)
- **98 catégories** hiérarchiques : Products → Marque → Modèle
- **Prix en pence** (GBP base) avec EUR (×1.2) et USD (×1.35) pré-calculés
- **Images** toutes sur `cdn.gramsstyling.co.uk`

## Points WAPF

224 produits avaient des options WAPF (champs custom avec +prix).
Ils sont déjà **expansées en variantes Medusa** dans `products.json`.

2 produits anomalie (Wing Spoilers GT ~300k combinaisons) → options en metadata,
à gérer via module custom Medusa.

## Shipping

60 règles WBS dans `medusa-data/shipping_rules.json`.  
À implémenter via un **Custom Fulfillment Provider** Medusa (voir roadmap projet).

## Reprise sur interruption

Le script écrit `medusa-data/import-mapping.json` (wc_id → medusa_id).  
En cas d'interruption, relancer la même commande : il reprend automatiquement.  
Les erreurs sont dans `medusa-data/import-errors.json`.
