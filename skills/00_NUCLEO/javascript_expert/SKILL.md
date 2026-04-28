# [ES] Experto en JavaScript
# [EN] JavaScript Expert

[ES] Dominio de ESNext, asincronía y patrones avanzados de programación web.
[EN] Mastery of ESNext, asynchrony, and advanced web programming patterns.


## [!IMPORTANT] The Golden Rule of JS Performance
- **Zero Main-Thread Blocking**: Keep long tasks under 50ms to ensure a 100/100 INP (Interaction to Next Paint) score. Use `requestIdleCallback` for non-critical work.
- **Memory Safety**: Always clean up event listeners and intervals in `useEffect` or component unmounts to prevent memory leaks in SPAs.
- **Micro-tasks vs Macro-tasks**: Understand the event loop. Use `queueMicrotask()` for absolute execution priority.

## 🛠️ Level 99 Automation (Patterns)
- **The "Dynamic Import" Patter**: Code-split everything. Load components or libraries ONLY when the user is about to interact with them via `IntersectionObserver`.
- **Pure Functional Logic**: Minimize side effects. Use immutable state patterns to avoid the "Shadow DOM Re-render" trap.

## Command Library (Diagnostics & Execution)
> [!NOTE]
> Use these to analyze and fix frontend bottlenecks instantly.

- **Check JS Heap Usage (Memory Leak Test)**:
  ```javascript
  (In Console) performance.memory.usedJSHeapSize;
  ```
- **Measure Script Execution Time**:
  ```javascript
  console.time("TaskName");
  // code
  console.timeEnd("TaskName");
  ```
- **Audit All Event Listeners**:
  ```javascript
  getEventListeners(window); // (Chrome Console only)
  ```

## Advanced Techniques
- **Web Workers**: Move heavy data processing (CSV parsing, image manipulation) off the main thread to prevent UI freezing.
- **Proxy Pattern**: Use JS Proxies to create "Reactive Data Stores" without the overhead of heavy frameworks like React/Vue.
- **Intersection Observer**: Lazy-load everything (images, videos, even ad-scripts) based on viewport visibility.

## Actionable Script: Performance Audit
- **[perf-check.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/javascript_expert/scripts/perf-check.js)**: Runs a deep audit on DOM nodes, event listeners, and hydration speed.

## Inter-Skill Integration
- **With Technical SEO**: Use JS to pre-warm the cache or pre-fetch URLs based on hover intent (100ms before click).
- **With Meta Ads**: Implement a "Scroll Depth" tracker in vanilla JS to trigger CAPI events with 100% accuracy.
- **With n8n**: Send JS error logs from the client-side directly to an n8n webhook for real-time alerting.