# Google Search Console Mastery Skill (Level 99)

Master-level search analytics, focusing on crawl budget optimization, index management, and core search performance monitoring for enterprise-level SEO.

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
