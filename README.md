# 🎭 API and E2E Test Automation with Playwright & JavaScript

This repository contains API automation tests for **ServeRest** and End-to-End (E2E) tests for the **OrangeHRM** platform.

## 🎯 Project Scope
- **ServeRest API:** user creation, valid-user authentication, and product listing.
- **OrangeHRM E2E:** successful and invalid login flows, including logout.

## 🛠️ Architecture and Best Practices
* **API testing:** Playwright's `request` fixture sends HTTP requests directly to ServeRest without launching a browser.
* **Browser testing:** The current Playwright project is configured to run on Chromium.
* **CI/CD with GitHub Actions:** The workflow runs the test suite on pushes and pull requests to `main`.

## 📦 How to Run Locally

1. Install dependencies:
```bash
npm install
```
2. Install browser binaries:
```bash
npx playwright install
```
3. Run all tests:
```bash
npm test
```
To run only the ServeRest API scenarios:
```bash
npm run test:api
```
4. View the interactive HTML report:
```bash
npx playwright show-report
```
