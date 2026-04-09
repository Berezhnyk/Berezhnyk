import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE_URL = 'http://localhost:3005'; 
const pagesToAudit = [
  '/',
  '/apps',
  '/github',
  '/resume',
];

for (const url of pagesToAudit) {
  test(`Accessibility audit for ${url}`, async ({ page }) => {
    await page.goto(`${BASE_URL}${url}`);
    // Wait for potential hydration or animations
    await page.waitForLoadState('networkidle');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
}
