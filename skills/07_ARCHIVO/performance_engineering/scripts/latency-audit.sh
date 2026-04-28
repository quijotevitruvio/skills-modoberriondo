#!/bin/bash
# Level 99 Latency Auditor
# Purpose: Measure and report TTFB/LCP for one-click performance audits.
# Usage: ./latency-audit.sh <url>

TARGET_URL=$1

if [ -z "$TARGET_URL" ]; then
    echo "Usage: ./latency-audit.sh <url>"
    exit 1
fi

echo "🚀 Measuring Latency for $TARGET_URL..."

# 1. Measure TTFB (Time to First Byte)
TTFB=$(curl -o /dev/null -s -w '%{time_starttransfer}' "$TARGET_URL")
echo "⏱️  TTFB: ${TTFB}s"

# 2. Check for Compression (Gzip/Brotli)
COMPRESSION=$(curl -sI -H "Accept-Encoding: gzip, br" "$TARGET_URL" | grep -i "content-encoding")
if [ -z "$COMPRESSION" ]; then
    echo "⚠️  Alert: No Compression detected! Check Cloudflare/LiteSpeed configuration."
else
    echo "✅ Compression: $COMPRESSION"
fi

# 3. Check for Cache Status (HIT/MISS/BYPASS)
CACHE_STATUS=$(curl -sI "$TARGET_URL" | grep -E "cf-cache-status|x-litespeed-cache|x-cache")
if [ -z "$CACHE_STATUS" ]; then
    echo "ℹ️  Note: No cache header detected."
else
    echo "✅ Cache Status: $CACHE_STATUS"
fi

echo "🏁 Audit Complete. Target for 100/100 INP and <100ms TTFB."
