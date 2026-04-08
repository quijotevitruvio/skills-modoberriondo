# Migration Guru Skill (Level 99)

Master-level orchestration for zero-downtime, sub-second transitions of complex multi-gigabyte digital ecosystems.

## [!IMPORTANT] Pre-Migration Precision
- **TTL Orchestration**: Set DNS TTL to 120s (2 mins) 48h before the move.
- **Staging Mirror**: Always perform a "Dry Run" on a Hostinger Staging slot.
- **Snapshot Hierarchy**: 1. Hostinger Snapshot, 2. Local SQL Gzip, 3. Off-site S3 backup.

## 🛠️ Level 99 Automation (Scripts)
- **High-Speed Mega Transfer**: [mega-migration.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/migration_guru/scripts/mega-migration.sh)
  - *Usage*: Use this script to rsync files and tunnel SQL exports via SSH in one fluid operation.

## Command Library (High-Volume Migration)
> [!NOTE]
> Use these via SSH to migrate 100GB+ sites where traditional plugins timeout.

- **Selective Rsync (Exclude Cache)**:
  ```bash
  rsync -avzP --exclude 'wp-content/cache/*' --exclude 'node_modules/' user@old-ip:/path/to/wp/ .
  ```
- **Precision Search-Replace (Domain Change)**:
  ```bash
  wp search-replace "old-domain.com" "new-domain.com" --precise --all-tables --report-changed-only
  ```
- **Reset DB Settings (Plugin-Safe)**:
  ```bash
  wp option update siteurl "https://newsite.com" && wp option update home "https://newsite.com"
  ```

## Zero-Downtime Migration Architecture
- **DNS Proxy Flip**: Keep the Cloudflare proxy (Orange Cloud) ON during the move to mask the origin IP change.
- **Database Prefix Matching**: Ensure `$table_prefix` in `wp-config.php` is identical to the source SQL file.
- **Serialized Data Protection**: Never edit SQL files in a text editor for domain changes; always use `wp search-replace` to preserve binary-safe serialization.

## Post-Migration Validation (UAT)
- **Hard Refresh**: Clear `LiteSpeed` and `Cloudflare` caches simultaneously using [litespeed-purge-all](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/litespeed_optimizer/SKILL.md).
- **Rewrite Verification**: Run `wp rewrite flush --hard` to synchronize `.htaccess` with the new environment.

## Inter-Skill Integration
- **With Hostinger**: Use the "Copy Website" tool for internal transfers.
- **With Technical SEO**: Run the [seo-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/technical_seo_expert/scripts/seo-audit.js) script immediately after migration to ensure no 404s.
- **With Cybersecurity**: Immediately run the [harden.sh](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cybersecurity_hardening/scripts/harden.sh) script on the new server.


