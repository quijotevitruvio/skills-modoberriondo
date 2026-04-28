/**
 * Level 99 Rank Math Schema Validator
 * Purpose: Extract and visualize JSON-LD schema from any Rank Math-powered page.
 */

(function auditSchema() {
  console.log("%c 🔍 🧠 Schema Audit Started ", "color: #fff; font-weight: bold; background: #6366f1; padding: 5px;");

  const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
  if (schemaScripts.length === 0) {
    console.error("❌ No JSON-LD schema found on this page.");
    return;
  }

  console.log(`✅ Found ${schemaScripts.length} JSON-LD blocks.`);

  schemaScripts.forEach((script, index) => {
    try {
      const data = JSON.parse(script.innerText);
      const types = Array.isArray(data['@graph'])
                  ? data['@graph'].map(item => item['@type']).join(', ')
                  : data['@type'] || "Unknown";

      console.group(`📦 Schema Block #${index + 1} (${types})`);
      console.log("Types detected:", types);
      console.log("Full Data Tree:", data);

      // Audit for critical missing fields
      if (data['@graph']) {
        const product = data['@graph'].find(i => i['@type'] === 'Product' || i['@type'] === 'SoftwareApplication');
        if (product && !product.offers) {
            console.warn("⚠️ Schema Alert: 'Product' found but missing 'offers' (Price/Stock). Rank Math setting check required.");
        }
        if (product && !product.aggregateRating) {
            console.warn("ℹ️ Schema Info: No 'aggregateRating' found. Consider adding reviews to improve Rich Snippet visibility.");
        }
      }

      console.groupEnd();
    } catch (e) {
      console.error(`❌ Error parsing Schema Block #${index + 1}:`, e);
    }
  });

  console.log("%c 🏁 Schema Validation Complete. ", "color: #000; background: #fff;");
})();
