import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { CruisePage } from './CruisePage';
import { CruiseDetailsPage } from './CruiseDetailsPage';
import { GuestInfoPage } from './GuestInfoPage';

export class POManager {
  page: Page;
  homePage: HomePage;
  loginPage: LoginPage;
  cruisePage: CruisePage;
  cruiseDetailsPage: CruiseDetailsPage;
  guestInfoPage: GuestInfoPage; 


  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.cruiseDetailsPage = new CruiseDetailsPage(page);
    this.loginPage = new LoginPage(page);
    this.cruisePage = new CruisePage(page);
    this.guestInfoPage = new GuestInfoPage(page);
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

  getCruiseDetailsPage() {
    return this.cruiseDetailsPage;
    // return cruiseDetailsPage instance
  } 

  getGuestInfoPage() {
    return new GuestInfoPage(this.page);
  }


}

module.exports = { POManager };