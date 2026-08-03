# 🎭 E2E Test Automation with Playwright & JavaScript

This repository contains a portfolio project focused on End-to-End (E2E) test automation for the **OrangeHRM** platform. The goal is to apply test automation architecture best practices relevant to the QA market.

## 🎯 Project Scope
The target site for testing is the [OrangeHRM Open Source Demo](https://opensource-demo.orangehrmlive.com/).
Currently, the project covers critical business validations such as:
* **Authentication:** Successful login flows and error handling for invalid access attempts.

## 🛠️ Architecture and Best Practices
* **Page Object Model (POM):** Structure designed to separate automation logic and web selectors from test assertion logic, ensuring high maintainability.
* **Multi-Browser Support:** Configured to run on Chromium, Firefox, and WebKit (Safari).
* **CI/CD with GitHub Actions:** Integrated pipeline that automatically executes the test suite on every commit or pull request.

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
npx playwright test
```
4. View the interactive HTML report:
```bash
npx playwright show-report
```
