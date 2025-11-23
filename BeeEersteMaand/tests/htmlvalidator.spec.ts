import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test( 'Check all links ', async ( { page } ) => {
   await page.goto( "https://validator.w3.org/" );

   await page.getByRole( 'link', { name: 'Validate by Direct Input' } ).click();
   await page.getByLabel( 'Enter the Markup to validate' ).click();

} )