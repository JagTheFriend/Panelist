import { expect, test } from "@playwright/test";

test("the logo is served and used as the page icon", async ({
  page,
  request,
}) => {
  await page.goto("/");

  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    "/logo.svg",
  );
  await expect(page.locator('link[rel="apple-touch-icon"]')).toHaveAttribute(
    "href",
    "/apple-touch-icon.png",
  );
  await expect(
    page.locator('header img[src="/logo.svg"]').first(),
  ).toBeVisible();

  const logo = await request.get("/logo.svg");
  expect(logo.ok()).toBe(true);
  expect(logo.headers()["content-type"]).toContain("image/svg+xml");
});
