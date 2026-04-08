# Cloudflare Expert Skill (Level 99)

Ultra-performance edge orchestration for sub-100ms global TTFB and military-grade security.

## [!IMPORTANT] DNS & Proxy Architecture
- **Proxied Status (Full Proxy)**: Enable for all traffic. Bypass only for non-HTTP services.
- **DNSSEC**: Mandatory for TLD protection. Enable in Cloudflare and add the DS record to your registrar.
- **Apex Domain**: Use CNAME Flattening to point the root domain to a CDN or hosting CNAME.

## 🛠️ Level 99 Automation (Scripts)
- **WAF Bulk Sync**: [waf-sync.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cloudflare_expert/scripts/waf-sync.sh)
  - *Usage*: Use this script to upload pre-hardened firewall rules via API for zero-config security.

## Command Library (API & Analytics)
> [!NOTE]
> Use these when API-based automation is needed or via Cloudflare CLI (`wrangler`).

- **Purge Cache by Tag**:
  ```bash
  curl -X POST "https://api.cloudflare.com/client/v4/zones/ZONE_ID/purge_cache" \
       -H "Authorization: Bearer API_TOKEN" \
       --data '{"tags":["wordpress","css"]}'
  ```

## Advanced Security (WAF & Zaraz)
- **WAF Custom Rules**:
  - **Block XML-RPC & Config**: Use the provided `waf-sync.sh` script to block `.htaccess` and `wp-config.php` access.
  - **Bot Management**: "Verified Bot" skip rule to allow Google/Bing crawling while challenging "Unknown" automated agents.
- **Zaraz (Zero-Latency Tracking)**: 
  - Offload GTM, Facebook Pixel, and TikTok Pixel to the edge via Zaraz. This improves INP/LCP by 40%+.

## Performance & Edge Optimization
- **Smart Tiered Cache**: Drastically reduces egress costs and origin load.
- **Brotli + Early Hints**: Always enabled for lower TTFB.
- **Cache Everything (Advanced)**: Use "Cache Reserve" (Paid) to keep static assets at the edge for up to 30 days without re-fetching.

## Inter-Skill Integration
- **With LiteSpeed**: Enable "Stale-While-Revalidate" in both to eliminate origin wait time.
- **With WP-WooCommerce**: Disable edge caching for `/cart/` and `/checkout/` using "Cache Level: Bypass" Page Rules.


