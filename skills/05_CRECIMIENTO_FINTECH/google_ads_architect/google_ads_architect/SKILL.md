# Google Ads Architect Skill (Level 99)

Master-level orchestration of the Google Ads ecosystem, focusing on Search, Performance Max (PMax), Display, and Youtube campaigns with deep-level bidding strategy optimization and server-side attribution.

## [!IMPORTANT] The Golden Rule of Google Ads
- **Quality Score is King**: High-quality landing pages and ad relevance reduce your CPC (Cost Per Click) and improve your Ad Rank. Focus on LCP (Largest Contentful Paint) for your destination URLs.
- **Data-Driven Bidding**: Trust the "Smart Bidding" (tCPA/tROAS), but feed it "Clean Data." Use [Enhanced Conversions](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/analytics_tracking_guru/SKILL.md) to improve signal strength.
- **Broad Match + Smart Bidding**: The Level 99 combo. Let Google's AI find the intent, but use a rigorous **Negative Keyword List** to prevent waste.

## 🛠️ Level 99 Automation (Patterns)
- **The "Full-Funnel" PMax**: Combine high-quality video assets (YouTube) with strict search signals to dominate the entire Google ecosystem in one campaign.
- **Dynamic Search Ads (DSA)**: Automatically generate ads based on your website content to capture "Long-Tail" search queries that you missed in keyword research.
- **Scripts-Based Optimization**: Use Google Ads Scripts (JavaScript) to pause underperforming keywords or adjust budgets based on real-time external data (e.g., Weather, Inventory level).

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to analyze and optimize your campaigns instantly.

- **Check Conversion Lag (Script)**:
  ```javascript
  (Using Google Ads Scripts) var report = AdsApp.report("SELECT ConversionLag... FROM ACCOUNT_PERFORMANCE_REPORT");
  ```
- **Audit Low Quality Score Keywords**:
  ```javascript
  (Using Google Ads Scripts) var keywords = AdsApp.keywords().withCondition("QualityScore < 5").get();
  ```
- **Preview Ad Schedule Performance**:
  ```bash
  (Using Looker Studio) Filter by "Day of Week" to identify waste hours.
  ```

## Advanced Techniques
- **Value-Based Bidding (VBB)**: Don't just bid for "Conversions"; bid for "Profit." Pass the margin value via the data layer to optimize for ROAS, not just CPA.
- **Custom Intent Audiences**: Build segments of users who have searched for your competitors' terms to target them across the Display and YouTube network.
- **Negative Keyword Scripting**: Automatically pull search terms with 0 conversions and high spend from the last 30 days and add them to a shared "Negative List."

## Actionable Script: GAds Audit Pro
- **[gads-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/google_ads_architect/scripts/gads-audit.js)**: A Google Ads Script boilerplate to audit account health, find 0-conversion spenders, and verify tracking status.

## Inter-Skill Integration
- **With Analytics Tracking Guru**: Ensure [Server-Side GTM](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/analytics_tracking_guru/scripts/ssgtm-config.json) is firing Google Ads conversion tags with First-Party data.
- **With Technical SEO**: High-speed, high-relevance pages improved through SEO also lower your Google Ads CPC via higher Quality Scores.
- **With AI Content Automation**: Generate thousands of "Ad Variations" (Headlines/Descriptions) based on top-performing search term intent.
