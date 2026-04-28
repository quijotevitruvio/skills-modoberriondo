/**
 * Level 99 A11y Guard
 * Purpose: Identify accessibility violations in the DOM in real-time.
 */

(function auditA11y() {
  console.log("%c ♿ A11y Audit Started ", "color: #fff; background: #2563eb; font-weight: bold; padding: 5px;");

  // 1. Audit Images (Alt tags)
  const images = document.querySelectorAll('img');
  console.group("🖼️ Image Audit");
  images.forEach(img => {
      if (!img.hasAttribute('alt')) {
          console.warn(`❌ Image missing alt tag:`, img, "Suggest adding descriptive text or alt='' for decorative items.");
      }
  });
  console.groupEnd();

  // 2. Audit Buttons & Links (Labels)
  const interactives = document.querySelectorAll('button, a');
  console.group("🖱️ Interactive Elements Audit");
  interactives.forEach(el => {
      if (!el.innerText.trim() && !el.hasAttribute('aria-label')) {
          console.error(`❌ Empty interactive element found (No label/text):`, el, "Screen readers cannot process this.");
      }
  });
  console.groupEnd();

  // 3. Audit ARIA Roles
  const roles = ['tab', 'dialog', 'alert', 'status'];
  console.group("🧩 ARIA Logic Check");
  roles.forEach(role => {
      const el = document.querySelector(`[role="${role}"]`);
      if (el) console.log(`✅ Role [${role}] detected. Ensure proper state management (aria-hidden, aria-expanded).`);
  });
  console.groupEnd();

  // 4. Contrast Ratio (Basic)
  const bg = window.getComputedStyle(document.body).backgroundColor;
  console.log(`ℹ️ Base Body Background: ${bg}. Ensure contrast meets WCAG 2.1 AA (4.5:1).`);

  console.log("%c 🏁 A11y Audit Complete. ", "color: #000; background: #fff;");
})();
