#!/bin/bash
# Level 99 Ferozo Status Check
# Purpose: Audit Ferozo / DonWeb hosting connectivity and SSL.

DOMAIN="yourdomain.com"
IP="1.2.3.4" # Replace with your Ferozo server IP

echo "🚀 Starting Ferozo-Check for $DOMAIN..."

# 1. Check HTTP Status
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN)
if [ "$HTTP_STATUS" -eq 301 ] || [ "$HTTP_STATUS" -eq 200 ]; then
  echo "✅ HTTP Connectivity: OK ($HTTP_STATUS)"
else
  echo "❌ HTTP Connectivity: FAILED ($HTTP_STATUS)"
fi

# 2. Check SSL Validity
SSL_EXPIRY=$(echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
if [ -n "$SSL_EXPIRY" ]; then
  echo "✅ SSL Active: Expires on $SSL_EXPIRY"
else
  echo "❌ SSL Error: No valid certificate found."
fi

# 3. Check PHP Process (Simulated check)
PHP_TEST=$(curl -s http://$DOMAIN/info.php | grep -i "PHP Version")
if [ -n "$PHP_TEST" ]; then
  echo "✅ PHP Execution: RESPONSIVE"
else
  echo "⚠️ PHP Execution: UNAVAILABLE or info.php missing."
fi

echo "🏁 Ferozo-Check Complete."
