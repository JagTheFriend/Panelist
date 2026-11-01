import { expect, test } from "@playwright/test";

test.describe("legal pages", () => {
  test("privacy policy is public, canonical, and structured", async ({
    page,
  }) => {
    await page.goto("/privacy");

    await expect(
      page.getByRole("heading", { name: "Privacy Policy", exact: true }),
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/privacy$/,
    );
    await expect(
      page.getByRole("link", { name: "Terms of Service", exact: true }).first(),
    ).toBeVisible();

    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .first()
      .textContent();
    expect(jsonLd).toContain('"@type":"WebPage"');
    expect(jsonLd).toContain('"dateModified":"2026-11-01"');
  });

  test("terms of service is public and canonical", async ({ page }) => {
    await page.goto("/terms-of-service");

    await expect(
      page.getByRole("heading", { name: "Terms of Service", exact: true }),
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /\/terms-of-service$/,
    );
    await expect(
      page.getByRole("link", { name: "Privacy Policy", exact: true }).first(),
    ).toBeVisible();
  });

  test("the /privace typo redirects to the privacy policy", async ({
    page,
  }) => {
    await page.goto("/privace");

    await expect(page).toHaveURL(/\/privacy$/);
    await expect(
      page.getByRole("heading", { name: "Privacy Policy", exact: true }),
    ).toBeVisible();
  });

  test("the landing footer links to both policies", async ({ page }) => {
    await page.goto("/");

    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link", { name: "Privacy" })).toHaveAttribute(
      "href",
      "/privacy",
    );
    await expect(footer.getByRole("link", { name: "Terms" })).toHaveAttribute(
      "href",
      "/terms-of-service",
    );
  });

  test("the sign-in screen discloses both policies", async ({ page }) => {
    await page.goto("/join");

    const main = page.getByRole("main");
    await expect(
      main.getByRole("link", { name: "Terms of Service", exact: true }),
    ).toHaveAttribute("href", "/terms-of-service");
    await expect(
      main.getByRole("link", { name: "Privacy Policy", exact: true }),
    ).toHaveAttribute("href", "/privacy");
  });

  test("the sitemap lists both policies", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBe(true);

    const body = await response.text();
    expect(body).toContain("/privacy");
    expect(body).toContain("/terms-of-service");
  });
});
