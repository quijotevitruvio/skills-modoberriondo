/**
 * Level 99 Lighthouse Auditor
 * 
 * Purpose: Automated Lighthouse reports for performance, SEO, and PWA.
 * Usage: `node lighthouse-audit.js https://example.com`
 */

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr);
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects', '--headless'],
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
};

// Example Execution
if (process.argv[2]) {
  const targetUrl = process.argv[2];
  console.log(`%c 🚀 Auditing: ${targetUrl} `, "color: #00ffcc; font-weight: bold; background: #000;");
  
  launchChromeAndRunLighthouse(targetUrl, opts).then(results => {
    console.log(`- Performance: ${results.categories.performance.score * 100}`);
    console.log(`- Accessibility: ${results.categories.accessibility.score * 100}`);
    console.log(`- SEO: ${results.categories.seo.score * 100}`);
  });
} else {
  console.log("Usage: node lighthouse-audit.js <url>");
}
