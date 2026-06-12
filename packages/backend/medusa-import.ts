/**
 * GRAMS Styling → Medusa.js v2 importer
 *
 * Usage:
 *   MEDUSA_URL=http://localhost:9000 \
 *   MEDUSA_ADMIN_EMAIL=admin@example.com \
 *   MEDUSA_ADMIN_PASSWORD=xxx \
 *   DATA_DIR=/path/to/medusa/jsons \
 *   npx tsx medusa-import.ts
 *
 * Optional env vars:
 *   DRY_RUN=true            -> log only, don't POST
 *   SKIP_CATEGORIES=true
 *   SKIP_CUSTOMERS=true
 *   SKIP_PRODUCTS=true
 *   START_AT=0              -> resume from product index N
 *   LIMIT=10                -> import only N products (testing)
 *   RATE_DELAY_MS=50        -> sleep between API calls (default 50)
 *
 * Reads:
 *   <DATA_DIR>/categories.json
 *   <DATA_DIR>/customers.json
 *   <DATA_DIR>/products.json
 *
 * Writes:
 *   <DATA_DIR>/import-mapping.json   (wc_id -> medusa_id)
 *   <DATA_DIR>/import-errors.json    (failed items)
 */

import * as fs from "node:fs";
import * as path from "node:path";

type Mapping = {
  categories: Record<string, string>; // wc_id -> medusa_id
  products: Record<string, string>;
  customers: Record<string, string>;
};

const cfg = {
  url: requireEnv("MEDUSA_URL"),
  email: requireEnv("MEDUSA_ADMIN_EMAIL"),
  password: requireEnv("MEDUSA_ADMIN_PASSWORD"),
  dataDir: process.env.DATA_DIR || "./medusa",
  dryRun: process.env.DRY_RUN === "true",
  skipCategories: process.env.SKIP_CATEGORIES === "true",
  skipCustomers: process.env.SKIP_CUSTOMERS === "true",
  skipProducts: process.env.SKIP_PRODUCTS === "true",
  startAt: parseInt(process.env.START_AT || "0", 10),
  limit: parseInt(process.env.LIMIT || "0", 10),
  rateDelayMs: parseInt(process.env.RATE_DELAY_MS || "50", 10),
  maxVariants: parseInt(process.env.MAX_VARIANTS || "1000", 10),
  batchSize: parseInt(process.env.BATCH_SIZE || "100", 10),
};

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) { console.error(`Missing env var: ${name}`); process.exit(1); }
  return v;
}

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function writeJson(file: string, data: unknown): void {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const mappingFile = path.join(cfg.dataDir, "import-mapping.json");
const errorsFile = path.join(cfg.dataDir, "import-errors.json");

const mapping: Mapping = fs.existsSync(mappingFile)
  ? readJson<Mapping>(mappingFile)
  : { categories: {}, products: {}, customers: {} };

const errors: { type: string; id: string; error: string; payload?: unknown }[] =
  fs.existsSync(errorsFile) ? readJson(errorsFile) : [];

function saveState() {
  writeJson(mappingFile, mapping);
  writeJson(errorsFile, errors);
}

// ============================================================================
// Auth + HTTP helper
// ============================================================================
let bearer = "";

async function authenticate(): Promise<void> {
  if (cfg.dryRun) { bearer = "dry-run-token"; return; }
  const res = await fetch(`${cfg.url}/auth/user/emailpass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: cfg.email, password: cfg.password }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Auth failed (${res.status}): ${txt}`);
  }
  const j = (await res.json()) as { token: string };
  bearer = j.token;
  console.log("✓ Authenticated");
}

