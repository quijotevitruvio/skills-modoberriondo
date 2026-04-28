# Expert Troubleshooter Skill (Level 99)

Master-level diagnostics for sub-second resolution of multi-stack architectural failures and performance bottlenecks.

## [!IMPORTANT] The 3-Layer Diagnostic Rule
- **Layer 1 (Edge)**: Check Cloudflare Analytics/Events. Are IPs being blocked? Is the SSL/TLS Handshake failing?
- **Layer 2 (Server)**: Check Hostinger hPanel "Resource Usage". Are we hitting PHP Worker limits or I/O caps?
- **Layer 3 (App)**: Enable `WP_DEBUG_LOG`. The truth is always in `/wp-content/debug.log`.

## 🛠️ Level 99 Automation (Patterns)
- **The "Binary Search" Debug**:
  - Disable all plugins via WP-CLI (`wp plugin deactivate --all`) -> Re-enable half -> Isolate the culprit in $log(n)$ steps.
- **Log Streaming**: 
  - Trace real-time execution via SSH: `tail -f wp-content/debug.log | grep -i "error"`.

## Command Library (Deep Diagnostics)
> [!NOTE]
> Use these to find the needle in the haystack when the GUI is unresponsive.

- **Check Active PHP Processes**:
  ```bash
  ps aux | grep php-fpm
  ```
- **Profile Site Execution (CLI-style)**:
  ```bash
  wp profile stage --all --spotlight --fields=stage,time,percent
  ```
- **Recursive Vulnerability Search**:
  ```bash
  (Using n8n or Python) Search for common malware strings (e.g. "eval(base64_decode") across the entire /public_html/.
  ```

## Performance & Bottleneck Analysis
- **MySQL Slow Query Audit**: Use `wp db query "SHOW PROCESSLIST;"` to identify queries hanging for > 5s.
- **Object Cache Health**: Check Redis memory fragmentation and hit rate via `redis-cli info`.
- **TTFB Analysis**: If TTFB is > 500ms and Cloudflare is ON, check if "Bypass Cache on Cookie" (WooCommerce) is triggering unnecessary origin requests.

## Critical Recovery Tactics
- **WSoD (White Screen)**: Force a theme change via CLI: `wp theme activate twentytwentyfour`.
- **Database Corruption**: Run `wp db repair` and `wp db optimize`.
- **Stuck Background Tasks**: Clear Action Scheduler backlog: `wp action-scheduler run`.

## Inter-Skill Integration
- **With Cloudflare**: If error 522/524 occurs, check the origin firewall or if the web server is crashing under load.
- **With n8n**: Automated Slack/WhatsApp alert when the `debug.log` size increases by > 1MB in 5 minutes (indicating a loop).
- **With Migration Guru**: Always run `wp rewrite flush --hard` after any domain or server change to prevent 404s.


