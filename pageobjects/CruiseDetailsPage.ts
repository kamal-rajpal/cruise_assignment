import { Page, Locator, expect } from '@playwright/test';

export class CruiseDetailsPage {
   page: Page;
   guestSelectorButton: Locator;
   accessibleRoomText: Locator;
   viewFullItineraryList: Locator;
   firstLabel: Locator;
   closeModalButton: Locator;
   continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.guestSelectorButton = page.locator('#guest-selector-button');
    this.accessibleRoomText = page.locator('#no-title');
    this.viewFullItineraryList = page.getByRole('list', { name: 'View Full Itinerary' });
    this.firstLabel = page.locator('label').first();
    this.closeModalButton = page.getByRole('button', { name: 'Close Modal' });
    this.continueButton = page.getByRole('button', { name: 'CONTINUE' });
  }

  async verifyPage() {
    await expect(this.guestSelectorButton).toBeVisible();
    await expect(this.guestSelectorButton).toContainText('2 guests');
    await expect(this.accessibleRoomText).toContainText('Accessible stateroom');
    await expect(this.viewFullItineraryList).toBeVisible();
  }

  async closeLabelModal() {
    await this.firstLabel.click();
    await this.closeModalButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}


module.exports = {CruiseDetailsPage};
