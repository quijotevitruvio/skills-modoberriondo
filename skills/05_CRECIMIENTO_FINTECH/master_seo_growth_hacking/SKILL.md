# --- MASTER SEO GROWTH HACKING
Consolidated Knowledge Base - SkillsLocal Sovereign Environment


--- 
## --- Sub-Skill: technical_seo_expert
# [ES] Experto en SEO Técnico
# [EN] Technical SEO Expert

[ES] Optimización de infraestructura para dominancia en buscadores.
[EN] Infrastructure optimization for search engine dominance.
# [EN] Technical SEO Expert Skill (Level 99)

[EN] Master-level search orchestration for absolute SERP dominance and sub-second Core Web Vitals.

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



--- 
## --- Sub-Skill: programmatic_seo_expert
# [ES] Experto en SEO Programático
# [EN] Programmatic SEO Expert

[ES] Arquitectura de miles de páginas dinámicas para dominancia de nicho.
[EN] Dynamic architecture of thousands of pages for niche dominance.


--- 
## --- Sub-Skill: schema_markup_guru
# [ES] Gurú de Marcado Schema
# [EN] Schema Markup Guru

[ES] Implementación técnica de JSON-LD para visibilidad máxima en Google.
[EN] Technical JSON-LD implementation for maximum Google visibility.


--- 
## --- Sub-Skill: google_search_console_mastery
# [ES] Dominio de Google Search Console
# [EN] Google Search Console Mastery

[ES] Interpretación profunda de visibilidad y salud de indexación orgánica.
[EN] Deep interpretation of visibility and organic indexation health.


## [!IMPORTANT] The Golden Rule of Search Visibility
- **Index != Ranking**: Just because a page is indexed doesn't mean it wins. Use GSC to identify "High Impression, Low CTR" pages for immediate optimization.
- **Crawl Budget Focus**: Eliminate wasteful crawling of non-canonical URLs (parameters, faceted navigation) via the "Removals" tool and `robots.txt` orchestration.
- **Core Web Vitals**: GSC is the "Ground Truth" for how Google perceives your site's speed. Fix "LCP issues: longer than 2.5s" with priority.

## 🛠️ Level 99 Automation (Patterns)
- **The "Low Hanging Fruit" Strategy**:
  - Filter by Queries with Position 5-15. These are the easiest pages to move to the first page with minor on-page tweaks.
- **Sitemap Orchestration**: Automate sitemap submission via the API whenever a bulk migration or a massive content dump occurs.
- **URL Inspection API**: Programmatically check the indexing status of your Top 1000 pages every day to catch "Index Drops" instantly.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to manage your organic presence instantly via the terminal.

- **Check Mobile Usability Errors (via API)**:
  ```bash
  (Using index-request.js) scan current pages for mobile viewport or tap target issues.
  ```
- **Force Indexing of a New Page**:
  ```bash
  (Using index-request.js) node index-request.js https://example.com/new-landing-page
  ```
- **Audit "Excluded" URLs**:
  ```bash
  (Using GSC UI) Filter by "Discovered - currently not indexed" to identify server capacity or thin-content bottlenecks.
  ```

## Advanced Techniques
- **Query Cannibalization Detection**: Identify if multiple pages are ranking for the same keyword and merge them into a single "Power Page".
- **Reverse Keyword Discovery**: Find hidden keywords you're ranking for but haven't included in your content.
- **Manual Actions Recovery**: Surgical clean-up of link profiles or thin content to lift Google-imposed penalties.

## Actionable Script: Indexing Requester
- **[index-request.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/google_search_console_mastery/scripts/index-request.js)**: A Node.js utility using the Google Indexing API to request priority crawling for updated or new content.

## Inter-Skill Integration
- **With Technical SEO**: Use GSC to verify that your "Schema Markup" is being parsed correctly with zero errors.
- **With Chrome DevTools Mastery**: Fix the "LCP" and "CLS" issues reported in GSC by using the "Performance" panel in the browser.
- **With n8n**: Automate a weekly "Search Performance" report to Slack using the GSC API node.

--- 
## --- Sub-Skill: growth_hacking_engineering
# [ES] Ingeniería de Growth Hacking
# [EN] Growth Hacking Engineering

[ES] Construcción de bucles virales y experimentos de crecimiento acelerado.
[EN] Building viral loops and accelerated growth experiments.


--- 
## --- Sub-Skill: ecommerce_growth_scientist
# [ES] Científico de Crecimiento E-commerce
# [EN] Ecommerce Growth Scientist

[ES] Estrategias avanzadas para escalar tiendas online basadas en métricas.
[EN] Advanced strategies to scale online stores based on metrics.


