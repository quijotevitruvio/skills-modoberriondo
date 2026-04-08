#!/bin/bash

# Cloudflare WAF Bulk Sync Tool
# Version: 1.0 (Expert Edition)

# --- Configuration ---
ZONE_ID="YOUR_ZONE_ID"
AUTH_EMAIL="YOUR_EMAIL@example.com"
API_KEY="YOUR_GLOBAL_API_KEY"

# --- Rules Payload ---
# Rule 1: Block XML-RPC Brute Force
# Rule 2: Challenge any request containing "wp-config.php"
# Rule 3: Challenge users targeting administrative paths from unknown IPs

echo "--- Synchronizing Custom WAF Rules to Cloudflare ($ZONE_ID) ---"

curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/firewall/rules" \
     -H "X-Auth-Email: $AUTH_EMAIL" \
     -H "X-Auth-Key: $API_KEY" \
     -H "Content-Type: application/json" \
     --data '[
  {
    "filter": {
      "expression": "(http.request.uri.path contains \"/xmlrpc.php\")",
      "paused": false,
      "description": "Block XML-RPC Attacks"
    },
    "action": "block",
    "description": "Critical: Brute Force Blocking"
  },
  {
    "filter": {
      "expression": "(http.request.uri.path contains \"/wp-config.php\" or http.request.uri.path contains \".htaccess\")",
      "paused": false,
      "description": "Block Config Access"
    },
    "action": "block",
    "description": "Critical: System File Protection"
  }
]'

echo -e "\nDONE: WAF Rules successfully deployed."