async function apiGet<T = unknown>(pathname: string): Promise<T> {
  if (cfg.dryRun) return {} as T;
  const res = await fetch(`${cfg.url}${pathname}`, {
    headers: { Authorization: `Bearer ${bearer}` },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GET ${pathname} -> ${res.status}: ${txt.slice(0, 500)}`);
  }
  return (await res.json()) as T;
}

async function apiPost<T = unknown>(pathname: string, body: unknown): Promise<T> {
  if (cfg.dryRun) {
    console.log(`[DRY] POST ${pathname}`);
    return { id: `dry_${Math.random().toString(36).slice(2, 10)}` } as T;
  }
  const res = await fetch(`${cfg.url}${pathname}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${bearer}`,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`POST ${pathname} -> ${res.status}: ${txt.slice(0, 500)}`);
  }
  return (await res.json()) as T;
}

// ============================================================================
// Importers
// ============================================================================
async function importCategories(): Promise<void> {
  const data = readJson<{ categories: any[] }>(
    path.join(cfg.dataDir, "categories.json"),
  );
  const cats = data.categories;
  console.log(`Importing ${cats.length} categories...`);

  // 2 passes: parents (no parent) first, then children
  const passes = [
    cats.filter((c) => !c.parent_category_id),
    cats.filter((c) => c.parent_category_id),
  ];

  for (const [i, pass] of passes.entries()) {
    console.log(`  Pass ${i + 1}/2 : ${pass.length} cats`);
    for (const c of pass) {
      if (mapping.categories[c.id]) continue;
      try {
        const payload: any = {
          name: c.name,
          handle: c.handle,
          description: c.description || undefined,
          is_active: true,
          metadata: c.metadata,
        };
        if (c.parent_category_id) {
          const parentMedusaId = mapping.categories[c.parent_category_id];
          if (!parentMedusaId) {
            errors.push({
              type: "category",
              id: c.id,
              error: `parent ${c.parent_category_id} not yet imported`,
            });
            continue;
          }
          payload.parent_category_id = parentMedusaId;
        }
        const r = await apiPost<{ product_category: { id: string } }>(
          "/admin/product-categories",
          payload,
        );
        mapping.categories[c.id] = (r as any).product_category?.id || (r as any).id;
        await sleep(cfg.rateDelayMs);
      } catch (e: any) {
        errors.push({ type: "category", id: c.id, error: e.message });
      }
    }
    saveState();
  }
  console.log(`✓ Categories done. Mapped: ${Object.keys(mapping.categories).length}`);
}

async function importCustomers(): Promise<void> {
  const data = readJson<{ customers: any[] }>(
    path.join(cfg.dataDir, "customers.json"),
  );
  const customers = data.customers;
  console.log(`Importing ${customers.length} customers...`);

  for (let i = 0; i < customers.length; i++) {
    const c = customers[i];
    if (mapping.customers[c.id]) continue;
    try {
      const payload = {
        email: c.email,
        first_name: c.first_name || undefined,
        last_name: c.last_name || undefined,
        phone: c.phone || undefined,
        has_account: true,
        metadata: c.metadata,
      };
      const r = await apiPost<{ customer: { id: string } }>(
        "/admin/customers",
        payload,
      );
      const customerId = (r as any).customer?.id || (r as any).id;
      mapping.customers[c.id] = customerId;

      // Add addresses
      for (const addr of c.addresses || []) {
        try {
          await apiPost(`/admin/customers/${customerId}/addresses`, {
            first_name: addr.first_name,
            last_name: addr.last_name,
            company: addr.company || undefined,
            address_1: addr.address_1,
            address_2: addr.address_2 || undefined,
            city: addr.city,
            province: addr.province || undefined,
            postal_code: addr.postal_code,
            country_code: addr.country_code,
            phone: addr.phone || undefined,
          });
        } catch (e: any) {
          errors.push({
            type: "address",
            id: `${c.id}/${addr.address_name}`,
            error: e.message,
          });
        }
        await sleep(cfg.rateDelayMs);
      }
      if (i % 50 === 0) {
        console.log(`  ${i}/${customers.length} (${mapping.customers[c.id] ? "OK" : "FAIL"})`);
        saveState();
      }
    } catch (e: any) {
      errors.push({ type: "customer", id: c.id, error: e.message });
    }
  }
  saveState();
  console.log(`✓ Customers done. Mapped: ${Object.keys(mapping.customers).length}`);
}

async function importProducts(): Promise<void> {
  const data = readJson<{ products: any[]; stats: any }>(
    path.join(cfg.dataDir, "products.json"),
  );
  let products = data.products;
  if (cfg.limit > 0) products = products.slice(cfg.startAt, cfg.startAt + cfg.limit);
  else if (cfg.startAt > 0) products = products.slice(cfg.startAt);
  console.log(`Importing ${products.length} products (start=${cfg.startAt}, limit=${cfg.limit || "all"})...`);

  let count = 0;
  for (const p of products) {
    if (mapping.products[p.id]) { count++; continue; }
    // Derive option metadata before try so catch can reference it
    const optionTitles = (p.options || []).map((o: any) => o.title);
    const firstValueForOption = Object.fromEntries(
      (p.options || []).map((o: any) => [o.title, o.values?.[0] || "Default"]),
    );

    // Build payload before try so catch can reference it
    const categoryIds = (p.categories || [])
      .map((wcId: string) => mapping.categories[wcId])
      .filter(Boolean);
    const seenSkus = new Set<string>();
    const variants = p.variants.map((v: any) => {
      const options: Record<string, string> = {};
      for (const t of optionTitles) {
        options[t] = v.options?.[t] || firstValueForOption[t];
      }
      let sku = v.sku || undefined;
      if (sku) {
        let dedupSku = sku;
        let n = 1;
        while (seenSkus.has(dedupSku)) {
          dedupSku = `${sku}-dup${n}`;
          n++;
        }
        if (dedupSku !== sku) sku = dedupSku;
        seenSkus.add(sku);
      }
      return {
        title: v.title || "Default",
        sku,
        manage_inventory: v.manage_inventory,
        weight: v.weight || undefined,
        options,
        prices: v.prices,   // [{currency_code, amount}, ...]
        metadata: v.metadata,
      };
    });
    const payload = {
      title: p.title,
      handle: p.handle,
      description: p.description || undefined,
      subtitle: p.subtitle || undefined,
      status: "published",
      thumbnail: p.thumbnail || undefined,
      images: (p.images || []).map((img: any) => ({ url: img.url })),
      weight: p.weight || undefined,
      categories: categoryIds.map((id: string) => ({ id })),
      options: p.options, // [{title, values}, ...]
      variants,
      metadata: p.metadata,
    };

    try {
      // Skip products with too many variants (causes 500 errors)
      if (p.variants && p.variants.length > cfg.maxVariants) {
        throw new Error(`Product has ${p.variants.length} variants (max ${cfg.maxVariants})`);
      }

      // Create product without variants first (avoids 500 on large payloads),
      // then add variants via dedicated endpoint
      const r = await apiPost<{ product: { id: string } }>(
        "/admin/products",
        { ...payload, variants: [] },
      );
      const productId = (r as any).product?.id || (r as any).id;
      mapping.products[p.id] = productId;

      // Add all variants via product-variants endpoint (no delay between individual calls)
      for (const v of variants) {
        await apiPost(`/admin/products/${productId}/variants`, v);
      }

      count++;
      if (count % 10 === 0) {
        console.log(`  ${count}/${products.length} (${p.title.slice(0, 50)})`);
        saveState();
      }
      await sleep(cfg.rateDelayMs);
    } catch (e: any) {
      // Retry with deduplicated SKUs when "variant sku already exists" globally
      if (e.message?.includes("variant with sku") && e.message?.includes("already exists")) {
        const suffix = Math.random().toString(36).slice(2, 8);
        const retrySeen = new Set<string>();
        const retryVariants = p.variants.map((v: any) => {
          const options: Record<string, string> = {};
          for (const t of optionTitles) {
            options[t] = v.options?.[t] || firstValueForOption[t];
          }
          let sku = v.sku ? `${v.sku}-${suffix}` : undefined;
          if (sku) {
            let dedup = sku;
            let n = 1;
            while (retrySeen.has(dedup)) {
              dedup = `${sku}-d${n}`;
              n++;
            }
            sku = dedup;
            retrySeen.add(sku);
          }
          return {
            title: v.title || "Default",
            sku,
            manage_inventory: v.manage_inventory,
            weight: v.weight || undefined,
            options,
            prices: v.prices,
            metadata: v.metadata,
          };
        });
        try {
          const r2 = await apiPost<{ product: { id: string } }>("/admin/products", { ...payload, variants: retryVariants });
          mapping.products[p.id] = (r2 as any).product?.id || (r2 as any).id;
          count++;
          if (count % 10 === 0) console.log(`  ${count}/${products.length} (${p.title.slice(0, 50)}) [retry SKU]`);
          await sleep(cfg.rateDelayMs);
          saveState();
          continue;
        } catch {
          // fall through to handle recovery or error logging
        }
      }

      // Recover from "already exists" by fetching the existing product via handle
      if (e.message?.includes("already exists") && p.handle) {
        try {
          const existing = await apiGet<{ product: { id: string } }>(
            `/admin/products?handle=${encodeURIComponent(p.handle)}&limit=1`,
          );
          const existingId = (existing as any).product?.id || (existing as any).products?.[0]?.id;
          if (existingId) {
            mapping.products[p.id] = existingId;
            count++;
            if (count % 10 === 0) {
              console.log(`  ${count}/${products.length} (${p.title.slice(0, 50)}) [recovered]`);
            }
            await sleep(cfg.rateDelayMs);
            saveState();
            continue;
          }
        } catch {
          // fall through to error logging
        }
      }
      errors.push({
        type: "product",
        id: p.id,
        error: e.message,
        payload: { title: p.title, variants_count: p.variants?.length },
      });
      saveState();
    }
  }
  saveState();
  console.log(`✓ Products done. Mapped: ${Object.keys(mapping.products).length}`);
}

// ============================================================================
// Main
// ============================================================================
async function main() {
  console.log("=".repeat(60));
  console.log("  GRAMS → Medusa.js v2 Importer");
  console.log("=".repeat(60));
  console.log(`URL:      ${cfg.url}`);
  console.log(`Data dir: ${cfg.dataDir}`);
  console.log(`Dry run:  ${cfg.dryRun}`);
  console.log(`Mapping:  ${mappingFile}`);
  console.log("");

  if (!fs.existsSync(cfg.dataDir)) {
    console.error(`Data dir not found: ${cfg.dataDir}`);
    process.exit(1);
  }

  await authenticate();

  if (!cfg.skipCategories) await importCategories();
  if (!cfg.skipCustomers)  await importCustomers();
  if (!cfg.skipProducts)   await importProducts();

  saveState();

  console.log("");
  console.log("=".repeat(60));
  console.log("RECAP");
  console.log("=".repeat(60));
  console.log(`Categories mapped:  ${Object.keys(mapping.categories).length}`);
  console.log(`Customers mapped:   ${Object.keys(mapping.customers).length}`);
  console.log(`Products mapped:    ${Object.keys(mapping.products).length}`);
  console.log(`Errors:             ${errors.length}`);
  if (errors.length > 0) {
    console.log(`See ${errorsFile} for details`);
    const byType: Record<string, number> = {};
    for (const e of errors) byType[e.type] = (byType[e.type] || 0) + 1;
    console.log("Error breakdown:", byType);
  }
}

main().catch((e) => {
  console.error("FATAL:", e);
  saveState();
  process.exit(1);
});
