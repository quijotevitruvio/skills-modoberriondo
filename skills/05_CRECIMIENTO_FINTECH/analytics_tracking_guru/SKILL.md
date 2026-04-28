# [ES] Gurú de Analítica y Rastreo
# [EN] Analytics Tracking Guru

[ES] Configuración maestra de eventos y conversión para inteligencia de negocio.
[EN] Master event and conversion configuration for business intelligence.


## [!IMPORTANT] Server-Side Paradigm (SST)
- **GTM Server-Side (SST)**: No longer optional. Mandatory for bypassing iOS14+ limitations and ad-blockers.
- **First-Party Cookies**: Set cookies from your own subdomain (e.g., `ss.mysite.com`) to extend cookie life from 7 days to 2 years.
- **Privacy Core**: Mandatory **Consent Mode v2** (Advanced) to recover ~65% of "lost" conversion data from non-consenting users via modeling.

## 🛠️ Level 99 Automation (Patterns)
- **The "Full-Stack" Attribution**:
  - GTM Client -> SST Container -> BigQuery (Raw Data) + GA4 + Meta CAPI + TikTok S2S.
- **Deduplication Logic**: Ensure `event_id` is consistent across all platforms to prevent "Double Counting" of conversions.

## Command Library (Data Integrity)
> [!NOTE]
> Use these to audit the data layer and event firing across the full stack.

- **Check DataLayer Object (Console)**:
  ```javascript
  (In Console) window.google_tag_manager["GTM-XXXX"].dataLayer.get("ecommerce");
  ```
- **Verify GTM-SS Request Header**:
  ```bash
  curl -I https://ss.mysite.com/gtm/debug?id=GTM-XXXX
  ```
- **Validate Facebook CAPI Payload**:
  ```bash
  (Using n8n or Python) Post to Graph API's "events" endpoint with 'test_event_code' to verify real-time processing.
  ```

## Advanced Tracking & E-commerce
- **Enhanced Conversions (EC)**: Send hashed PII (email/phone) to Google Ads for +15% conversion lift in "Search" and "Performance Max" campaigns.
- **Profit Tracking**: Pass "Cost of Goods Sold" (COGS) to GA4 custom dimensions to calculate real-time "Return on Ad Spend" (ROAS) based on net profit.
- **User ID Tracking**: Synchronize `user_id` across CRM, GA4, and Meta to track the "Full Customer Journey" from First Click to Lifetime Value.

## Server-Side GTM (SSGTM) & Protocol Buffers
- **Custom HTTP Clients**: Use SSGTM to intercept incoming requests and transform them into optimized Protocol Buffer payloads for high-speed transmission to BigQuery or APIs.
- **Data Enrichment at the Edge**: Automatically add CRM data (e.g. Lead Score, LTV) to your tracking events on the server-side before they reach GA4 or Meta.
- **Bypassing ITP & Ad-Blockers**: Since SSGTM runs on your own subdomain, it is invisible to most browser-level trackers and ad-blockers, recovering ~30% of lost data.

## Actionable Script: SSGTM Config Pro
- **[ssgtm-config.json](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/analytics_tracking_guru/scripts/ssgtm-config.json)**: A Level 99 configuration template for a Google Tag Manager Server Container, including Cloud Run setup and custom variable logic.

## Inter-Skill Integration
- **With Ethical AI Guardrails**: Use SSGTM to "Sanitize" PII from tracking events before they are sent to third-party ad platforms.
- **With GCP Cloud Architect**: Deploy your SSGTM container on Cloud Run with automatic scaling and high availability.
- **With TikTok Ads Expert**: Connect your server-side events directly to the TikTok Events API via the SSGTM "TikTok" tag for maximum attribution.

