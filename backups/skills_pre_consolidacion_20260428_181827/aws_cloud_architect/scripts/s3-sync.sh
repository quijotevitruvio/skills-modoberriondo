#!/bin/bash
# Level 99 AWS S3 Sync Pro
# Purpose: Performance-optimized synchronization of local assets to S3.
# Usage: ./s3-sync.sh <local-dir> <s3-bucket-name> [--public|--private]

LOCAL_DIR=$1
BUCKET=$2
ACCESS_TYPE=$3

if [ -z "$LOCAL_DIR" ] || [ -z "$BUCKET" ]; then
    echo "Usage: ./s3-sync.sh <local-dir> <s3-bucket-name> [--public|--private]"
    exit 1
fi

ACL="private"
if [ "$ACCESS_TYPE" == "--public" ]; then
    ACL="public-read"
fi

echo "🚀 Syncing $LOCAL_DIR to S3://$BUCKET with ACL=$ACL..."

# Performance Synchronization (Multi-threaded)
aws s3 sync "$LOCAL_DIR" "s3://$BUCKET" \
    --acl "$ACL" \
    --delete \
    --cache-control "max-age=31536000, public" \
    --metadata-directive REPLACE \
    --only-show-errors

echo "✅ Sync Completed! Invalidate CloudFront if needed."
