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

  constructor(page: Page) {
    this.page = page;

    this.manageBookingNav = page
      .getByLabel('Main navigation')
      .getByText('Manage booking');

    this.bookingDetailsLink = page.getByRole('link', { name: 'Booking Details' });
    this.bookingAccessGroup = page.getByRole('group', {
      name: /Access your cruise without/i,
    });

    this.findCruiseLink = page.getByRole('link', { name: 'Find a Cruise' });
    this.cruisesTabPanel = page.getByRole('tabpanel', { name: 'Cruises' });
    this.cruisesTab = page.getByRole('tab', { name: 'Cruises' });
    this.cruiseSearchHeading = page.getByRole('heading', {
      name: 'Cruise Search - Princess',
    });
    this.cruiseToursTab = page.getByRole('tab', {
      name: 'Cruisetours cruise & land tour',
    });
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