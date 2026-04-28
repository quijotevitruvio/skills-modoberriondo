# Ferozo & DonWeb Management Skill (Level 99)

Master-level administration of the Ferozo Control Panel and DonWeb hosting infrastructure. Specialized in optimizing performance, security, and automated delivery for regional high-traffic websites in LATAM.

## 🏔️ DonWeb Cloud & Infrastructure Mastery
- **Cloud Server Orchestration**: Provisioning and scaling OpenStack-based (conceptual) high-performance instances within the DonWeb ecosystem.
- **Resource Monitoring**: Advanced usage of the DonWeb dashboard to identify I/O bottlenecks and memory leaks in shared and cloud environments.
- **Auto-Scaling Logic**: Designing failover strategies between DonWeb regional clusters (Argentina, Mexico, etc.).

## 🛠️ Ferozo Power-User Hacks (Level 99)
- **LiteSpeed & ModSecurity Mastery**: Surgical configuration of `.htaccess` for LiteSpeed Cache and WAF bypasses for legitimate API traffic.
- **Headless Ferozo**: While Ferozo lacks a public API, use `cron` and `bash` inside the VPS to automate user provisioning, database backups, and certificate rotations via the internal Ferozo binary hooks.
- **Database Hardening**: Optimizing MariaDB/MySQL within Ferozo for extreme read throughput, crucial for regional e-commerce surges during "Hot Sale" or "Black Friday".

## ⚙️ Actionable Patterns
- **Cron Job Decoupling**: Disable `wp-cron.php` and use Ferozo's native task scheduler:
  ```bash
  # In Ferozo Cron Manager:
  /usr/local/bin/php /home/user/public_html/wp-cron.php > /dev/null 2>&1
  ```
- **Force Global SSL**:
  ```apache
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```

## 🚀 Automation Script: Ferozo Health Bot
- **[ferozo_health_bot.py](file:///C:/Users/Rocka/.antigravity/skills/ferozo_donweb_management/scripts/ferozo_health_bot.py)**: A Python utility to check SSL expiry, disk usage, and PHP-FPM pool status specifically for Ferozo configurations.

## 🔗 Inter-Skill Integration
- **With [LiteSpeed Optimizer](file:///C:/Users/Rocka/.antigravity/skills/litespeed_optimizer/SKILL.md)**: Perfect synchronization for sub-second page loads.
- **With [DIAN Compliance](file:///C:/Users/Rocka/.antigravity/skills/dian_colombia_compliance/SKILL.md)**: Ensuring high-availability for invoicing systems hosted on DonWeb.
- **With [Security Hardening](file:///C:/Users/Rocka/.antigravity/skills/cybersecurity_hardening/SKILL.md)**: Implementing custom IP-based blocking at the Ferozo firewall level.
