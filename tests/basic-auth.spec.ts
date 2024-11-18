import { test, expect } from '@playwright/test';

// Define a fixture for Basic Auth credentials
test.use({
  httpCredentials: {
    username: 'admin',
    password: 'admin',
  },
});

test('Automate Basic Auth page', async ({ page }) => {
  // Navigate to the Basic Auth page
  await page.goto('/basic_auth');

  // Verify that authentication is successful
  const successMessage = await page.locator('body').textContent();
  expect(successMessage).toContain('Congratulations! You must have the proper credentials.');
});