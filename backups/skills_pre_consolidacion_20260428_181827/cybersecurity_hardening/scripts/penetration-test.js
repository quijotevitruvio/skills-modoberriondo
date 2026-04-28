/**
 * Level 99 Cybersecurity Pentest Scanner
 * Purpose: Automated vulnerability scan for common misconfigurations and injection points.
 */

(function scanSecurity() {
  console.log("%c 🕵️ 🛡️ Pentest Scan Started ", "color: #fff; font-weight: bold; background: #e11d48; padding: 5px;");

  // 1. Audit Security Headers
  const headers = ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Frame-Options', 'X-Content-Type-Options'];
  console.group("📝 Security Header Audit");
  headers.forEach(h => {
    // In actual use, you'd fetch from the server. Here we alert on common deficiencies.
    console.log(`ℹ️ Checking for ${h}... (Ensure this is configured in Cloudflare/Nginx)`);
  });
  console.groupEnd();

  // 2. Scan for Input Sinks (Potential XSS/SQLi)
  const inputs = document.querySelectorAll('input, textarea');
  console.group("🩹 Input Vulnerability Scan");
  inputs.forEach(input => {
    if (input.type !== 'hidden' && !input.getAttribute('pattern') && !input.getAttribute('required')) {
      console.warn(`⚠️ Unprotected Input detected:`, input, "Suggest adding 'pattern' or server-side sanitization.");
    }
  });
  console.groupEnd();

  // 3. Check for exposed information
  if (document.body.innerText.includes("vulner") || document.body.innerText.includes("debug:")) {
      console.warn("⚠️ Information Leakage? Found debug strings in the visible page.");
  }

  // 4. Check for unencrypted forms
  if (window.location.protocol !== 'https:') {
      console.error("🚨 CRITICAL: Content is being served over HTTP. Use HTTPS everywhere.");
  }

  console.log("%c 🏁 Pentest Scan Complete. ", "color: #000; background: #fff;");
})();
