/**
 * Level 99 Google Indexing Requester
 * Purpose: Priority indexing of new/updated URLs.
 * Requires: Service Account with Indexing API access.
 */

const { google } = require('googleapis');
const fs = require('fs');

async function requestIndexing(url, type = 'URL_UPDATED') {
  try {
    // 1. Authenticate (Requires service_account.json)
    const auth = new google.auth.GoogleAuth({
      keyFile: './service_account.json',
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    const indexing = google.indexing({
      version: 'v3',
      auth: client,
    });

    // 2. Request Indexing
    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: type,
      },
    });

    console.log(`%c ✅ Indexing requested for: ${url} `, "color: #00ff00; font-weight: bold; background: #000;");
    return res.data;

  } catch (error) {
    console.error(`%c ❌ Error: ${error.message} `, "color: #ff0000; font-weight: bold; background: #000;");
  }
}

// Example Execution
if (process.argv[2]) {
  requestIndexing(process.argv[2]);
} else {
  console.log("Usage: node index-request.js <url>");
  console.log("Note: Requires service_account.json in the same directory.");
}