--- 
## --- Sub-Skill: cro_scientist
# [ES] Científico de Conversión (CRO)
# [EN] CRO Scientist

[ES] Optimización basada en datos para maximizar la conversión en embudos digitales.
[EN] Data-driven optimization to maximize digital funnel conversion.


## [!IMPORTANT] The Golden Rule of CRO
- **Data over Opinions**: Never change a button color because of "gut feeling". Always use a test (e.g. Google Optimize, VWO, or Optimizely) to measure the lift.
- **Conversion Hierarchy**: Fix functional bugs first, then accessibility, then usability, and FINALLY persuasion.
- **Micro-Conversions**: Track every step (e.g. scroll depth, form field focus) to find exactly where users drop off in your funnel.

## 🛠️ Level 99 Automation (Patterns)
- **The "Heatmap" Analysis**: Use Microsoft Clarity or Hotjar to record user sessions and identify "Rage Clicks" or "Dead Clicks".
- **A/B/n Testing**: Test multiple variations (e.g. 1 control vs 3 challengers) simultaneously for 100% statistical significance.
- **Personalization**: Deliver different UI versions based on UTM source or user behavior (e.g. "Welcome back, [Name]" vs a generic "Sign Up").

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to audit your conversion funnel instantly.

- **Check Form Conversion Bottlenecks (Console)**:
  ```javascript
  (In Console) Measure time-to-complete per form field to find which one causes friction.
  ```
- **Audit Button Visibility**:
  ```javascript
  (Using CRO Audit Script) Ensure every CTA has sufficient contrast and a clear "Clickable" signature.
  ```
- **Measure Page Load Impact on Conversion**:
  ```bash
  (Using Chrome Mastery) Audit for CLS (Cumulative Layout Shift) to ensure the buy button doesn't move when the user tries to click it.
  ```

## Advanced Techniques
- **Loss Aversion**: Use "Limited Time" or "Stock Low" triggers (carefully) to increase urgency in e-commerce.
- **The "Contrast" Principle**: Ensure your primary CTA is the MOST visually dominant element on the page.
- **User Testing**: Recruit real users to perform a "5-second test" and explain what your page actually does.

## Actionable Script: CRO Auditor
- **[cro-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/cro_scientist/scripts/cro-audit.js)**: A frontend script to audit your page for "Conversion Friction" (missing CTAs, long forms, and invisible buttons).

## Inter-Skill Integration
- **With UI/UX Design**: Use CRO results to update the Design System with components that are proven to convert better.
- **With Meta/TikTok Ads**: Ensure the "Landing Page" matches the "Ad Promise" (Message Match) for a lower bounce rate.
- **With JavaScript Expert**: Use JS to trigger "Exit Intent" popups that offer a discount before the user leaves the tab.

--- 
## --- Sub-Skill: pinterest_visual_seo_forge
# [ES] Forja de SEO Visual en Pinterest
# [EN] Pinterest Visual SEO Forge

[ES] Estrategias de indexación y tráfico masivo basadas en imagen.
[EN] Image-based indexing and massive traffic strategies.
---
description: SkillsLocal Expert Skill - Ingeniería de metadatos de imagen y sindicación automatizada para capturar tráfico masivo recurrente.
---


## 🎯 Objective
Mastery of Ingeniería de metadatos de imagen y sindicación automatizada para capturar tráfico masivo recurrente. within the SkillsLocal Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of pinterest_visual_seo_forge protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.

--- 
## --- Sub-Skill: authority_link_building_osint
# [ES] Construcción de Autoridad y OSINT
# [EN] Authority Link Building OSINT

[ES] Estrategias de adquisición de enlaces basadas en inteligencia de fuentes abiertas.
[EN] Link acquisition strategies based on open source intelligence.
---
description: SkillsLocal Expert Skill - Identificación y captura de dominios y perfiles de alta autoridad para backlinking indestructible.
---


## 🎯 Objective
Mastery of Identificación y captura de dominios y perfiles de alta autoridad para backlinking indestructible. within the SkillsLocal Technical Sovereignty framework.

## 🛠️ Expert Capabilities
- Advanced orchestration of authority_link_building_osint protocols.
- Autonomous debugging and optimization.
- High-scale deployment and scaling patterns.

## 📜 Operation Rules
1. **Precision First**: All implementations must follow X.Y.Z versioning.
2. **Sovereignty**: No dependencies on external unverified code.
3. **No Placeholders**: Always generate production-ready artifacts.

## 🚀 Execution Pattern
- `/build`: Trigger autonomous improvement of this skill.
- `/verify`: Run deep audit of current implementation.
