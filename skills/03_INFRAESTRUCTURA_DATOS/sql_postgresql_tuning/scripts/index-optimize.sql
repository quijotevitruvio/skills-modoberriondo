-- Level 99 PostgreSQL Index & Performance Optimizer
-- Purpose: Find tables where Postgres is forced to scan the whole table (slow).
-- Usage: Run in psql or any SQL client (pgAdmin, DBeaver).

SELECT 
    schemaname, 
    relname AS table_name, 
    seq_scan, 
    seq_tup_read, 
    idx_scan, 
    idx_tup_fetch,
    cast(seq_scan as float) / (seq_scan + idx_scan + 0.0001) as Percent_Seq_Scan
FROM 
    pg_stat_user_tables 
WHERE 
    seq_scan > 100 -- Ignore small or new tables
ORDER BY 
    Percent_Seq_Scan DESC;

-- Actionable Suggestion Generator:
-- If Percent_Seq_Scan > 0.8 on a large table, consider adding:
-- CREATE INDEX CONCURRENTLY idx_name ON table_name (column_name);
