import { test, expect } from '@playwright/test';
const { POManager } = require('../pageobjects/POManager');
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));


test('Booking flow using POManager', async ({ page }) => {
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const loginPage = poManager.getLoginPage();
    const cruisePage = poManager.getCruisePage();
    const cruiseDetailsPage = poManager.getCruiseDetailsPage();
    const guestInfoPage = poManager.getGuestInfoPage(); 

    // Go to home page and accept cookies
     // Go to homepage
    await homePage.goto();
    await homePage.acceptCookies();

  await poManager.homePage.navigateToFindCruise();

//   await cruisePage.verifyRemove16PlusDaysVisible();
//   await cruisePage.verifyViewResultsButtonVisible();
//   await cruisePage.openDeparturePortTab();
//   await cruisePage.openShipTab();
  await cruisePage.clickFirstCruiseDetails();

  await poManager.cruiseDetailsPage.verifyPage();
  await poManager.cruiseDetailsPage.closeLabelModal();
  await poManager.cruiseDetailsPage.clickContinue();

  await guestInfoPage.verifyGuestInfoPage();
  await poManager.guestInfoPage.selectNumberOfGuests();
  await poManager.guestInfoPage.selectInteriorStateroom();
  await poManager.guestInfoPage.addPrincessPremierPackage();
  await poManager.guestInfoPage.clickContinue();
  await poManager.guestInfoPage.verifyBackToStateroomSelection();

  await poManager.guestInfoPage.fillFirstGuestInfo({
    firstName: 'K',
    middleName: 'j',
    lastName: 'r',
    gender: 'M',
    month: '02',
    day: '4',
    year: '1995',
    zip: '33324',
    phone: '(898) 989-8989',
    email: 'k@s.com',
  });

  await poManager.guestInfoPage.verifyPromoEmailUnchecked();
  await poManager.guestInfoPage.saveFirstGuest();

  await poManager.guestInfoPage.fillSecondGuestInfo({
    firstName: 'S',
    middleName: 'j',
    lastName: 'K',
    gender: 'M',
    month: '02',
    day: '4',
    year: '1991',
  });

  await poManager.guestInfoPage.saveSecondGuest();
});
