# Rank Math SEO Mastery Skill (Level 99)

Master-level SEO orchestration within the WordPress ecosystem, focusing on advanced schema markup, automated indexing (via APIs), and high-performance metadata management for multi-tenant and local SEO environments.

## [!IMPORTANT] The Golden Rule of Rank Math
- **Automation Over Manual Entry**: Use Rank Math's "Global Post Settings" and "Schema Templates" to automatically generate SEO titles and descriptions for thousands of pages at once.
- **IndexNow API Mastery**: Configure and use the "Instant Indexing" feature to notify Google and Bing the SECOND a post is updated or created.
- **Breadcrumbs & Internal Links**: Use Rank Math's built-in breadcrumbs for superior site hierarchy and the "Internal Link Suggestions" feature to strengthen your site's Topical Authority.

## 🛠️ Level 99 Automation (Patterns)
- **Advanced Dynamic Schema**: Use Rank Math's Schema Generator to create "SoftwareApplication" or "LocalBusiness" schemas with custom fields, ensuring that your CRM or SaaS data is visible in Google's Rich Results.
- **Analytics & GSC Deep-Sync**: Master the integration between Rank Math and Google Search Console to track keyword performance directly inside the WordPress dashboard.
- **Redirection & 404 Management**: Automate the creation of 301 redirects for deleted posts to preserve Link Equity and UX.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to audit and optimize your Rank Math configuration.

- **Bulk Index via REST API (Instant Indexing)**:
  ```bash
  (Using specialized plugin) curl -X POST -d '{"url":"https://example.com/new-post"}' https://example.com/wp-json/rankmath/v1/instant-index
  ```
- **Check for JSON-LD Validity (Console)**:
  ```javascript
  (In Console) console.log(JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText));
  ```
- **Audit All Missing Meta Descriptions**:
  ```bash
  (Using Headless Chrome Mastery) Use a script to crawl internal URLs and report missing Rank Math metadata.
  ```

## Advanced Techniques
- **Hook-based Metadata Override**: Use the `rank_math/frontend/title` filter to dynamically override SEO titles based on external data (e.g., real-time prices or stock levels).
- **Multi-Location Local SEO**: Configure Rank Math's Local SEO module for multiple physical or service locations with automated KML file generation.
- **Podcast SEO**: Master the use of specialized Rank Math modules for Podcasting (iTunes tags, etc.) to dominate the audio search market.

## Actionable Script: Schema Validator Pro
- **[schema-validate.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/rankmath_seo_mastery/scripts/schema-validate.js)**: A frontend script to extract and validate JSON-LD schemas directly from a live URL.

## Inter-Skill Integration
- **With Google Search Console Mastery**: Use Rank Math's indexing logs to cross-reference with GSC's "Index Coverage" report.
- **With Technical SEO**: Ensure that Rank Math is outputting canonical URLs and robots meta tags that match your `technical_seo_expert` strategy.
- **With Analytics Tracking Guru**: Use Rank Math's "Analytics" module to correlate SEO changes with actual traffic and conversion increases.
