import { Page, Locator, expect } from '@playwright/test';

export class GuestInfoPage {
  page: Page;
  backToCruiseDetailsButton: Locator;
  accessibleRoomCheckbox: Locator;
  h2Title: Locator;
  guestCountDropdown: Locator;
  guest2GuestsButton: Locator;
  interiorFromButton: Locator;
  ubeReact: Locator;
  stateroomMeta: Locator;
  disclaimer: Locator;
  selectInteriorGuaranteeButton: Locator;
  upgradePackageHeading: Locator;
  addPrincessPremierPackageButton: Locator;
  backToPackagesButton: Locator;
  stateroomPricing: Locator;
  assuranceAddOnCheckbox: Locator;
  itemizedPricingWrapper: Locator;
  summaryContainer: Locator;
  princessPremierLabel: Locator;
  continueButton: Locator;
  backToStateroomSelectionButton: Locator;
  firstGuestHeading: Locator;
  firstNameInput: Locator;
  middleNameInput: Locator;
  lastNameInput: Locator;
  genderDropdown: Locator;
  monthDropdown: Locator;
  dayDropdown: Locator;
  yearDropdown: Locator;
  ageRequirementsLink: Locator;
  zipCodeInput: Locator;
  phoneInput: Locator;
  emailInput: Locator;
  promotionalEmailCheckbox: Locator;
  saveContinueButton: Locator;
  backToFirstGuestButton: Locator;
  secondGuestHeading: Locator;
  secondGuestFirstNameInput: Locator;
  secondGuestMiddleNameInput: Locator;
  secondGuestLastNameInput: Locator;
  secondGuestGenderDropdown: Locator;
  secondGuestMonthDropdown: Locator;
  secondGuestDayDropdown: Locator;
  secondGuestYearDropdown: Locator;


  constructor(page: Page) {
    this.page = page;
    this.backToCruiseDetailsButton = page.getByRole('button', { name: 'Back to Cruise Details' });
    this.accessibleRoomCheckbox = page.getByTestId('accessible-room');
    this.h2Title = page.locator('h2');
    this.guestCountDropdown = page.locator('div').filter({ hasText: 'Guest2 Guests3 Guests4 Guests' }).nth(5);
    this.guest2GuestsButton = page.getByRole('button', { name: '2 Guests' });
    this.interiorFromButton = page.getByRole('button', { name: 'Interior from$' });
    this.ubeReact = page.locator('#ube-react');
    this.stateroomMeta = page.locator('#stateroom-meta');
    this.disclaimer = page.getByTestId('disclaimer');
    this.selectInteriorGuaranteeButton = page.getByRole('button', { name: /Select .* for Interior Guarantee/ });
    this.upgradePackageHeading = page.locator('h2', { hasText: 'Upgrade to a Package and Save' });
    this.addPrincessPremierPackageButton = page.getByRole('button', { name: 'Add Princess Premier Package' });
    this.backToPackagesButton = page.getByRole('button', { name: 'Back to Packages' });
    this.stateroomPricing = page.locator('#stateroom-pricing');
    this.assuranceAddOnCheckbox = page.locator('#assuranceAddOn');
    this.itemizedPricingWrapper = page.locator('.itemized-pricing-wrapper');
    this.summaryContainer = page.locator('.summary-container');
    this.princessPremierLabel = page.getByLabel('Princess Premier opens a');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.backToStateroomSelectionButton = page.getByRole('button', { name: 'Back to Stateroom Selection' });
    this.firstGuestHeading = page.locator('h2').first();
     this.firstNameInput = page.getByRole('textbox', { name: '* Guest 1 First Name' });
    this.middleNameInput = page.getByRole('textbox', { name: 'Guest 1 Middle Name' });
    this.lastNameInput = page.getByRole('textbox', { name: '* Guest 1 Last Name' });
    this.genderDropdown = page.getByLabel('*Guest 1Gender');
    this.monthDropdown = page.getByLabel('Guest 1 Month');
    this.dayDropdown = page.getByLabel('Guest 1 Day');
    this.yearDropdown = page.getByLabel('Guest 1 Year');
    this.ageRequirementsLink = page.getByRole('link', { name: 'Age Requirements' });
    this.zipCodeInput = page.getByRole('textbox', { name: '* Guest 1 Zip/Postal Code' });
    this.phoneInput = page.getByRole('textbox', { name: 'Guest 1 phone number' });
    this.emailInput = page.getByRole('textbox', { name: '* Guest 1 Email' });
    this.promotionalEmailCheckbox = page.getByRole('checkbox', { name: 'I would like to receive' });
    this.saveContinueButton = page.getByRole('button', { name: 'Save & Continue' });
    this.backToFirstGuestButton = page.getByRole('button', { name: 'Back to First Guest' });
    this.secondGuestHeading = page.locator('h2', { hasText: 'Second Guest' });
    this.secondGuestFirstNameInput = page.getByRole('textbox', { name: '* Guest 2 First Name' });
    this.secondGuestMiddleNameInput = page.getByRole('textbox', { name: 'Guest 2 Middle Name' });
    this.secondGuestLastNameInput = page.getByRole('textbox', { name: '* Guest 2 Last Name' });
    this.secondGuestGenderDropdown = page.getByLabel('*Guest 2Gender');
    this.secondGuestMonthDropdown = page.getByLabel('Guest 2 Month');
    this.secondGuestDayDropdown = page.getByLabel('Guest 2 Day');
    this.secondGuestYearDropdown = page.getByLabel('Guest 2 Year');

  }

