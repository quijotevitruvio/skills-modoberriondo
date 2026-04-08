/**
 * Level 99 Playwright Smoke Test
 * Purpose: Verify Critical Path (Login -> Dashboard)
 * Usage: `npx playwright test smoke-test.js`
 */

const { test, expect } = require('@playwright/test');

test('CRM Core Smoke Test', async ({ page }) => {
  // 1. Visit Login
  await page.goto('https://crm.example.com/login');
  
  // 2. Perform Login (using data-testids)
  await page.fill('[data-testid="login-email"]', 'admin@example.com');
  await page.fill('[data-testid="login-password"]', 'password123');
  await page.click('[data-testid="login-submit"]');
  
  // 3. Verify Dashboard Load
  await expect(page).toHaveURL(/.*dashboard/);
  const welcomeMessage = page.locator('[data-testid="welcome-header"]');
  await expect(welcomeMessage).toContainText('Welcome, Admin');

  // 4. Check for Console Errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error(`%c ❌ Browser Error: ${msg.text()} `, "color: #ff0000;");
    }
  });

  console.log("%c ✅ Smoke Test Passed! ", "color: #00ff00; font-weight: bold; background: #000;");
});
