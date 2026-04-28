# [ES] Automatización de Email y CRM
# [EN] Email Marketing CRM Automation

[ES] Flujos de comunicación masiva personalizada basados en comportamiento.
[EN] Behavior-based personalized mass communication flows.


## [!IMPORTANT] The Prime Directives of Retention
- **Retention > Acquisition**: It is 5x cheaper to keep a customer than to find a new one. Your CRM is your most valuable asset.
- **Segment or Die**: Batch-and-blast is dead. Level 99 experts segment by "Recency, Frequency, and Monetary" (RFM) values or custom lifecycle stages (e.g., Prospect vs. Whale).
- **Deliverability First**: Maintain high "Sender Reputation." Clean your lists monthly and implement **BIMI**, **DKIM**, and **DMARC** to ensure 99% inbox placement.

## 🛠️ Level 99 Automation (Patterns)
- **The "Infinite Loop" Recovery**: Advanced Cart Abandons that don't just "remind," but offer dynamic discounts based on the user's predicted LTV.
- **Win-Back Flows**: Automatically re-engage users who haven't opened an email in 60 days with a "Last Chance" offer or a direct survey to improve the product.
- **CRM-to-Ads Bridge**: Synchronize your "VIP Segment" from your CRM to [Meta Ads](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/meta_ads_architect/SKILL.md) and [Google Ads](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/google_ads_architect/SKILL.md) for automated Lookalike audience building.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these logic patterns to optimize your CRM flows.

- **Check API Sync Health (cURL)**:
  ```bash
  curl -X GET "https://api.activecampaign.com/api/3/contacts" -H "Api-Token: YOUR_TOKEN"
  ```
- **Verify DMARC Compliance**:
  ```bash
  dig +short TXT _dmarc.yourdomain.com
  ```
- **Simulate Campaign ROI**:
  ```bash
  (Using SQL) SELECT SUM(order_value) FROM orders WHERE utm_source = 'klaviyo' AND date > '2026-03-01';
  ```

## Advanced Techniques
- **Dynamic Content Liquid Logic**: Use Liquid/Zendesk-style logic to show different blocks of content to different segments within the SAME email.
- **Post-Purchase Upsell Matrix**: Automatically trigger a specific product recommendation 3 days after purchase based on the "Next Likely Product" data from your [Big Data Analyst](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/big_data_looker_master/SKILL.md).
- **Preference Center Hardening**: Allow users to opt-out of "Marketing" while keeping "Transactional" (Shipping/Billing) alerts active, reducing total unsubscribe rates.

## Actionable Script: CRM Sync Validator
- **[crm-sync-validator.py](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/email_marketing_crm_automation/scripts/crm-sync-validator.py)**: A Python script to cross-reference CRM contact counts with your local database to ensure 100% data integrity.

## Inter-Skill Integration
- **With n8n Automation**: Use [n8n](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/n8n_automation/SKILL.md) to bridge Shopify/WooCommerce events to your CRM with zero-delay webhooks.
- **With Analytics Tracking Guru**: Ensure [Server-Side GTM](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/analytics_tracking_guru/scripts/ssgtm-config.json) passes the `email` hash to Meta CAPI to unify the customer journey.
- **With AI Content Automation**: Use LLMs to generate 10+ personalized email subject line variations for A/B testing.