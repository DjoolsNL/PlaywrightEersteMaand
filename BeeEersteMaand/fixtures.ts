
// fixtures.ts
import { test as base, expect, type Locator, type Page } from '@playwright/test';

class Menu {
     home: Locator;
     leerbedrijf: Locator;
     educatief: Locator;
     baanperspectief: Locator;
     portfolio: Locator;
     templates: Locator;
  constructor(private page: Page) {
      this.page = page;
      this.home = page.getByRole('link', { name: 'Home' });
      this.leerbedrijf = page.getByRole('link', { name: 'Leerbedrijf' });
      this.educatief = page.getByRole('link', { name: 'Educatief' });
      this.baanperspectief = page.getByRole('link', { name: 'Baanperspectief' });
      this.portfolio = page.getByRole('link', { name: 'Portfolio' });
      this.templates = page.getByRole('link', { name: 'Templates', exact: true });
  }



  toastMessage() {
    return this.page.getByRole('status');
  }
}

export const test = base.extend<{ menu: Menu }>({
  menu: async ({ page }, use) => {
    const menu = new Menu(page);
    await use(menu);
  },
});


