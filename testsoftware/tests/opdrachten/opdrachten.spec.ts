// How to go about these exercises? 
// Copy this file and paste it in the folder 'opdrachten'. Give it
// a name like my-opdrachten.spec.ts. This copy is the file you use for completing the exercises
// Use as much from the original code as you like.


import { test, expect, request } from '@playwright/test';
import path from 'path';

test.use( { viewport: { width: 1833, height: 980 } } );

///////////////////////////////////////////////////////////////////////
// With Codegen                                                      //
///////////////////////////////////////////////////////////////////////
test( 'Exercise with codegen: go to NOS.nl', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );
   // Instructions: script a flow that jumps from 'laatste nieuws' to ' videos' to top video in list of videos.

} )

test( 'Exercise with codegen: go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );  
   await page.getByRole('button', { name: 'Weiger' }).click();

   // Instructions: script the flow to the webpage of the ikea shop in  Heerlen.

} )

test( 'Exercise with codegen: go to Wikipedia.com', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );
   await page.getByLabel('Search Wikipedia').click();
   await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('playwright');
   await page.getByRole('link', { name: 'Playwright (software) End-to-' }).click();

   // Instructions: script a flow within wikipedia to the article about 'w3.org' and 
   // navigate to the w3.org website by using the link
   // in 'external links' of the article.

} )

test( 'Exercise with codegen: go to Playwright', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );
   // Instructions: script de flow to 'docs' and from there to 'Test Generator'. 
   // Bookmark the Test Generator page and read it. 

} )

test( 'Exercise with codegen: go to Tempoteam', async ( { page } ) => {
   await page.goto( 'https://tempoteam.nl/' );
   // Instructions: script a flow to the current IT vacancies

} )

test( 'Exercise with codegen: go to vs-code', async ( { page } ) => {
   await page.goto( 'https://code.visualstudio.com/' );
   // Instructions: script a flow to Get Started / vs-code Tutorial
   // btw bookmark this link. 

} )

///////////////////////////////////////////////////////////////////////
// No codegen allowed, flows should use different locators this time //
///////////////////////////////////////////////////////////////////////
test( 'Exercise without codegen: go to NOS.nl', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );
   // Instructions: script a flow that jumps from 'laatste nieuws' to ' videos' to top video in list of videos.

} )

test( 'Exercise without codegen: go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );  
   await page.getByRole('button', { name: 'Weiger' }).click();
   // Instructions: script the flow to the webpage of the ikea shop in  Heerlen.

} )

test( 'Exercise without codegen: go to Wikipedia.com', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );
   await page.getByLabel('Search Wikipedia').click();
   await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('playwright');
   await page.getByRole('link', { name: 'Playwright (software) End-to-' }).click();
   // Instructions: script a flow within wikipedia to the article about 'w3.org' and 
   // navigate to the w3.org website by using the link
   // in 'external links' of the article.

} )

test( 'Exercise without codegen: go to Playwright', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );
   // Instructions: script de flow to 'docs' and from there to 'Test Generator'. 

} )

test( 'Exercise without codegen: go to Tempoteam', async ( { page } ) => {
   await page.goto( 'https://tempoteam.nl/' );
   // Instructions: script a flow to the current IT vacancies

} )   