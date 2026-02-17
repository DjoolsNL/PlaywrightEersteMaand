
import { test, expect, request } from '@playwright/test';
import path from 'node:path';
import { localIndexFile, Index } from '../../pages/index'

// Adjust width and height of the browser to fit your local machine's display resolution (viewport). 
test.use( { viewport: { width: 1833, height: 980 } } );

test( 'Pages from the testwebsite that help you understand testautomation', async ( { page } ) => {
   await page.goto( localIndexFile() );

   await page.getByRole( 'link', { name: 'Testautomation' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Opportunities' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Werken met codegen' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Enkele vaktermen' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Onboarding skills en' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Basics webtesten met' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Templates aanpak en' } ).click();
   await page.getByRole( 'link', { name: 'Home' } ).click();
} )