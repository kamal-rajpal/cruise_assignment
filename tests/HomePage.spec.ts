import { test, expect } from '@playwright/test';
const { POManager } = require('../pageobjects/POManager');
//Json->string->js object
const dataset = JSON.parse(JSON.stringify(require("../utils/TestData.json")));

test.describe('Princess Cruises ', () => {
  test('User can login and navigate cruises', async ({ page }) => {
    const poManager = new POManager(page);

    const homePage = poManager.getHomePage();
    const loginPage = poManager.getLoginPage();
    const cruisePage = poManager.getCruisePage();

    // Go to homepage
    await homePage.goto();
    await homePage.acceptCookies();
    await homePage.clickLogin();

    // Login
    await loginPage.login('Kamalrajpal04@gmail.com', 'Kamal@1234');

    // Navigate cruises
    await cruisePage.openManageBooking();
    await cruisePage.openCruiseSearch();
    await cruisePage.openCruiseToursTab();
  });

  test('Check broken links on HomePage', async ({ page }) => {
    test.setTimeout(5 * 60 * 1000); // 5 minutes

    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();

    await homePage.goto();
    await homePage.acceptCookies();

    const brokenLinks = await homePage.checkBrokenLinks();
    console.log('Broken links found:', brokenLinks);

    expect(brokenLinks, 'Some links are broken').toHaveLength(0);
  });


  test('User can login, navigate to Manage Booking, and check broken links', async ({ page }) => {
    test.setTimeout(5 * 60 * 1000); // 5 minutes
    const poManager = new POManager(page);
    const homePage = poManager.getHomePage();
    const loginPage = poManager.getLoginPage();
    const cruisePage = poManager.getCruisePage();
    // Go to home page and accept cookies
    // Go to homepage
    await homePage.goto();
    await homePage.acceptCookies();
    await homePage.clickLogin();

    // Login
    await loginPage.login('Kamalrajpal04@gmail.com', 'Kamal@1234');

    // Navigate to Manage Booking page
    await cruisePage.openManageBooking();

    // Check broken links on Manage Booking page
    const brokenLinks = await homePage.checkBrokenLinks();
    console.log('Broken internal links found on Manage Booking page:', brokenLinks);

    expect(brokenLinks).toHaveLength(0); // Fail test only for broken internal links

  });




});
