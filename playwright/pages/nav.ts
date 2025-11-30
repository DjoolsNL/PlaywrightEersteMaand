import { test, Page, Locator } from '@playwright/test';

export class Nav {
   page: Page;
   home: Locator;
   leerbedrijf: Locator;
   educatief: Locator;
   baanperspectief: Locator;
   portfolio: Locator;
   templates: Locator;

   constructor(page: Page){
      this.page = page;
      this.home = page.getByRole('link', { name: 'Home' });
      this.leerbedrijf = page.getByRole('link', { name: 'Leerbedrijf' });
      this.educatief = page.getByRole('link', { name: 'Educatief' });
      this.baanperspectief = page.getByRole('link', { name: 'Baanperspectief' });
      this.portfolio = page.getByRole('link', { name: 'Portfolio' });
      this.templates = page.getByRole('link', { name: 'Templates', exact: true });
   }

   ToAnyLink(): void {
   }
}