# --- MASTER WORDPRESS WOO PRO
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: woo_checkout_optimizer
# [ES] Optimizador de Checkout WooCommerce
# [EN] Woo Checkout Optimizer

[ES] Reducción berraca de fricción para maximizar las ventas berracas.
[EN] Powerful friction reduction to maximize powerful sales.


## ⚡ Checkout Speed & Flow
- **One-Page Checkout Architecture**: Reducing friction by combining cart and checkout on a single high-speed view.
- **Multistep Logic**: Designing intuitive stages for complex checkouts, reducing cognitive load.
- **Address Autocomplete**: Integrating Google Maps API to expedite delivery address entry.

## 📈 Conversion Enhancements
- **Side-Cart Optimization**: Implementing sticky, slide-out carts that allow for rapid checkout entry.
- **Trust Badges & Micro-copy**: Strategic placement of security signals and urgency triggers (LiteSpeed-cache friendly).
- **Guest Checkout Hardening**: Ensuring high conversion while still capturing essential CRM data.

## 🛡️ Abandonment Recovery
- **Real-time Lead Capture**: Saving email/phone data *before* the customer hits "Buy" to trigger automated follow-ups.

--- 
## --- Sub-Skill: woo_database_hardening
# [ES] Blindaje de Base de Datos WooCommerce
# [EN] Woo Database Hardening

[ES] Optimización y seguridad pro para tiendas con miles de pedidos.
[EN] Pro security and optimization for stores with thousands of orders.


## 💾 Performance Optimization
- **Table Partitioning**: Implementing horizontal partitioning for the `wp_woocommerce_order_items` and `wp_posts` tables for sub-second queries.
- **Index Engineering**: Adding specialized composite indices for rapid searching of orders by Meta data or phone number.
- **Table Bloat Cleanup**: Systematic purging of `wp_options` transients and redundant sessions to maintain a lean database.

## 🛠️ Infrastructure Hardening
- **ReadOnly Replicas**: Moving report generation and dashboard queries to a dedicated read-replica.
- **Object Caching (Redis)**: Offloading expensive database meta-lookups to memory.

## 🛡️ Integrity & Scale
- **ACID Compliance Tuning**: Balancing data safety vs. write-speed during massive flash sales.
- **Automated DB Profiling**: Using `Query Monitor` and Slow-Query-Logs to identify bottlenecks in real-time.

--- 
## --- Sub-Skill: wp_data_synchronizer_pro
# [ES] Sincronizador de Datos WP Profesional
# [EN] Wp Data Synchronizer Pro

[ES] Movimiento masivo y berraco de información en el mapa WordPress.
[EN] Massive and powerful data movement across the WordPress landscape.


## 🔄 Tools & Engines
- **WP All Import/Export (WP-AI)**: Mastering complex XML/CSV/JSON processing with custom PHP functions for data transformation.
- **WP-CLI Data Piping**: Orchestrating massive data loads from the command line for maximum speed and zero timeouts.

## 🧠 Synchronized Workflows
- **External API Sync**: Building scheduled cron-jobs to pull stock, prices, or lead data from external ERPs/CRMs.
- **Bi-directional Bridges**: Ensuring data consistency across multiple WP instances or different platforms.
- **Dynamic Field Mapping**: Advanced usage of ACF and Meta fields for schema-less to schema-based data translation.

## ⚡ Performance Tuning
- **Queue Management**: Handling massive imports in chunks to avoid server overload.
- **Log Buffering**: Tracking failures and successes without bloating the database.

--- 
## --- Sub-Skill: wp_woocommerce_architect
# [ES] Arquitecto WP y WooCommerce
# [EN] Wp Woocommerce Architect

[ES] Diseño maestro de infraestructuras para e-commerce de alto volumen.
[EN] Master infrastructure design for high-volume e-commerce.


## [!IMPORTANT] Core Scaling & Architecture
- **Memory & Process Logic**:
  ```php
  define('WP_MEMORY_LIMIT', '512M');
  define('WP_MAX_MEMORY_LIMIT', '1024M');
  define('WP_POST_REVISIONS', 3); // Minimal revisions to prevent DB bloat
  ```
