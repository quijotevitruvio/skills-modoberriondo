# CRO Scientist Skill (Level 99)

Master-level growth science, focusing on Conversion Rate Optimization (CRO), A/B testing methodology, and psychological triggers to maximize profit from existing traffic.

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
