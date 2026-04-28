# [ES] Maestro en Big Data y Looker
# [EN] Big Data Looker Master

[ES] Visualización y análisis avanzado de datos masivos para decisiones críticas.
[EN] Advanced visualization and analysis of massive data for critical decisions.


## [!IMPORTANT] The Golden Rule of BI
- **One Version of Truth**: Ensure your metrics (e.g. CAC, LTV) are calculated exactly the same way in SQL before they reach the dashboard.
- **Data Blending**: Never rely on a single source. Combine CRM data (Revenue) with Ad Platform data (Ad Spend) to find the REAL Profit/Loss.
- **Latency & Performance**: Use "BI Engine" or "Materialized Views" in your DB to ensure Looker reports load in < 2 seconds.

## 🛠️ Level 99 Automation (Patterns)
- **The "Unified Marketing" SQL**: A master query that joins GTM events, Meta Ads costs, and CRM conversion statuses.
- **LookML Mastery**: Build reusable data models that keep your dashboards dry and consistent.
- **Automated Alerts**: Set up Slack/Email notifications directly from Looker if a critical KPI (conversion rate) drops below target.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to audit and fix your data pipelines instantly.

- **Check Data Freshness (BigQuery/SQL)**:
  ```sql
  SELECT max(created_at) FROM master_events_table;
  ```
- **Force Cache Refresh (Looker Studio)**:
  ```bash
  (Using Browser) Click "Refresh Data" or set the cache-expiry to 15 minutes for real-time monitoring.
  ```
- **Audit Data Type Mismatches**:
  ```sql
  (Using Data-Blend Script) Ensure all date formats match ISO 8601 for correct time-series analysis.
  ```

## Advanced Techniques
- **Predictive Analytics**: Use Python (via BigQuery ML) to predict next month's churn based on historical usage patterns.
- **Attribution Modeling**: Move from "Last Click" to "Data-Driven" attribution to understand the true impact of every marketing touchpoint.
- **Executive Summarizers**: Use AI (via Node.js) to "Read" your dashboard data and send a 3-bullet summary to the CEO every morning.

## Actionable Script: Data Blender
- **[data-blend.sql](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/big_data_looker_master/scripts/data-blend.sql)**: A master SQL view that joins Marketing Spend with CRM Revenue for instant ROI visualization in Looker Studio.

## Inter-Skill Integration
- **With Meta/TikTok Ads**: Automatically pull spend data via API to calculate real-time ROAS in your Big Data reports.
- **With n8n**: Automate the export of CRM data into your SQL database every hour for up-to-the-minute dashboards.
- **With CRO Scientist**: Use dashboard insights to choose which pages need A/B testing first.