  async verifyGuestInfoPage() {
    await expect(this.backToCruiseDetailsButton).toBeVisible();
    await expect(this.accessibleRoomCheckbox).toBeVisible();
    await expect(this.accessibleRoomCheckbox).not.toBeChecked();
    await expect(this.h2Title).toContainText('Number of Guests');
  }

  async selectNumberOfGuests() {
    await this.guestCountDropdown.click();
    await this.guest2GuestsButton.click();
  }

  async selectInteriorStateroom() {
    await this.interiorFromButton.click();
    await expect(this.ubeReact).toContainText('Select your room type');
    await this.stateroomMeta.click();
    await this.interiorFromButton.click();
    await expect(this.page.getByRole('article')).toContainText('Interior Guarantee');
    await this.disclaimer.click();
    await expect(this.ubeReact).toContainText('To View accessible staterooms');
    await this.selectInteriorGuaranteeButton.click();
    await expect(this.selectInteriorGuaranteeButton).toBeVisible();
    await expect(this.upgradePackageHeading).toContainText('Upgrade to a Package and Save');
  }

  async addPrincessPremierPackage() {
    await this.addPrincessPremierPackageButton.click();
    await expect(this.backToPackagesButton).toBeVisible();
    await expect(this.stateroomPricing).toContainText('Your Cruise Summary');
    await expect(this.assuranceAddOnCheckbox).not.toBeChecked();
    await this.itemizedPricingWrapper.click();
    await this.summaryContainer.click();
    await expect(this.princessPremierLabel).toContainText('Princess Premier');
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async verifyBackToStateroomSelection() {
    await expect(this.backToStateroomSelectionButton).toBeVisible();
    await expect(this.firstGuestHeading).toContainText('First Guest');
  }
    async fillFirstGuestInfo(info: {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    month: string;
    day: string;
    year: string;
    zip: string;
    phone: string;
    email: string;
  }) {
    await this.firstNameInput.fill(info.firstName);
    await this.middleNameInput.fill(info.middleName);
    await this.lastNameInput.fill(info.lastName);
    await this.genderDropdown.selectOption(info.gender);
    await this.monthDropdown.selectOption(info.month);
    await this.dayDropdown.selectOption(info.day);
    await this.yearDropdown.selectOption(info.year);
    await this.zipCodeInput.fill(info.zip);
    await this.phoneInput.fill(info.phone);
    await this.emailInput.fill(info.email);
    await expect(this.ageRequirementsLink).toBeVisible();
  }

  async verifyPromoEmailUnchecked() {
    await expect(this.promotionalEmailCheckbox).not.toBeChecked();
  }

  async saveFirstGuest() {
    await this.saveContinueButton.click();
    await expect(this.backToFirstGuestButton).toBeVisible();
  }

  async fillSecondGuestInfo(info: {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    month: string;
    day: string;
    year: string;
  }) {
    await this.secondGuestFirstNameInput.fill(info.firstName);
    await this.secondGuestMiddleNameInput.fill(info.middleName);
    await this.secondGuestLastNameInput.fill(info.lastName);
    await this.secondGuestGenderDropdown.selectOption(info.gender);
    await this.secondGuestMonthDropdown.selectOption(info.month);
    await this.secondGuestDayDropdown.selectOption(info.day);
    await this.secondGuestYearDropdown.selectOption(info.year);
  }

  async saveSecondGuest() {
    await this.saveContinueButton.click();
   // await expect(this.secondGuestHeading).toBeVisible();
  }

}
module.exports = {GuestInfoPage};