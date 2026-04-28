# WordPress & WooCommerce Architect Skill (Level 99)

The ultimate blueprint for high-availability, sub-second E-commerce and enterprise-grade WordPress systems.

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


