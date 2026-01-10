import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { CruisePage } from './CruisePage';

export class POManager {
  page: Page;
  homePage: HomePage;
  loginPage: LoginPage;
  cruisePage: CruisePage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.loginPage = new LoginPage(page);
    this.cruisePage = new CruisePage(page);
  }

  getHomePage(): HomePage {
    return this.homePage;
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }

  getCruisePage(): CruisePage {
    return this.cruisePage;
  }
}

module.exports = { POManager };