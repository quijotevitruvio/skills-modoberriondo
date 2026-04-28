# LiteSpeed Cache Optimizer Skill (Level 99)

Master-level performance orchestration for sub-second, zero-latency WordPress and WooCommerce ecosystems powered by LiteSpeed Enterprise.

## [!IMPORTANT] Core Edge Cache & CDN
- **QUIC.cloud CDN (Enterprise)**: Mandatory for "Dynamic Edge Caching". Link your server IP and enable "Static Cache" + "Dynamic Cache".
- **Object Cache (Redis Hybrid)**: Mandatory for sub-100ms database responses in WooCommerce. Use **Redis** via Port 6379 and set "Connection Test" to GREEN.
- **REST API Caching**: Enable to eliminate latency for mobile apps and modern block-based editors.

## 🛠️ Level 99 Automation (Patterns)
- **The "ESI" Magic**:
  - Enable **Edge Side Includes (ESI)** to cache the entire page for 7 days while keeping dynamic blocks (Cart, Login, Recently Viewed) live and uncached.
- **Background Pushing**: 
  - Automate Image & CSS optimization via CLI to avoid PHP-FPM worker congestion.

## Command Library (LSCache CLI)
> [!NOTE]
> Use these via SSH to manage the cache layer with zero overhead.

- **Check Cache Status (Full Report)**:
  ```bash
  wp litespeed-purge status --all
  ```
- **Mass Purge Everything**:
  ```bash
  wp litespeed-purge all && wp cache flush
  ```
- **Queue Image Optimization (LTC)**:
  ```bash
  wp litespeed-image push && wp litespeed-image pull
  ```

## Advanced Optimization (The 100/100 Rule)
- **UCCSS (Unique Context CSS)**: Combined with QUIC.cloud to generate the "Critical CSS" for every unique page, eliminating "Reduce Unused CSS" errors in Lighthouse.
- **JS Delay (Smart Mode)**: Delay all JS execution until user interaction (scroll/click) to achieve a 0ms "Total Blocking Time" (TBT).
- **VPI (Viewport Images)**: Prioritize LCP images automatically based on user viewport data.

## Persistent Object Cache (Redis)
- **High-Traffic Scaling**: If on VPS, increase `maxmemory` in `redis.conf` to 512MB and use `allkeys-lru` eviction policy for WooCommerce sessions.
- **WP-CLI Diagnostic**:
  ```bash
  wp cache get --group=options my_option_name
  ```

## Inter-Skill Integration
- **With Cloudflare**: Disable "Rocket Loader" to avoid conflicts with LiteSpeed JS Delay.
- **With Technical SEO**: Use LiteSpeed's "Image WebP Replacement" to satisfy all next-gen format requirements.
- **With Cybersecurity**: Enable "Crawler" settings to pre-warm the cache, but exclude "Known Spammers" via the [harden.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cybersecurity_hardening/scripts/harden.sh) logic.


