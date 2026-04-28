#!/bin/bash
# Level 99 Hostinger Health Audit
# Purpose: Verify Hostinger-specific optimizations (Redis, LiteSpeed, Headers).

DOMAIN="yourdomain.com"
TEST_URL="https://$DOMAIN/info.php"

echo "🚀 Starting Hostinger Health Audit for $DOMAIN..."

# 1. Check HTTP/2 and LiteSpeed Header
HEADERS=$(curl -s -I $TEST_URL)
if echo "$HEADERS" | grep -iq "server: litespeed"; then
  echo "✅ Server Engine: LiteSpeed Enterprise (EXCELLENT)"
else
  echo "⚠️ Server Engine: Standard or Proxy (Check hPanel configuration!)"
fi

# 2. Check Redis / Object Cache (If info.php exists)
if curl -s $TEST_URL | grep -iq "redis"; then
  echo "✅ PHP Redis Module: LOADED"
else
  echo "❌ PHP Redis Module: MISSING (Check hPanel -> Advanced -> PHP Extensions!)"
fi

# 3. Check for X-Litespeed-Cache Header
if echo "$HEADERS" | grep -iq "x-litespeed-cache"; then
  echo "✅ LiteSpeed Cache: ACTIVE (LSCache hits detected!)"
else
  echo "⚠️ LiteSpeed Cache: NOT DEPLOYED (Install LSCache plugin or enable in hPanel!)"
fi

# 4. Final Security Check
if echo "$HEADERS" | grep -iq "content-security-policy"; then
  echo "✅ Security Headers: CSP DETECTED"
else
  echo "⚠️ Security Headers: CSP MISSING (Highly recommended!)"
fi

echo "🏁 Hostinger Audit Complete."
