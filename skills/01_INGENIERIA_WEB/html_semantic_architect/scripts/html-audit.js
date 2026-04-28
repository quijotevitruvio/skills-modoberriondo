/**
 * Level 99 HTML Semantic & A11y Auditor
 * Purpose: Run this in the DevTools Console to find structural/semantic killers.
 */

(function auditHTML() {
  console.log("%c 🏷️ 🧠 Semantic Audit Started ", "color: #fff; font-weight: bold; background: #ea580c; padding: 5px;");

  // 1. Audit Heading Hierarchy
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  let lastLevel = 0;
  headings.forEach(h => {
    const currentLevel = parseInt(h.tagName[1]);
    if (currentLevel > lastLevel + 1) {
      console.warn(`⚠️ Skipped Heading Level detected! (Found <${h.tagName}> after <H${lastLevel}>)`, h);
    }
    lastLevel = currentLevel;
  });

  // 2. Check for Multiple H1s
  const h1s = document.querySelectorAll('h1');
  if (h1s.length > 1) {
    console.warn(`⚠️ SEO ALERT: Found ${h1s.length} H1 tags. There should only be ONE per page.`);
  }

  // 3. Audit ARIA Labels on Buttons/Links
  const interactives = document.querySelectorAll('button, a');
  interactives.forEach(el => {
    if (!el.innerText.trim() && !el.getAttribute('aria-label') && !el.getAttribute('title')) {
      console.warn(`⚠️ Accessibility Alert: Link/Button with no text or aria-label found.`, el);
    }
  });

  // 4. Check for Semantic Containers
  const semanticTags = ['main', 'nav', 'header', 'footer', 'section', 'article'];
  semanticTags.forEach(tag => {
    if (!document.querySelector(tag)) {
      console.log(`ℹ️ Missing <${tag}> tag. Confirm if this matches your layout intent.`);
    }
  });

  console.log("%c 🏁 Semantic Audit Complete. ", "color: #000; background: #fff;");
})();
