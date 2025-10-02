# Playwright Initial Project

This repository is my first practice project using **Playwright** as an automation tool.  
It focuses on automating tests for the demo application: [SauceDemo](https://www.saucedemo.com/).

## 🚀 Running the Project

To run the tests locally:

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies (only the first time):
   ```bash
   npm install
   ```
4. Run tests in headed mode (browser visible):
   ```bash
   npm run test:headed
   ```
5. Run tests in headless mode (with HTML report generation):
   ```bash
   npm run test:report
   ```
6. Open the last generated reports:
   ```bash
   npm run test:report
   ```

## 📊 Test Reports

The project generates HTML reports with Playwright’s built-in reporter.
   
Reports are available under:
   ```bash
   /reports/html
   ```

To view them:
   ```bash
   npm run report
   ```

## ✅ Test Coverage

Currently automated modules:
* **Login**

Planned next modules:
* **Inventory**
* **Cart**
* **Checkout**
* **Logout**

## 📂 Project Structure

```text
playwright-initial-project/
  ├── pages/         # Page Object Models for reusability
  ├── tests/           # End-to-end test specifications
  ├── fixtures/          # (To be added) custom fixtures
  ├── mocks/             # (To be added) network mocks
  ├── playwright.config.ts  # Playwright configuration file
  ├── package.json       # Dependencies and npm scripts
  └── tsconfig.json      # TypeScript configuration
```

## 📌 Future Improvements

This project is always evolving. Upcoming updates include:
* Add more Page Object Models for the different Modules mentioned above.
* Expand test coverage: More system modules will be tested.
* Include CI/CD integration with Github Actions.
* Add Fixtures and Mocks to get better test management.
* Improve reporting (videos, traces)
