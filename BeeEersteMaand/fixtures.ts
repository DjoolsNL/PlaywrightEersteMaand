import { test as base, expect, type Locator, type Page } from '@playwright/test';
import { Menu } from './pages/menu'

export const test = base.extend<{ menu: Menu }>( {
   menu: async ( { page }, use ) => {
      const menu = new Menu( page );
      await use( menu );
   },
} );


