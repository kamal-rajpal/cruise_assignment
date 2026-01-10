import { Page, Locator, FrameLocator,test, expect } from '@playwright/test';

export class LoginPage {
  page: Page;
  loginDialog: Locator;
  loginFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.loginDialog = page.getByRole('dialog', { name: 'Logout' });
    this.loginFrame = this.loginDialog.frameLocator('iframe');
  }

  async login(username: string, password: string): Promise<void> {
    await expect(
      this.loginFrame.getByRole('heading', { name: 'Log in' })
    ).toBeVisible();

    await this.loginFrame
      .getByRole('textbox', { name: /Enter your login ID/i })
      .fill(username);

    await this.loginFrame
      .getByRole('textbox', { name: /enter your password/i })
      .fill(password);

    await this.loginFrame
      .getByRole('button', { name: 'LOG IN' })
      .click();

    await expect(
      this.page.getByRole('button', { name: /Manage booking/i })
    ).toBeVisible();
  }
}

module.exports = { LoginPage };



