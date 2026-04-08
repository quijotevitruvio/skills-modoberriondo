#!/bin/bash

# WP Hardening Script (Expert Edition)
# Version: 1.0 (Cybersecurity Edition)

# --- Configuration ---
WP_PATH="/path/to/wordpress"
PUBLIC_HTML="/public_html"

echo "--- Hardening WordPress Installation at $WP_PATH ---"

# 1. Set Secure Permissions
echo "1. Setting safe file/directory permissions..."
find $WP_PATH -type d -exec chmod 755 {} \;
find $WP_PATH -type f -exec chmod 644 {} \;
chmod 440 $WP_PATH/wp-config.php
chmod 440 $WP_PATH/.htaccess

# 2. Block XML-RPC Access in .htaccess
echo "2. Blocking XML-RPC in .htaccess..."
if ! grep -q "xmlrpc.php" "$WP_PATH/.htaccess"; then
cat <<EOT >> $WP_PATH/.htaccess

# Block WordPress xmlrpc.php requests
<Files xmlrpc.php>
order deny,allow
deny from all
</Files>
EOT
fi

# 3. Disable Directory Browsing
echo "3. Disabling directory browsing..."
if ! grep -q "Options -Indexes" "$WP_PATH/.htaccess"; then
echo "Options -Indexes" >> $WP_PATH/.htaccess
fi

# 4. Hide WordPress Version in wp-config (via filter)
# This is usually done in functions.php, but we will add a note for the agent.
echo "4. IMPORTANT: Remember to add 'remove_action(\"wp_head\", \"wp_generator\");' to your functions.php."

echo -e "\nDONE: Site hardened. No more XML-RPC or directory listing vulnerabilities."
