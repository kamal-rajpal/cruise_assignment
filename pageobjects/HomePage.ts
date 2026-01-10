import { test, expect, Locator, Page } from '@playwright/test';
import { isLinkBroken } from '../utils/linkChecker';
import { request, APIRequestContext } from '@playwright/test';


export class HomePage {
  page: Page;
  acceptCookiesBtn: Locator;
  mainNavigation: Locator;
  loginLink: Locator;
  referFriendLink: Locator;
  allLinks: Locator;

  constructor(page: Page) {
    this.page = page;

    this.acceptCookiesBtn = page.getByRole('button', { name: 'AGREE' });

    this.mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });

    this.loginLink = this.mainNavigation.getByRole('link', { name: 'Log In', exact: true });

    this.referFriendLink = page.getByRole('link', { name: 'Refer-a-Friend' });

    this.allLinks = page.locator('a[href]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async acceptCookies(): Promise<void> {
    await this.acceptCookiesBtn.click();
  }

  async clickLogin(): Promise<void> {
    await this.loginLink.click();
  }

  /**
   * Get all hrefs on the page
   * Returns only HTTP(s) URLs
   */
  async getAllHrefs(): Promise<string[]> {
    const count = await this.allLinks.count();
    const urls: string[] = [];

    for (let i = 0; i < count; i++) {
      const href = await this.allLinks.nth(i).getAttribute('href');
      if (!href) continue;

      // Ignore non-http(s) links like tel:, mailto:, javascript:
      if (!href.startsWith('http')) continue;

      urls.push(href);
    }

    return urls;
  }

  /**
   * Check broken links
   * Separates internal vs external links
   * Only fails on broken internal links
   */
async checkBrokenLinks(): Promise<string[]> {
  const urls = await this.getAllHrefs();
  const brokenInternal: string[] = [];
  const brokenExternal: string[] = [];

  const context = await request.newContext();
  const currentDomain = new URL(this.page.url()).origin;

  for (const url of urls) {
    try {
      const res = await context.get(url, { timeout: 10000 });
      if (res.status() >= 400) {
        if (new URL(url).origin === currentDomain) brokenInternal.push(url);
        else brokenExternal.push(url);
      }
    } catch {
      if (new URL(url).origin === currentDomain) brokenInternal.push(url);
      else brokenExternal.push(url);
    }
  }

  await context.dispose();

  if (brokenExternal.length > 0) console.warn('Broken external links:', brokenExternal);
  if (brokenInternal.length > 0) console.error('Broken internal links:', brokenInternal);

  // Return internal broken links for assertion in test
  return brokenInternal;
}

async logout() {
       
    }

}
module.exports = { HomePage };
