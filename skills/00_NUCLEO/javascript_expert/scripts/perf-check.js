/**
 * Level 99 JavaScript Performance Auditor
 * 
 * Purpose: Deep audit of DOM hydration and execution speed.
 * Usage: Run in Chrome Console or through a Node.js scraper to analyze hydration.
 */

(function perfAudit() {
  console.group("%c 🚀 JS PERFORMANCE AUDIT (%cLevel 99%c)", "color: #00ffcc; font-weight: bold;", "color: #ff9900;", "color: #00ffcc;");

  // 1. DOM node count (Target: < 1500)
  const nodeCount = document.querySelectorAll("*").length;
  const nodeStatus = nodeCount < 1500 ? "✅ SUCCESS" : "❌ WARNING (DOM too deep)";
  console.log(`- DOM Node Count: ${nodeCount} [${nodeStatus}]`);

  // 2. Hydration & Execution Speed
  const timing = performance.getEntriesByType("navigation")[0];
  const domInteractive = (timing.domInteractive / 1000).toFixed(2);
  const domComplete = (timing.domComplete / 1000).toFixed(2);
  console.log(`- DOM Interactive: ${domInteractive}s`);
  console.log(`- DOM Complete: ${domComplete}s`);

  // 3. Script Resources (Heavy Assets)
  const scripts = performance.getEntriesByType("resource").filter(r => r.initiatorType === "script");
  const totalScriptSize = (scripts.reduce((acc, s) => acc + s.transferSize, 0) / 1024 / 1024).toFixed(2);
  console.log(`- Total JS Payload: ${totalScriptSize} MB`);

  if (totalScriptSize > 1.5) {
    console.warn("⚠️ [CRITICAL] JS bundle > 1.5MB. Consider Code Splitting (React.lazy / dynamic import).");
  }

  // 4. Memory Usage (if available)
  if (performance.memory) {
    const usedHeap = (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
    const limitHeap = (performance.memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2);
    console.log(`- Heap Usage: ${usedHeap} MB / ${limitHeap} MB`);
  }

  console.groupEnd();
})();