- **DB Scalability**: For stores with > 10,000 products, use **High Performance Order Storage (HPOS)** to offload orders to custom tables.

## 🛠️ Level 99 Automation (Scripts)
- **Database Precision Tune**: [db-tune.php](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/wp_woocommerce_architect/scripts/db-tune.php)
  - *Usage*: Run via CLI (`php db-tune.php`) to fix missing WC indices and purge expired transients instantly.

## Command Library (WP-CLI for WooCommerce)
> [!NOTE]
> Use these to bypass the GUI for high-speed site management.

- **Check DB Size per Table**:
  ```bash
  wp db query "SELECT table_name AS 'Table', round(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)' FROM information_schema.TABLES WHERE table_schema = DATABASE() ORDER BY (data_length + index_length) DESC;"
  ```
- **Force WC Database Update**:
  ```bash
  wp wc update
  ```

## Advanced WooCommerce Performance
- **AJAX Fragment Bypass**: Use a custom snippet to disable `wc-cart-fragments` on non-shop pages to improve INP by 300ms+.
- **Object Cache (Redis Hybrid)**: Mandatory for "Add to Cart" and "Checkout" speed. Offload sessions to Redis for horizontal scaling.
- **Image Offloading**: Use Cloudflare Images or an S3 bucket for product galleries to reduce origin storage and bandwidth.

## Hardened Security & Integrity
- **DISALLOW_FILE_EDIT**: Always set to `true` to prevent backdoor script execution.
- **REST API Scoping**: Disable the `/wp-json/wp/v2/users` endpoint to prevent username enumeration.
- **Order Integrity**: Use n8n to cross-check WooCommerce orders with payment gateway (Stripe/PayPal) status to prevent "Fake Order" fraud.

## Inter-Skill Integration
- **With SEO**: Combine with **RankMath** for automated Schema (Product, Review, Aggregation).
- **With Cybersecurity**: Integrated with **Cloudflare WAF** to block scrapers targeting SKU lists.
- **With Analytics**: Use **Server-Side GTM** to capture all orders even if the user blocks Javascript.



--- 
## --- Sub-Skill: gutenberg_block_architect
# [ES] Arquitecto de Bloques Gutenberg
# [EN] Gutenberg Block Architect

[ES] Creación de experiencias de edición dinámicas y berracas en WordPress.
[EN] Creation of dynamic and powerful editing experiences in WordPress.


## [!IMPORTANT] The Golden Rule of Gutenberg
- **Keep it Simple & Native**: Use built-in WordPress components (`RichText`, `InnerBlocks`, `InspectorControls`) instead of custom inputs whenever possible for future compatibility.
- **Dynamic Blocks Over Static**: For complex CRM or Data-based content, use "Dynamic Blocks" (rendering with PHP) to ensure that the content updates automatically without re-saving every post.
- **Block Styles & Patterns**: Prefer "Block Styles" and "Block Patterns" for minor design variations over creating entirely new custom blocks for every UI tweak.

## 🛠️ Level 99 Automation (Patterns)
- **The "Client-Side" Preview**: Build interactive blocks that show a real-time, high-fidelity preview in the editor, eliminating the need to "Switch to Preview" every 10 seconds.
- **Block Serialization (Attributes)**: Deep mastery of the `attributes` object in `block.json` to store structured data safely in the database.
- **Performance-First Blocks**: Minimize the use of external libraries; use the native WordPress `@wordpress/scripts` toolchain for 0-config bundling.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage and scaffold your WordPress blocks instantly.

- **Scaffold a New Gutenberg Block (Modern Tooling)**:
  ```bash
  npx @wordpress/create-block your-cool-block --template @wordpress/create-block-tutorial-template
  ```
- **Lint All Block Files (Standard-compliant)**:
  ```bash
  npm run lint:js && npm run lint:css
  ```
- **Build for Production (Minified & Optimized)**:
  ```bash
  npm run build
  ```

