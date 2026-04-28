# QA Automation & E2E Testing Skill (Level 99)

Master-level quality assurance, focusing on automated end-to-end (E2E) testing, regression prevention, and performance-based UI audits.

## [!IMPORTANT] The Golden Rule of QA
- **Flaky Tests are Debt**: A test that fails randomly is worse than no test. Always identify and isolate unstable selectors (`data-testid` is mandatory).
- **Shift Left**: Run tests on every Pull Request (CI/CD) to catch bugs before they reach the main branch.
- **Coverage over Quantity**: Test the "Critical Path" (Login, Payment, Data Entry) with 100% reliability before testing edge cases.

## 🛠️ Level 99 Automation (Patterns)
- **The "Page Object Model" (POM)**: Structure your tests into reusable Page classes to ensure that one UI change only requires one update in your test code.
- **Visual Regression Testing**: Use automated screenshots to detect "Pixel-level" shifts in the design system.
- **Parallel Execution**: Run 50+ tests simultaneously in the cloud (Playwright Sharding) to reduce CI time to < 2 minutes.

## Command Library (Execution & Diagnostics)
> [!NOTE]
> Use these to run and debug your test suite instantly.

- **Run Quick Smoke Test (Headless)**:
  ```bash
  (Using Playwright) npx playwright test --grep @smoke
  ```
- **Open Test UI (Debugger)**:
  ```bash
  npx playwright test --ui
  ```
- **Generate Test Report**:
  ```bash
  npx playwright show-report
  ```

## Advanced Techniques
- **Network Interception**: Mock API responses in your tests to verify how the UI handles 500 errors or slow network conditions.
- **State Management Injection**: Log in once, save the "Storage State", and reuse it for all tests to save 30+ seconds per run.
- **A11y Testing**: Integrate `axe-core` to automatically scan for accessibility violations during every E2E run.

## Actionable Script: Smoke Tester
- **[smoke-test.js](file:///C:/Users/Rocka/.gemini/antigravity/scratch/.agents/skills/qa_automation/scripts/smoke-test.js)**: A Playwright-powered script to verify that the CRM login and core dashboard are functioning perfectly after a deploy.

## Inter-Skill Integration
- **With GitHub Actions**: Trigger the `smoke-test.js` automatically after the "Deploy Preview" step to block broken merges.
- **With UI/UX Design Systems**: Ensure that every new component in the Design System includes a `data-testid` for the QA bots.
- **With Cybersecurity**: Use QA bots to perform "Fuzzing" on input forms to find potential SQL injection points.
