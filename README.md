<p align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="250">
</p>

# Playwright Demo Project

This repository demonstrates the use of [Playwright](https://playwright.dev/) for automated end-to-end testing. It includes configurations for running tests, generating reports using Allure, and deploying the reports to GitHub Pages for easy accessibility.

---

## **Project Description**

Playwright is a modern, reliable framework for automating web applications. This project showcases:

- Writing and running Playwright tests.
- Generating test execution reports using Allure.
- Automating the deployment of Allure reports to GitHub Pages.

The project serves as a template for integrating Playwright into CI/CD workflows with advanced reporting.

---

## **Prerequisites**

Ensure the following tools are installed on your system:

1. **Node.js** (Version 18 or above)  
   [Download Node.js](https://nodejs.org/)
2. **Git**  
   [Download Git](https://git-scm.com/)
3. **Allure Commandline** (Optional for local report generation)  
   [Install Allure](https://docs.qameta.io/allure/)

---

## **Steps to Run**

### 1. Clone the Repository
```bash
git clone https://github.com/Sumit-Soman/playwright-demo.git
cd playwright-demo
```

### 2. Install Dependencies
```
npm install
```

### 3. Install Playwright Browsers
```
npx playwright install
```

### 4. Run tests
```
npx playwright test
```
This will execute the test cases defined in the tests/ directory and save the results in the allure-results directory.

# Reporting using Allure and Publishing to GitHub Pages

## Reporting using Allure

Allure provides a comprehensive way to visualize test results with detailed insights into the execution process.

### Generate Allure Report Locally

1. After running tests, generate the Allure report:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report // open report on browser
```
# Publish Allure Report to GitHub Pages

This project is configured to automatically publish the Allure report to GitHub Pages using GitHub Actions.

## Steps to Publish

1. Push changes to the `main` branch or open a pull request.
2. The GitHub Actions workflow will:
   - Run Playwright tests.
   - Generate the Allure report.
   - Deploy the report to the `gh-pages` branch.

3. Access the published report at:
  https://username.github.io/repository-name/

# Key Features

- **Playwright Tests**: Efficient, reliable browser automation.
- **Allure Reporting**: Detailed insights into test execution.
- **CI/CD Integration**: Automated workflows using GitHub Actions.
- **GitHub Pages Deployment**: Easy sharing of reports.


