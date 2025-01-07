import { expect, test } from "@playwright/test";

test("homepage", async ({ page }) => {
  // Act
  await page.goto("/");

  // Assert
  const main = page.getByRole("main");
  await expect(main).toBeVisible();
  await expect(main).toContainText("Get started");

  const footer = page.getByRole("contentinfo");
  await expect(footer).toBeVisible();

  const footerLinks = page.locator("footer a");
  await expect(footerLinks).toHaveCount(3);
});
