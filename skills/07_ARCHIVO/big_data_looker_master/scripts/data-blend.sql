-- Level 99 Big Data: Unified ROI View
-- Purpose: Join Ad Spend with actual CRM Revenue for Looker Studio dashboards.
-- Usage: Run in BigQuery, Postgres, or Snowflake.

CREATE OR REPLACE VIEW marketing_roi_dashboard AS
WITH ad_spend AS (
    -- Aggregate spend from multiple platforms
    SELECT 
        date, 
        'Meta' as source, 
        sum(spend) as total_spend 
    FROM meta_ads_raw GROUP BY 1, 2
    UNION ALL
    SELECT 
        date, 
        'TikTok' as source, 
        sum(cost) as total_spend 
    FROM tiktok_ads_raw GROUP BY 1, 2
),
crm_revenue AS (
    -- Aggregate actual revenue from the CRM
    SELECT 
        date(created_at) as date, 
        utm_source as source, 
        sum(deal_value) as total_revenue 
    FROM crm_deals 
    WHERE status = 'WON'
    GROUP BY 1, 2
)
SELECT 
    s.date,
    s.source,
    s.total_spend,
    coalesce(r.total_revenue, 0) as total_revenue,
    (coalesce(r.total_revenue, 0) - s.total_spend) as net_profit,
    CASE 
        WHEN s.total_spend > 0 THEN (coalesce(r.total_revenue, 0) / s.total_spend) 
        ELSE 0 
    END as roas
FROM ad_spend s
LEFT JOIN crm_revenue r ON s.date = r.date AND s.source = r.source
ORDER BY s.date DESC;
