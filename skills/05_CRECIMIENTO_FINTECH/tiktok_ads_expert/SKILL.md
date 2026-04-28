# [ES] Experto en TikTok Ads
# [EN] Tiktok Ads Expert

[ES] Campañas virales y segmentación avanzada en el mapa de TikTok.
[EN] Viral campaigns and advanced targeting in the TikTok landscape.


## [!IMPORTANT] Creative is the New Targeting
- **The TikTok Algorithm**: Unlike Meta, TikTok prioritizes visual retention (Watch Time) over granular interest mapping.
- **Spark Ads**: Always boost organic videos that have > 5% engagement to lower overall CPAs.
- **Hook Strategy**: The first 1.5 seconds must define the value proposition or pose a "Scroll-Stopping" question.

## Command Library (TikTok Pixel & API)
> [!NOTE]
> Use these to debug event firing and conversion events.

- **Check Pixel Event (Javascript Console)**:
  ```javascript
  (In Console) ttq.track('PageView', { 'value': 0, 'currency': 'USD' });
  ```
- **Verify Catalog Sync (Curl)**:
  ```bash
  curl -X GET "https://business-api.tiktok.com/open_api/v1.3/catalog/get/" \
       -H "Access-Token: ACCESS_TOKEN" \
       -d "id=CATALOG_ID"
  ```

## TikTok Shop & Marketplace
- **Direct Integration**: Sync WooCommerce/Shopify products directly to TikTok Shop for "In-App" checkout.
- **Creator Marketplace**: Research and recruit creators for high-engagement "User Generated Content" (UGC).
- **Affiliate Program**: Set commission rates for creators who sell your products directly on TikTok.

## Event Tracking (Pixel & API)
- **Pixel Events**: "Complete Payment", "Add to Cart", "Initial Checkout" are the 3 critical events to optimize for.
- **Server-to-Server (S2S)**: Mandatory for high-volume stores to ensure 100% conversion accuracy.

## Inter-Skill Integration
- **With AI Content**: Use AI (Gemini) to generate "Video Scripts" based on trending TikTok structures (Problem/Solution, Tutorial, POV).
- **With Analytics**: Use **Zaraz** in Cloudflare to load the TikTok Pixel to prevent it from slowing down the site's Core Web Vitals.
- **With Hostinger**: Ensure the server responds in < 200ms to avoid "Bounce Rate" from TikTok users (who have very little patience).