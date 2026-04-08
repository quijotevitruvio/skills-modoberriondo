# Chrome DevTools Mastery Skill (Level 99)

Master-level frontend diagnostics, focusing on memory profiling (Heap), network orchestration, and frame-by-frame performance optimization (Flame Charts).

## [!IMPORTANT] The 60FPS Standard
- **Zero Frame Drops**: Use the "Performance" tab to identify "Long Tasks" and "Recalculate Style" bottlenecks. Target < 16ms per frame.
- **Network Interception**: Use "Local Overrides" to test production fixes in real-time without redeploying.
- **Memory Leaks**: Use "Heap Snapshots" to identify detached DOM nodes that are consuming RAM over time.

## 🛠️ Level 99 Automation (Patterns)
- **The "Console API" Power**: Use `console.table()`, `console.dir()`, and `monitorEvents(element)` for instant data visualization and event tracing.
- **Source Map Debugging**: Ensure source maps are active to debug minified production code with 100% clarity.
- **Layer Analysis**: Use the "Layers" panel to manage Z-index complexity and GPU-accelerated compositing.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these within the DevTools Console to manipulate and audit the page at runtime.

- **Find All Detached DOM Nodes**:
  ```javascript
  (In Console) queryObjects(Node); // Then filter for nodes not in document.body
  ```
- **Measure CLS (Cumulative Layout Shift) in Real-time**:
  ```javascript
  (In Console) new PerformanceObserver((l) => l.getEntries().forEach(e => console.log(e))).observe({type: 'layout-shift', buffered: true});
  ```
- **Block Specific Network Requests (Test Offline/Failure modes)**:
  ```javascript
  (Using Network Tab > Network Request Blocking) Add patterns like "*.google-analytics.com".
  ```

## Advanced Techniques
- **Memory Heap Profiling**: Identify the exact function creating thousands of objects using the "Allocation Instrumentation on Timeline".
- **CPU Throttling**: Test your site on a "Mid-tier Mobile" CPU (4x slowdown) to see the REAL user experience.
- **Protocol Monitor**: Watch the "Chrome DevTools Protocol" (CDP) commands in real-time to build your own automation tools.

## Actionable Script: Lighthouse Auditor
- **[lighthouse-audit.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/chrome_devtools_mastery/scripts/lighthouse-audit.js)**: Runs a full Lighthouse audit (Performance, SEO, Best Practices) directly from the terminal for CI/CD or local testing.

## Inter-Skill Integration
- **With Technical SEO**: Use the "Search Console" integration in DevTools to identify crawl errors on a per-page basis.
- **With JavaScript Expert**: Use the "Coverage" tab to identify what % of your JS is actually being used and eliminate dead code.
- **With UI/UX Design**: Use the "Rendering" tab to test "Prefers-reduced-motion" and "Vision Deficiencies" (Color blindness) in real-time.
