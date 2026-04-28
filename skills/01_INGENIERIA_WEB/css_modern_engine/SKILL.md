# [ES] Motor de CSS Moderno
# [EN] CSS Modern Engine

[ES] Maestría en Flexbox, Grid, Custom Properties y animaciones avanzadas.
[EN] Mastery of Flexbox, Grid, Custom Properties, and advanced animations.


## [!IMPORTANT] The Golden Rule of CSS Performance
- **Transform & Opacity Only**: For animations, only animate `transform` and `opacity` to avoid layout-thrashing and keep the browser at 60FPS.
- **Specificity Management**: Use BEM (Block Element Modifier) or Utility-Class patterns to keep CSS selectors flat and fast. Never use `!important` to fix a selector specificity issue.
- **Media Query Discipline**: Use Container Queries (`@container`) and Clamp (`clamp()`) for modern, fluid layouts that adapt to the parent container, not just the viewport.

## 🛠️ Level 99 Automation (Patterns)
- **The "Full-Window" Layout**: Master `grid-template-areas` to create complex, responsive CRM dashboards in just a few lines of code.
- **CSS Variable Store**: Centralize your `design_tokens.css` into a single source of truth for 1-click theme updates.
- **Layering & Z-Index**: Use isolation layers (`isolation: isolate;`) to prevent Z-index "wars" within complex components.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to audit your CSS performance instantly via the console.

- **Check for "Expensive" Properties (Box-Shadow, Filters)**:
  ```javascript
  (In Console) document.querySelectorAll('*').forEach(el => {
    const s = getComputedStyle(el);
    if (s.boxShadow !== 'none' || s.filter !== 'none') console.log(`%c Found expensive style on: `, "color: #ff9900", el);
  });
  ```
- **Force All Layout-Shifting Transitions to Slow-Mo**:
  ```javascript
  (In Console) [...document.styleSheets].forEach(s => s.insertRule('* { transition-duration: 2s !important; }', s.cssRules.length));
  ```
- **Measure Style Recalculation Time**:
  ```bash
  (Using Chrome Mastery) Use the "Performance" panel to track "Recalculate Style" events during scrolling.
  ```

## Advanced Techniques
- **Subgrid**: Use `grid-template-columns: subgrid;` to align items across different nesting levels.
- **CSS Trigonometry**: Use `sin()`, `cos()`, and `tan()` for complex, mathematical layouts and animations.
- **Container Queries**: Create components that "know" their size and adapt regardless of the screen width.

## Actionable Script: CSS Perf Auditor
- **[css-perf-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/css_modern_engine/scripts/css-perf-audit.js)**: A frontend script to identify "Pain Points" in your stylesheet that might be affecting FPS or TBT (Total Blocking Time).

## Inter-Skill Integration
- **With UI/UX Design System**: This skill is the core engine that executes the `ui_ux_design_systems` vision.
- **With Chrome DevTools Mastery**: Use the "CSS Overview" and "Rendering" tabs in DevTools to find unused CSS and repaint issues.
- **With Mobile App Dev**: Use `NativeWind` or similar libraries to apply CSS-like logic to your mobile components.