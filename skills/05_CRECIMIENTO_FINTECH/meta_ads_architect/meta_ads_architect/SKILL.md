# Meta Ads Architect Skill

Expert-level Facebook and Instagram advertising for maximum ROAS and scalability.

## [!IMPORTANT] Conversion API (CAPI) & Tracking
- **The Browser-Server Paradox**: Relying solely on the pixel (browser) is no longer enough.
- **CAPI Integration**: Mandatory. Set up via GTM Server-Side or an n8n webhook to send "Purchase" and "Lead" events directly from the server.
- **Event Match Quality**: Ensure `emq_score` is > 8.0 by sending hashed email, phone, and IP address.

## Command Library (Meta Graph API)
> [!NOTE]
> Use these to automate campaign reporting and monitoring.

- **Check Campaign Performance (Curl)**:
  ```bash
  curl -G "https://graph.facebook.com/v18.0/CAMPAIGN_ID" \
       -d "fields=name,objective,status,insights{spend,clicks,conversions}" \
       -H "Authorization: Bearer ACCESS_TOKEN"
  ```
- **Sync Catalog (Force)**:
  ```bash
  (Using n8n or Python) Post to Graph API's "product_feed_uploads" endpoint.
  ```

## Advanced Scaling (Advantage+)
- **Shopping Campaigns**: Use "Advantage+ Shopping" for E-commerce to let Meta's AI find the best buyers.
- **Audience Fragmentation**: Consolidate similar ad sets to escape "Learning Phase" faster.
- **Creative Diversification**: Test Carousel, Reels (9:16), and Static images in the same ad set.

## Catalog & Shop Integration
- **Catalog Feed**: Automate the sync between WooCommerce/Shopify and Meta Catalog.
- **Dynamic Product Ads (DPA)**: Set up retargeting based on "View Content" or "Add to Cart" but not "Purchase" (180 days).
- **IG Shop Sync**: Ensure price and availability match in real-time.

## Inter-Skill Integration
- **With Analytics**: Compare Facebook's "Attribution" with GA4's "Last Click" to find the real conversion value.
- **With n8n**: Trigger a WhatsApp (Twilio) message when a new "Meta Lead" is captured via Facebook Lead Forms.
- **With AI Content**: Use AI (Gemini) to generate 10 variations of "Ad Copy" based on the brand's tone of voice.
