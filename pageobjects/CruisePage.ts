import { Page, Locator, expect } from '@playwright/test';

export class CruisePage {
  page: Page;
  manageBookingNav: Locator;
  bookingDetailsLink: Locator;
  bookingAccessGroup: Locator;
  findCruiseLink: Locator;
  cruisesTabPanel: Locator;
  cruisesTab: Locator;
  cruiseSearchHeading: Locator;
  cruiseToursTab: Locator;
  filtersTabs: {
    destination: Locator;
    date: Locator;
    port: Locator;
    ship: Locator;
  };
  resetFiltersButton: Locator;  
  guestsMenu: Locator;  
  stateroomMenu: Locator;  
  sortMenu: Locator;  
  regionsMenu: Locator;  
  fareTypeToggle: Locator;  
  princessStandardRadio: Locator;  
  princessPlusRadio: Locator;
  cruiseDetailsButtons: Locator;
    

  constructor(page: Page) {
    this.page = page;
    this.cruisesTab = page.locator('#cruises-tab');  
    this.filtersTabs = {  
      destination: page.locator('#filters-tabs-destinations'),  
      date: page.locator('#filters-tabs-date'),  
      port: page.locator('#filters-tabs-port'),  
      ship: page.locator('#filters-tabs-ship')  
    };
      this.resetFiltersButton = page.getByLabel('filters').getByRole('button', { name: 'Reset Filters' });   
       this.guestsMenu = page.locator('#stateroom-guests-menu');  
    this.stateroomMenu = page.locator('#stateroom-options-menu');  
    this.sortMenu = page.locator('#stateroom-sort-menu');  
    this.regionsMenu = page.locator('#stateroom-regions-menu');  
    this.fareTypeToggle = page.locator('#fare-type-toggle');  
    this.princessStandardRadio = page.getByRole('radio', { name: 'Fare Type Princess Standard' });  
    this.princessPlusRadio = page.getByRole('radio', { name: 'Fare Type Princess Plus' });  
    this.manageBookingNav = page
      .getByLabel('Main navigation')
      .getByText('Manage booking');

    this.cruiseDetailsButtons = page.getByRole('button', { name: /Cruise Details/i }); 
    this.bookingDetailsLink = page.getByRole('link', { name: 'Booking Details' });
    this.bookingAccessGroup = page.getByRole('group', {
      name: /Access your cruise without/i,
    });

    this.findCruiseLink = page.getByRole('link', { name: 'Find a Cruise' });
    this.cruisesTabPanel = page.getByRole('tabpanel', { name: 'Cruises' });
    //this.cruisesTab = page.getByRole('tab', { name: 'Cruises' });
    this.cruiseSearchHeading = page.getByRole('heading', {
      name: 'Cruise Search - Princess',
    });
    this.cruiseToursTab = page.getByRole('tab', {
      name: 'Cruisetours cruise & land tour',
    });
  }

   async clickFirstCruiseDetails() {  
    await this.cruiseDetailsButtons.first().click();  
    
  }  

    async verifyTabsAndFilters() {  
    await expect(this.cruisesTab).toContainText('Cruises');  
    await expect(this.filtersTabs.destination).toContainText('Destination');  
    await expect(this.filtersTabs.date).toContainText('Date & Length');  
    await expect(this.filtersTabs.port).toContainText('Departure Port');  
    await expect(this.filtersTabs.ship).toContainText('Ship');  
    await expect(this.resetFiltersButton).toContainText('Reset Filters');  
  }  


   async verifyDefaultMenusAndPackage() {  
    await expect(this.guestsMenu).toContainText('Guests: 2 Guests');  
    await expect(this.stateroomMenu).toContainText('Stateroom: Interior');  
    await expect(this.sortMenu).toContainText('Sort: Price low');  
    await expect(this.regionsMenu).toContainText('Regions: All Regions');  
    await expect(this.princessStandardRadio).toBeChecked();
    await expect(this.princessPlusRadio).not.toBeChecked();   
    await expect(this.fareTypeToggle).toContainText(`Our "Princess Plus" fare includes our Princess Plus Beverage Package, Wi-Fi and Crew Appreciation!`);  
  }  

  async openManageBooking(): Promise<void> {
    await this.manageBookingNav.click();
    await this.bookingDetailsLink.click();
    await expect(this.bookingAccessGroup).toBeVisible();
  }

  async openCruiseSearch(): Promise<void> {
    await this.findCruiseLink.click();
    await expect(this.cruisesTabPanel).toBeVisible();
    await this.cruisesTab.click();
    await expect(this.cruiseSearchHeading).toBeVisible();
  }

  async openCruiseToursTab(): Promise<void> {
    await this.cruiseToursTab.click();
  }
}
module.exports = { CruisePage };