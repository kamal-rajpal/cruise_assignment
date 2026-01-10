# Princess_assignment
## Playwright-Automation

Princess Assignment is a lightweight framework designed to streamline GitHub repository management combined with comprehensive reporting and traceability features. It enables users to easily interact with GitHub repositories, automate workflows, and generate detailed reports for better project tracking and accountability.


Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.



[Playwright Github](https://github.com/microsoft/playwright)
Github Assigment 


# What does Playwright support

-   One API, cross platform, cross language and cross browser
-   Test on Windows, Linux and MacOS
-   Supports Chromium, Firefox & Webkit
-   Mobile device emulation (e.g., iPhone, Pixel)
-   Playwright API can be used in JavaScript, TypeScript, Python, Java & .NET

# Why Playwright

Resilient tests:

-   **Auto-waiting**: Elements are automatically waited for before interactions.
-   **Web-first assertions**: Assertions retry until conditions are met.
-   **Tracing**: Debug tests with screenshots, network logs, and execution traces.

Fast execution:

-   Isolated testing (new browser profile for each test)
-   Re-use authentication (save and reuse state)

Powerful tooling:

-   CodeGen
-   Inspector
-   Trace viewer

Limitations:

-   Multi tab, origin and windows support
-   Iframe support
-   Pierce the shadow DOM
-   Make API request

# Technologies Used

-   **Playwright**: A versatile library tailored for browser automation with a focus on reliability.
-   **TypeScript**: A statically typed superset of JavaScript.
-   **npm**: The package manager for JavaScript.


# Test suite

The tests in the framework cover:

-   User login and registration
-   Home Page
-   Using Page Object Model
-   GitHub Actions with HTML report
-   report and trace
-   Test json data 

# Project Structure

```bash
playwright-p/
├── pageobjects/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── POManagerPage.ts
├── tests/
│   ├── HomePage/
│   ├── Login/
├── global-setup.js
├── playwright.config.js
├── playwright.yml
├── package.json
└── ...
```

# Configuration

The framework can be configured through `playwright.config.ts`. Key configurations include:

-   Browsers: Chromium, Firefox, WebKit
-   Viewport sizes
-   Test timeouts
-   Parallel execution settings

# Getting Started

## Prerequisites

- Node.js 18 or higher
- npm

## Installation

1. Clone the repository:
```bash
git 

```

2. Install dependencies:
```bash
npm install
npm install otpauth
npm install -D @types/otpauth
npm i -D @playwright/test allure-playwright

```

3. Install Playwright browsers:
```bash
npm init playwright@latest 
```

4. Set up environment variables:
```bash
  under yml file
    Set env variables 
```

5. Add the test credentials to `.env`:
```
MAF_token=AUTH_token
MFA_Username=username
```


6. Run the tests:
```bash
npx playwright test
```



# Checklist

| Task                       | Status                |
| -------------------------- | --------------------- |
| GitHub Actions             | :white_check_mark:    |
| Page Object Model          | :white_check_mark:    |
| Reuse authentication state | :white_check_mark:    |
| Multiple browser tabs      | :white_check_mark:    |
| Data driven tests          | :white_check_mark:    |

# Page Object Model (POM)

Page Object Model (POM) is a design pattern that creates a repository for storing all web elements. In POM, consider each web page of an application as a separate class file. Each class file will contain only corresponding web page elements. Page objects are organized under the `/pages/` directory, making the test code more readable, maintainable, and less prone to duplication.

## Benefits of POM

-   **Maintainability**: Changes in the UI require updates only in the page classes.
-   **Reusability**: Common operations can be reused across different tests.
-   **Readability**: Tests are more readable and easier to understand.



# API test

Site API Swagger doc is located [here](https://ovcharski.com/shop/rest-api/docs/).

The API tests are located in `/tests/api/`

# Locators

Playwright comes with multiple built-in locators. To make tests resilient, Playwright recommend prioritizing user-facing attributes and explicit contracts. These are the recommended built in locators.

**page.getByRole()** to locate by explicit and implicit accessibility attributes.

**page.getByText()** to locate by text content.

**page.getByLabel()** to locate a form control by associated label's text.

**page.getByPlaceholder()** to locate an input by placeholder.

**page.getByAltText()** to locate an element, usually image, by its text alternative.

**page.getByTitle()** to locate an element by its title attribute.

**page.getByTestId()** to locate an element based on its data-testid attribute (other attributes can be configured).

# Usage

Get started by installing Playwright using npm or yarn. Alternatively you can also get started and run tests using the VS Code Extension.

```bash
npm init playwright@latest
```

```bash
yarn create playwright
```

## Running tests

```bash
npx playwright test
```

## The most common options available in the command line

Run a single test file

```bash
npx playwright test tests/todo-page.spec.ts
```

Run a set of test files

```bash
npx playwright test tests/todo-page/ tests/landing-page/
```

Run tests in headed browsers

```bash
npx playwright test --headed
```

Run all the tests against a specific project

```bash
npx playwright test --project=chromium
```

Disable parallelization

```bash
npx playwright test --workers=1
```

Choose a reporter

```bash
npx playwright test --reporter=dot
```

Run in debug mode with Playwright Inspector

```bash
npx playwright test --debug
```

Ask for help

```bash
npx playwright test --help
```

Complete set of Playwright Test options is available in the configuration file.

# How to Update Playwright version

Checking Playwright version

```bash
npx @playwright/test --version
```

Check if package needs update

```bash
npm outdated @playwright/test
```

Playwright update can be made by running

```bash
npm i @playwright/test
```

Update to specific version

```bash
npm install @playwright/test@1.36.2
```

Usually after Playwright update, browsers need to be updated

```bash
npx playwright install
```



# For future improvements and considerations

-   Manage test on data file which can used for text comparion and insertion
-   Add Session manager to store session 
-   Create Step-defination files to increase readability and Reporting 