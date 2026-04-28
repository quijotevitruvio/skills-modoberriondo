/*
  Level 99 SQL Slayer Pro
  Purpose: Identify and kill "Killer" queries with high CPU or lock duration.
*/

-- 1. Scan for Total "Slow" Queries (> 5 seconds)
SELECT 
    pid, 
    now() - query_start AS duration, 
    query, 
    state,
    wait_event_type,
    wait_event
FROM pg_stat_activity 
WHERE state != 'idle' 
  AND now() - query_start > interval '5 seconds'
ORDER BY duration DESC;

-- 2. KILL SPECIFIC LONG-RUNNING TRANSACTION (One-Click Guard)
-- Replace <PID> with the value from the query above
-- SELECT pg_terminate_backend(<PID>);

-- 3. Automatic "Hard Limit" Setter for the session (One-Click Performance)
-- Ensures no query in the current session can exceed 10 seconds.
SET statement_timeout = '10s';

-- 4. Find the "Lock Kings" (Who is blocking the most?)
SELECT 
    blocked_locks.pid     AS blocked_pid,
    blocking_locks.pid    AS blocking_pid,
    blocked_activity.query  AS blocked_statement,
    blocking_activity.query AS blocking_statement
FROM  pg_catalog.pg_locks         blocked_locks
JOIN pg_catalog.pg_stat_activity  blocked_activity  ON blocked_locks.pid = blocked_activity.pid
JOIN pg_catalog.pg_locks          blocking_locks
  ON blocking_locks.locktype = blocked_locks.locktype
  AND blocking_locks.database IS NOT DISTINCT FROM blocked_locks.database
  AND blocking_locks.relation IS NOT DISTINCT FROM blocked_locks.relation
  AND blocking_locks.page IS NOT DISTINCT FROM blocked_locks.page
  AND blocking_locks.tuple IS NOT DISTINCT FROM blocked_locks.tuple
  AND blocking_locks.virtualxid IS NOT DISTINCT FROM blocked_locks.virtualxid
  AND blocking_locks.transactionid IS NOT DISTINCT FROM blocked_locks.transactionid
  AND blocking_locks.classid IS NOT DISTINCT FROM blocked_locks.classid
  AND blocking_locks.objid IS NOT DISTINCT FROM blocked_locks.objid
  AND blocking_locks.objsubid IS NOT DISTINCT FROM blocked_locks.objsubid
  AND blocking_locks.pid != blocked_locks.pid
JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_locks.pid = blocking_activity.pid
WHERE NOT blocked_locks.granted;
