# SQL & PostgreSQL Tuning Skill (Level 99)

Master-level database orchestration, focusing on query optimization, advanced indexing (GIN, BRIN), and PostgreSQL internal health (WAL, Vacuum).

## [!IMPORTANT] The Golden Rule of SQL Performance
- **Explain Analyze**: Never optimize without data. Always use `EXPLAIN (ANALYZE, BUFFERS)` to see the REAL plan and buffer hits.
- **Index Only Scans**: Target these to eliminate costly table heap fetches.
- **Connection Pooling**: Use `PgBouncer` to prevent Node.js connection spikes from killing the CPU.

## 🛠️ Level 99 Automation (Patterns)
- **The "Materialized View" Strategy**: Store heavy dashboard calculations in refreshed views for 100x faster reads.
- **Wait and See (Locks)**: Build a "Lock Monitor" to identify which long-running transactions are blocking your CRM's write performance.
- **JSONB Indexing**: Use `GIST` or `GIN` indexes on JSONB columns to query dynamic CRM fields with relational speed.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to identify and fix SQL bottlenecks instantly.

- **Check Current Active Queries**:
  ```sql
  SELECT pid, now() - query_start AS duration, query, state 
  FROM pg_stat_activity 
  WHERE state != 'idle' ORDER BY duration DESC;
  ```
- **Identify Table Bloat**:
  ```sql
  SELECT relname AS table, pg_size_pretty(pg_total_relation_size(relid)) AS AS total_size 
  FROM pg_catalog.pg_statio_user_tables ORDER BY pg_total_relation_size(relid) DESC;
  ```
- **Force Index Maintenance**:
  ```sql
  REINDEX TABLE table_name; VACUUM ANALYZE table_name;
  ```

## Advanced Techniques
- **Partial Indexes**: Create indexes with `WHERE` clauses (e.g. `is_active = true`) to save disk space and audit time.
- **WAL Tuning**: Optimize `max_wal_size` and `min_wal_size` for write-heavy SaaS platforms.
- **Transaction Isolation**: Use `READ COMMITTED` by default, but understand `SERIALIZABLE` for mission-critical financial data.

## Actionable Script: Index Optimizer
- **[index-optimize.sql](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/sql_postgresql_tuning/scripts/index-optimize.sql)**: A script to find sequential scans on large tables and suggest missing B-Tree or GIN indexes.

## Active Database Health Guardian
- **Kill Blocked Queries**: Automatically identify and terminate sessions that have been waiting for a lock for > 30 seconds to prevent application-wide hanging.
- **Auto-Vacuum Tuning**: Monitor and adjust autovacuum settings (`autovacuum_vacuum_scale_factor`) to prevent table bloat during high-write CRM activities.
- **Connection Handover**: Use `statement_timeout` at the session level to ensure that no single query can monopolize the CPU for more than X seconds.

## Actionable Script: SQL Slayer Pro
- **[slow-query-killer.sql](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/sql_postgresql_tuning/scripts/slow-query-killer.sql)**: A powerful SQL script to instantly identify and terminate "Killer" queries with high CPU or lock duration.

## Inter-Skill Integration
- **With Performance Engineering**: SQL Tuning is the "Anchor" of the 100ms Goal for every data-driven request.
- **With n8n**: Automated daily database health report (Bloat vs Index usage) sent to the admin via WhatsApp.
- **With hostinger_management**: Connect via terminal and use `pg_top` for real-time IO monitoring.
