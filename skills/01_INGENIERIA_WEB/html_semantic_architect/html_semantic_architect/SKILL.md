# HTML5 Semantic Architect Skill (Level 99)

Master-level document orchestration, focusing on semantic structure, accessibility (WCAG 2.1), and search engine optimization (SEO) at the foundational DOM level.

## [!IMPORTANT] The Golden Rule of HTML
- **Semantic Tags Over <div>s**: Never use a `<div>` when a `<main>`, `<section>`, `<article>`, `<aside>`, or `<nav>` is more appropriate.
- **Heading Hierarchy**: Ensure a single `<h1>` per page and a logical sequence of `<h2>` through `<h6>`. Never skip heading levels for styling purposes.
- **WAI-ARIA Compliance**: Use `aria-label`, `role`, and `tabindex` correctly to ensure that interactive elements are usable by screen readers.

## 🛠️ Level 99 Automation (Patterns)
- **The "Accessible Forms" Blueprint**: Every input must have a clear `<label>` and proper `autocomplete` and `type` attributes (e.g. `type="email"`).
- **SEO Markup (Microdata)**: Integrate `itemscope` and `itemtype` directly into the HTML to help Search Engines understand the context of your CRM and Marketing pages.
- **Image Optimization (Picture/Source)**: Use the `<picture>` tag to serve WebP or AVIF images based on browser support, reducing LCP (Largest Contentful Paint).

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to audit your HTML structure instantly via the console.

- **Check for Duplicate IDs (Critical for JS/A11y)**:
  ```javascript
  (In Console) [...new Set([...document.querySelectorAll('[id]')].map(el => el.id))].length !== document.querySelectorAll('[id]').length
  ```
- **Audit All Image Missing Alt Text**:
  ```javascript
  (In Console) document.querySelectorAll('img:not([alt])')
  ```
- **Measure DOM Depth (Performance)**:
  ```javascript
  (In Console) Math.max(...[...document.querySelectorAll('*')].map(el => { let d = 0; while (el = el.parentElement) d++; return d; }))
  ```

## Advanced Techniques
- **Preload & Prefetch**: Use `<link rel="preload">` for critical fonts and CSS to improve FCP (First Contentful Paint).
- **Shadow DOM Logic**: Master the use of Web Components to encapsulate HTML and styles for reusable UI libraries.
- **HTML Manifests (PWA)**: Configure the `manifest.json` for "Add to Home Screen" capabilities.

## Actionable Script: Semantic Auditor
- **[html-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/html_semantic_architect/scripts/html-audit.js)**: A frontend script to scan your pages for accessibility and semantic structure violations.

## Inter-Skill Integration
- **With Technical SEO**: Ensure that your HTML structure matches the `technical_seo_expert` guidelines for crawler efficiency.
- **With UI/UX Design System**: Use the `design_tokens.css` file to style semantic HTML elements consistently.
- **With Google Search Console**: Use HTML audits to fix "Mobile Usability" errors reported in GSC.
