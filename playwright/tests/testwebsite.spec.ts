import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

// stelt de grootte van het browserscherm (viewport)
test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Verify links Leerbedrijf and Educatief', async ( { page } ) => {

   let naam = 'index';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 1000;
   // hightlight de plek waar geklikt wordt zodat we dat goed kunnen observeren
   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.getByRole( 'link', { name: 'Testautomation' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.getByRole( 'link', { name: 'Opportunities' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );
   
   await page.getByRole( 'link', { name: 'De rol van testen' } ).highlight();
   await page.getByRole( 'link', { name: 'De rol van testen' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Onboarding skills en' } ).highlight();
   await page.getByRole( 'link', { name: 'Onboarding skills en' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Basics webtesten met' } ).highlight();
   await page.getByRole( 'link', { name: 'Basics webtesten met' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Probleemoplossend vermogen' } ).highlight();
   await page.getByRole( 'link', { name: 'Probleemoplossend vermogen' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Dossier AI' } ).highlight();
   await page.getByRole( 'link', { name: 'Dossier AI' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Werken met codegen' } ).highlight();
   await page.getByRole( 'link', { name: 'Werken met codegen' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Enkele vaktermen' } ).highlight();
   await page.getByRole( 'link', { name: 'Enkele vaktermen' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Baanperspectief' } ).highlight();
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: wachttijd } );
} )