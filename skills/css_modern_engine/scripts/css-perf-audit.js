/**
 * Level 99 CSS Performance Auditor
 * Purpose: Find "Expensive" style rules that cause CPU/GPU spikes.
 */

(function auditCSS() {
  console.log("%c 🏎️ 🎨 CSS Performance Audit Started ", "color: #fff; font-weight: bold; background: #3b82f6; padding: 5px;");

  // 1. Audit "Expensive" Properties (Box-shadow, filters, gradients)
  const expensiveProps = ['box-shadow', 'filter', 'backdrop-filter', 'background-image'];
  const elements = document.querySelectorAll('*');
  let count = 0;

  elements.forEach(el => {
    const style = window.getComputedStyle(el);
    expensiveProps.forEach(prop => {
      const val = style.getPropertyValue(prop);
      if (val !== 'none' && val !== '' && !val.includes('linear-gradient')) {
        // We ignore simple linear gradients but flag high-res images or heavy filters
        count++;
        // console.log(`%c Found ${prop} on: `, "color: #ef4444", el);
      }
    });
  });
  console.log(`✅ Found ${count} elements with potentially performance-intensive styles.`);

  // 2. Audit "Paint-Heavy" Animations
  const layouts = ['width', 'height', 'top', 'left', 'margin', 'padding'];
  const animations = document.getAnimations();
  animations.forEach(anim => {
    if (anim.effect && anim.effect.getProperties) {
      const props = anim.effect.getProperties().map(p => p.propertyName);
      const dangerous = props.filter(p => layouts.includes(p));
      if (dangerous.length > 0) {
        console.warn(`⚠️ PERFORMANCE ALERT: Animation detected using layout-triggering properties: ${dangerous.join(', ')}`, anim.effect.target);
      }
    }
  });

  // 3. Check for deep nesting (Selector performance)
  console.log(`ℹ️ To audit selector performance, check the 'Performance' tab in DevTools for 'Recalculate Style' events.`);

  console.log("%c 🏁 CSS Perf Audit Complete. ", "color: #000; background: #fff;");
})();
