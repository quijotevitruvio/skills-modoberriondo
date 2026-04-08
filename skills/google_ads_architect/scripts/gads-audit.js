/**
 * Level 99 Google Ads Audit Pro
 * Purpose: Find keywords with 0 conversions and high spend (> $10), identify low QS.
 * Usage: Paste into Google Ads Scripts (Tools & Settings -> Scripts).
 */

function main() {
    console.log("🚀 Starting Vanguard GAds Audit...");

    // 1. Audit High-Spend, No-Conversion Keywords
    const keywords = AdsApp.keywords()
        .withCondition("Conversions = 0")
        .withCondition("Cost > 10")
        .forDateRange("LAST_30_DAYS")
        .get();

    console.log(`📉 Found ${keywords.totalNumEntities()} keywords with 0 conversions and high spend.`);
    while (keywords.hasNext()) {
        const kw = keywords.next();
        console.warn(`⚠️ [PAUSE CANDIDATE] Keyword: ${kw.getText()} | Spend: ${kw.getStatsFor("LAST_30_DAYS").getCost()} | QS: ${kw.getQualityScore()}`);
        // kw.pause(); // Uncomment to automatically pause
    }

    // 2. Audit Core Quality Score (< 5)
    const lowQS = AdsApp.keywords()
        .withCondition("QualityScore < 5")
        .get();
        
    console.log(`📉 Found ${lowQS.totalNumEntities()} keywords with Low Quality Score (< 5).`);
    while (lowQS.hasNext()) {
        const kw = lowQS.next();
        console.error(`❌ [LOW QS] Keyword: ${kw.getText()} | QS: ${kw.getQualityScore()}. Improve landing page relevance!`);
    }

    console.log("%c ✅ GAds Audit Complete. ", "color: #fff; background: #2563eb; font-weight: bold; padding: 5px;");
}
