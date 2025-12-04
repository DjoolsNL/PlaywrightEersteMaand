import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

//test.use( { viewport: { width: 800, height: 1040 } } );
test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );  
   await page.getByRole('button', { name: 'Weiger' }).click();
   await page.getByRole('button', { name: 'Kerstcollectie' }).click();
   await page.getByRole('link', { name: 'Kersttextiel' }).click();
   await page.getByRole('link', { name: 'Rood vierkant kussen met' }).click();
   await page.getByLabel('Selecteer productfoto 3 van 4').click();
   await page.getByLabel('Selecteer productfoto 4 van 4').click();
   await page.getByRole('button', { name: 'Productinformatie' }).click();
   await page.getByRole('button', { name: 'Goed om te weten' }).click();
   await page.locator('.pipf-modal-wrapper__backdrop').click();
   await page.getByLabel('Hoeveelheid verhogen').click();
   await page.getByRole('button', { name: 'Voeg toe aan winkelwagen' }).click();
   await page.locator('#complete-with__quantity-selection').selectOption('2');
   await page.getByLabel('Voeg 4 items toe aan').click();
   await page.getByRole('button', { name: 'Ga naar winkelwagen' }).click();
} )

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






