#!/bin/bash

# Expert Mega-Migration Tool
# Version: 1.0 (Zero-Downtime Edition)

# --- Configuration ---
OLD_SERVER_SSH="user@old-server-ip"
NEW_SERVER_PATH="/home/myproject/public_html"
OLD_DOMAIN="https://old-domain.com"
NEW_DOMAIN="https://new-domain.com"

# --- Process ---
echo "--- Starting EXPERT MEGA-MIGRATION to $NEW_DOMAIN ---"

# Step 1: SQL Export from Old Server via SSH
echo "1. Exporting and compressing DB from old server..."
ssh $OLD_SERVER_SSH "cd /path/to/old/wp && wp db export --add-drop-table | gzip" > backup.sql.gz

# Step 2: Rsync Files (Excluding Cache and Junk)
echo "2. Transferring files via Rsync (excluding /cache/ and /node_modules/)..."
rsync -avzP --exclude 'cache/*' --exclude 'node_modules/*' $OLD_SERVER_SSH:/path/to/old/wp/ $NEW_SERVER_PATH/

# Step 3: SQL Import to New Server (Directly to Localhost)
echo "3. Importing DB into Local Database..."
gunzip < backup.sql.gz | wp db import -

# Step 4: Search & Replace (The Expert Way)
echo "4. Running precise search-replace on domain strings..."
wp search-replace "$OLD_DOMAIN" "$NEW_DOMAIN" --precise --all-tables

# Step 5: Final Cleanup
echo "5. Flushing LiteSpeed and Rewrite Rules..."
wp litespeed-purge all
wp rewrite flush --hard

echo -e "\nMIGRATION COMPLETE: Site is now live on $NEW_DOMAIN."
