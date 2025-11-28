import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to any page 1', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );

} )

test( 'Go to any page 2', async ( { page } ) => {
   await page.goto( 'https://www.w3schools.com/' );

} )

test( 'Go to any page 3', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );

} )

test( 'Go to any page 4', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );

} )

test( 'Go to any page 5', async ( { page } ) => {
   await page.goto( 'https://www.buienradar.nl/nederland/neerslag/buienradar' );

} )