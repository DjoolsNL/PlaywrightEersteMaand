
import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test( 'should load local HTML file', async ( { page } ) => {
   // Resolve the absolute path to your HTML file
   const filePath = path.resolve( 'C:./test website/html/index.html' );
   const fileUrl = `file://${filePath}`;

   // Navigate to the local file
   await page.goto( fileUrl );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click();
   await page.locator( 'div:nth-child(11) > .wrapmobile > div > .quicklinks > a' ).first().click();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click();
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();
   await page.getByRole( 'link', { name: 'Templates' } ).click();
   await page.locator( 'div:nth-child(3) > div:nth-child(2) > .quicklinks > a' ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();
} );
