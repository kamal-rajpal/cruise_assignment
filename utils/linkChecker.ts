import { request } from '@playwright/test';

/**
 * Checks if a URL is broken
 */
export async function isLinkBroken(url: string): Promise<boolean> {
  try {
    const context = await request.newContext(); // await the context first
    const response = await context.get(url, { timeout: 10000 });
    await context.dispose(); // clean up context

    return response.status() >= 400;
  } catch (error) {
    return true; // treat network errors as broken
  }
}
