# Playwright Automation Portfolio

Automated API and browser testing portfolio built with Playwright Test and JavaScript. The project validates REST endpoints from ServeRest and user flows on the OrangeHRM demo application.

## Project Overview

- 3 API scenarios for ServeRest
- Browser scenarios for login, logout, invalid credentials, and page title validation
- Playwright UI mode for interactive test execution and results
- HTML reporter for reviewing test runs
- GitHub Actions workflow for automated test execution

## Applications Under Test

- ServeRest API: https://serverest.dev/
- OrangeHRM demo: https://opensource-demo.orangehrmlive.com/
- Google: https://www.google.com/ (page title check)

## Technologies

- JavaScript
- Playwright Test
- Node.js and npm
- GitHub Actions

## Project Structure

```text
Playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   ├── api.spec.js
│   ├── Login.spec.js
│   ├── codegen.spec.js
│   ├── codegenBranded.spec.js
│   ├── verifyErrorMessage.spec.js
│   ├── Google.spec.js
│   └── Sample.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Automated Scenarios

### ServeRest API

API tests use Playwright's `request` fixture to send HTTP requests directly to ServeRest. They do not open or control a browser window.

#### 1. Create a user

- Sends `POST /usuarios` with a unique email for each run.
- Validates the `201` status, success message, and generated user ID.

#### 2. Authenticate a valid user

- Creates a user and sends `POST /login` with that user's credentials.
- Validates the `200` status, success message, and non-empty authorization token.

#### 3. Retrieve products

- Sends `GET /produtos`.
- Validates the `200` status, response fields, products array, and that products are available.

### Browser Tests

- Validates login and logout flows on the OrangeHRM demo.
- Checks the error message for invalid login credentials.
- Checks the Google page title.
- Includes basic Playwright assertion examples in `Sample.spec.js`; one example is intentionally skipped.

## Setup

Requirements: Node.js 20 or later and npm.

Install dependencies and the Chromium browser:

```bash
npm ci
npx playwright install chromium
```

## Running the Tests

Run all tests in headless mode:

```bash
npm test
```

Run only the three ServeRest API scenarios:

```bash
npm run test:api
```

Run all tests in Playwright UI mode:

```bash
npm run test:ui
```

Run only the API scenarios in Playwright UI mode:

```bash
npm run test:api:ui
```

In UI mode, select a test and press **Run** to see its status, steps, and request/response details. API tests run without a browser page; the UI displays their execution and results instead.

Open the HTML report from the latest test run:

```bash
npm run report
```

## Test Results

The Playwright HTML reporter is configured in `playwright.config.js`. Test results, reports, traces, screenshots, and videos are generated locally and excluded from version control.

## Continuous Integration

The GitHub Actions workflow runs the Playwright suite on pushes and pull requests targeting `main`. It installs dependencies, installs Chromium, and executes the tests.
