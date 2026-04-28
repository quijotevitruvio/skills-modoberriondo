# Technical SEO Expert Skill (Level 99)

Master-level search orchestration for absolute SERP dominance and sub-second Core Web Vitals.

## [!IMPORTANT] Core Web Vitals (CWV) & INP
- **Interaction to Next Paint (INP)**: The new gold standard. Minimize main-thread blocking by offloading 100% of tracking to **Cloudflare Zaraz**.
- **LCP Optimization**: Mandatory `<link rel="preload" fetchpriority="high">` for the first contentful image.
- **CLS Prevention**: Set explicit `width` and `height` for every image and ad container to eliminate layout shift.

## 🛠️ Level 99 Automation (Scripts)
- **Automated SEO Audit**: [seo-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/technical_seo_expert/scripts/seo-audit.js)
  - *Usage*: Run via Node.js (`node seo-audit.js https://site.com`) to check Lighthouse scores, Schema, and Meta data in one pass.

## Command Library (SEO Diagnostics)
> [!NOTE]
> Use these to monitor indexation and crawl health without opening a browser.

- **Check Robots.txt & Sitemap Status**:
  ```bash
  curl -X GET "https://mysite.com/robots.txt" && curl -I "https://mysite.com/sitemap_index.xml"
  ```
- **Verify Instant Indexing (IndexNow)**:
  ```bash
  curl -G "https://www.bing.com/indexnow" -d "url=https://mysite.com/new-post&key=API_KEY"
  ```
- **Batch Lighthouse Audit**:
  ```bash
  npx -y lhci autorun --upload-bucket-target=filesystem
  ```

## RankMath & Schema Architecture
- **Advanced Schema**: Beyond basic Products. Implement **VideoObject**, **Course**, and **localBusiness** schema using RankMath's specialized blocks.
- **Schema Validation**: Use the provided `seo-audit.js` to ensure the JSON-LD payload is valid and readable by Google.
- **Redirection Logic**: Set up `404` monitoring in RankMath to auto-capture broken links and redirect them to relevant categories.

## Crawl Budget & Rendering
- **Server-Side Rendering (SSR)**: Ensure that all dynamic content is readable by the `GoogleBot` without requiring heavy JS execution.
- **Dynamic Serving**: Serve a lightweight, high-performance version of the site specifically for search engine crawlers.

## Inter-Skill Integration
- **With Analytics**: Use the "Search Console" + "GA4" integration to find "Low CTR, High Impression" keywords for easy wins.
- **With AI Content**: Automate meta-description generation using [ai_content_automation](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/ai_content_automation/SKILL.md).
- **With n8n**: Weekly "SEO Health Check" that runs `seo-audit.js` and sends a PDF report to the admin via WhatsApp.


