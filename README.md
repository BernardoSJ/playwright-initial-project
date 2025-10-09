# 🎭 Playwright Initial Project

This repository contains my first complete automation framework using **Playwright**.  
It automates functional tests for the demo web application [SauceDemo](https://www.saucedemo.com/), following a **Page Object Model (POM)** architecture.

---

## 🚀 How to Run the Project

Run the following commands in your terminal:

1. **Clone or download the repository:**
   ```bash
   git clone https://github.com/BernardoSJ/playwright-initial-project.git
   ```
2. **Navigate to the project folder and install dependencies (only the first time):**
   ```bash
   cd playwright-initial-project
   npm install
   ```
3. **Run tests in headed mode (browser visible):**
   ```bash
   npm run test:headed
   ```
4. **Run tests in headless mode with report generation:**
   ```bash
   npm run test:report
   ```
5. **Execute specific test suites by tag (e.g., @cart, @catalog, @logout):**
   ```bash
   npx playwright test --grep @cart
   ```
6. **Open the most recent test report (after running all tests):**
   ```bash
   npm run report:full
   ```
7. **Open the report for the last single test module run:**
   ```bash
   npm run report
   ```

## 📊 Test Reports

Playwright automatically generates an **HTML report** for every test run.
   
Reports are stored under:
   ```bash
   /reports/html
   ```

To view the latest report:
   ```bash
   npm run report:full

   ```

## ✅ Current Test Coverage

**Implemented modules:**
* **Login**
* **Inventory**
* **Cart**
* **Logout**

**In progress / Planned:**
* **Checkout**
* **Full E2E flow** (Login → Add Products → Checkout → Logout)

## 🧩 Project Structure

```text
playwright-initial-project/
  ├── pages/         # Page Object Models for reusability
  ├── tests/           # End-to-end test specifications
  ├── fixtures/          # custom fixtures
  ├── mocks/             # (Planned) network mocks
  ├── playwright.config.ts  # Playwright configuration file
  ├── package.json       # Dependencies and npm scripts
  └── tsconfig.json      # TypeScript configuration
```

## 🧠 Key Concepts Applied

* Modular Page Object Model (POM) design.
* Parameterized fixtures for reusable test contexts.
* Selective test execution using tags (@login, @cart, @catalog).
* Promise handling and waitForURL() for reliable navigation.
* Dynamic locators and use of filter({ has: ... }) for stable element selection.
* Prettier formatting and npm scripts for consistency.

## 📌 Future Improvements

Planned enhancements include:
* Expand test coverage to **Checkout** and **E2E workflows**
* Integrate **CI/CD pipelines** with GitHub Actions.
* Add **network mocks** and **data fixtures** for isolated test scenarios.
* Enhance *reporting* with videos, traces, and test artifacts.

## 🧑‍💻 Author

Bernardo Salinas Jáquez
Quality Assurance Engineer | Test Automation | Playwright | JavaScript | TypeScript
📍 Practice project for strengthening E2E automation skills with Playwright.
