import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

//test.use( { viewport: { width: 800, height: 1040 } } );
test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to NOS.nl', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );
} )

test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to UWV.nl', async ( { page } ) => {
   const wachttijd: number = 800;
   await page.goto( 'https://www.uwv.nl/' );
   await page.waitForTimeout( 1000 );
   await page.getByLabel( 'Alles accepteren' ).highlight();
   await page.waitForTimeout( 1000 );
   await page.getByLabel( 'Alles accepteren' ).click( { delay: wachttijd } );
} )

test( 'Go to Wikipedia.com', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );
} )

test( 'Go to Playwright', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );
} )

test( 'Go to Tempoteam', async ( { page } ) => {
   await page.goto( 'https://tempoteam.nl/' );
} )

test( 'Go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );
   await page.getByRole( 'button', { name: 'Accepteer' } ).click();
   await page.getByRole( 'tab', { name: 'Koopjes' } ).click();
} )