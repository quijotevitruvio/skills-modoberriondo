# [ES] Gestión en Hostinger
# [EN] Hostinger Management

[ES] Administración berraca de entornos de hosting y vps en Hostinger.
[EN] Effective hosting and VPS administration in Hostinger.


## [!IMPORTANT] Hostinger Performance Axioms
- **Object Cache is the Secret Sauce**: Hostinger’s Redis integration (Object Cache) is the single most effective way to reduce TTFB (Time to First Byte). Always ensure it is active in hPanel and configured in your application.
- **LiteSpeed Enterprise Protocol**: Unlike standard Apache, Hostinger uses LiteSpeed. Ensure your `.htaccess` uses `LSCache` tags to allow the server to cache static AND dynamic fragments.
- **Data Center Proximity**: Leverage Hostinger’s global footprint. Deploy your hPanel instance as close as possible to your target audience (e.g., SA-East-1 for Brazil/Argentina).

## 🛠️ Level 99 Management (Patterns)
- **The "Staging-to-Prod" Flow**: Use hPanel’s native Staging tool to test major updates. Push to production only after the [QA Automation](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/qa_automation/SKILL.md) suite passes in the staging environment.
- **Zero-Downtime Backup**: Configure Hostinger’s daily backups to sync with an external [AWS S3 Bucket](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/aws_cloud_architect/SKILL.md) for 100% data durability.
- **Malware Scanner Hardening**: While Hostinger has a built-in scanner, supplement it with custom cron jobs to audit `wp-content/uploads` for suspicious PHP execution.

## Command Library (Diagnostics & Configuration)
> [!NOTE]
> Most hPanel actions are GUI-driven, but these CLI-level logic flows are vital for expert troubleshooting via SSH.

- **Check Server Load (SSH)**:
  ```bash
  top -b -n 1 | head -n 10 // Analyze CPU/Memory usage on your Hostinger VPS
  ```
- **Verify Redis Connection (PHP)**:
  ```php
  $redis = new Redis();
  $redis->connect('127.0.0.1', 6379);
  echo "✅ Connection: " . $redis->ping();
  ```
- **Audit .htaccess for LiteSpeed**:
  ```apache
  <IfModule LiteSpeed>
    CacheEnable public
    RewriteEngine On
    RewriteCond %{REQUEST_METHOD} ^GET|HEAD$
    RewriteRule .* - [E=Cache-Control:max-age=3600]
  </IfModule>
  ```

## Advanced Techniques
- **hPanel API Integration**: (For Business/Cloud plans) Look for undocumented API headers to automate subdomain creation or SSL provisioning via custom [n8n](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/n8n_automation/SKILL.md) scripts.
- **CDN Global Relay**: Bridge Hostinger’s native CDN with [Cloudflare Expert](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cloudflare_expert/SKILL.md) for advanced WAF and Page Shield security.
- **MySQL Optimization**: Use hPanel's "Optimize Database" weekly. For tables larger than 1GB, manually partition them or check for overhead via phpMyAdmin.

## Actionable Script: Hostinger Health Audit
- **[hostinger-audit.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/hostinger_management/scripts/hostinger-audit.sh)**: A shell script to verify performance metrics, Redis status, and security headers on a Hostinger-hosted site.

## Inter-Skill Integration
- **With WP/WooCommerce Architect**: Fine-tune the [WooCommerce settings](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/wp_woocommerce_architect/SKILL.md) to leverage Hostinger's LiteSpeed Object Cache.
- **With Technical SEO**: Use Hostinger’s "Page Speed" dashboard signals to identify LCP bottlenecks before they impact GSC.
- **With Python Automation**: Schedule remote Python scripts to scrape your own site and monitor for "404 Spikes" or "Down Time" reports.