## Advanced Techniques
- **Shared Context**: Use `providesContext` and `usesContext` to share data between a parent block (e.g., a "CRM Card") and its children (e.g., "Field" blocks).
- **ServerSideRender**: Utilize the `ServerSideRender` component to bridge complex React logic with existing PHP functions safely.
- **Full Site Editing (FSE)**: Master the `theme.json` file to define global styles that apply both to the frontend and the Gutenberg editor.

## Actionable Script: Block Pro Scaffolder
- **[block-gen.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/gutenberg_block_architect/scripts/block-gen.sh)**: A fast script to scaffold a modern, performance-optimized Gutenberg block structure.

## Inter-Skill Integration
- **With UI/UX Design System**: Use the `design_tokens.css` file as the source of truth for the `theme.json` color palette and typography.
- **With React Mastery**: Apply your expert-level React knowledge to build complex, stateful blocks within the Gutenberg environment.
- **With Rank Math SEO**: Ensure blocks output semantic HTML (`html_semantic_architect`) that Rank Math can properly analyze.

--- 
## --- Sub-Skill: rankmath_seo_mastery
# [ES] Dominio de RankMath SEO
# [EN] Rankmath SEO Mastery

[ES] Explotación del plugin RankMath para optimización extrema en WP.
[EN] RankMath plugin exploitation for extreme WP optimization.


## [!IMPORTANT] The Golden Rule of Rank Math
- **Automation Over Manual Entry**: Use Rank Math's "Global Post Settings" and "Schema Templates" to automatically generate SEO titles and descriptions for thousands of pages at once.
- **IndexNow API Mastery**: Configure and use the "Instant Indexing" feature to notify Google and Bing the SECOND a post is updated or created.
- **Breadcrumbs & Internal Links**: Use Rank Math's built-in breadcrumbs for superior site hierarchy and the "Internal Link Suggestions" feature to strengthen your site's Topical Authority.

## 🛠️ Level 99 Automation (Patterns)
- **Advanced Dynamic Schema**: Use Rank Math's Schema Generator to create "SoftwareApplication" or "LocalBusiness" schemas with custom fields, ensuring that your CRM or SaaS data is visible in Google's Rich Results.
- **Analytics & GSC Deep-Sync**: Master the integration between Rank Math and Google Search Console to track keyword performance directly inside the WordPress dashboard.
- **Redirection & 404 Management**: Automate the creation of 301 redirects for deleted posts to preserve Link Equity and UX.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to audit and optimize your Rank Math configuration.

- **Bulk Index via REST API (Instant Indexing)**:
  ```bash
  (Using specialized plugin) curl -X POST -d '{"url":"https://example.com/new-post"}' https://example.com/wp-json/rankmath/v1/instant-index
  ```
- **Check for JSON-LD Validity (Console)**:
  ```javascript
  (In Console) console.log(JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText));
  ```
- **Audit All Missing Meta Descriptions**:
  ```bash
  (Using Headless Chrome Mastery) Use a script to crawl internal URLs and report missing Rank Math metadata.
  ```

## Advanced Techniques
- **Hook-based Metadata Override**: Use the `rank_math/frontend/title` filter to dynamically override SEO titles based on external data (e.g., real-time prices or stock levels).
- **Multi-Location Local SEO**: Configure Rank Math's Local SEO module for multiple physical or service locations with automated KML file generation.
- **Podcast SEO**: Master the use of specialized Rank Math modules for Podcasting (iTunes tags, etc.) to dominate the audio search market.

## Actionable Script: Schema Validator Pro
- **[schema-validate.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/rankmath_seo_mastery/scripts/schema-validate.js)**: A frontend script to extract and validate JSON-LD schemas directly from a live URL.

## Inter-Skill Integration
- **With Google Search Console Mastery**: Use Rank Math's indexing logs to cross-reference with GSC's "Index Coverage" report.
- **With Technical SEO**: Ensure that Rank Math is outputting canonical URLs and robots meta tags that match your `technical_seo_expert` strategy.
- **With Analytics Tracking Guru**: Use Rank Math's "Analytics" module to correlate SEO changes with actual traffic and conversion increases.
