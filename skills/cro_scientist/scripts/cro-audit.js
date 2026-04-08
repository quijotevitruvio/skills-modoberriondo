/**
 * Level 99 CRO Friction Auditor
 * Purpose: Run this in the DevTools Console to find conversion killers.
 */

(function auditCRO() {
  console.log("%c 🧪 🔬 CRO Audit Started ", "color: #fff; font-weight: bold; background: #6366f1; padding: 5px;");

  // 1. Check for Primary CTA (Button) Contrast
  const buttons = Array.from(document.querySelectorAll('button, a.btn, a.button'));
  if (buttons.length === 0) {
    console.warn("⚠️ NO PRIMARY CTAs FOUND on this page!");
  } else {
    console.log(`✅ Found ${buttons.length} potential CTAs.`);
  }

  // 2. Check for Long Forms (High Friction)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
    if (inputs.length > 7) {
      console.warn(`⚠️ High Friction Form detected! (${inputs.length} fields). Consider splitting it into steps.`);
    }
  });

  // 3. Check for Visual Hierarchy (Headline presence)
  const h1 = document.querySelector('h1');
  if (!h1 || h1.innerText.length < 5) {
    console.warn("⚠️ Missing or weak H1 Headline. Impacting clarity and conversion.");
  }

  // 4. Check for Mobile Tappability (Size)
  buttons.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      console.warn("⚠️ Button is too small for mobile fingers (less than 44x44px).", btn);
    }
  });

  console.log("%c 🏁 Audit Complete. Check the warnings above. ", "color: #000; background: #fff;");
})();
