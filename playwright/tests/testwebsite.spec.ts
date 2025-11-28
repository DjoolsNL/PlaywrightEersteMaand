import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

// hier stel je de grootte van het browserscherm (viewport)
test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to indexpage of testwebsite', async ( { page } ) => {

   let naam = 'c-baanperspectief/certificaten';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 500;
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   for (let index = 0; index < 20; index++) {
      console.log('auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa auwa ');      
   }
} )

test( 'template for a test', async ( { page } ) => {

   let naam = 'c-baanperspectief/certificaten';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 500;
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: wachttijd } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: wachttijd } );

   await page.getByRole('link', { name: 'About us', exact: true }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Onboarding the team' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Testautomation' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Opportunities' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Wat bieden we' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Wat ga je doen?' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Educatief' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Onboarding skills en' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Basics webtesten met' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Probleemoplossend vermogen' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'De saaiste boekhouders hebben' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Instrumenteel gebruik' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Technieken' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Wat je moet zien te vermijden' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Dossier AI' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Werken met codegen' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Enkele vaktermen' }).click( { delay: wachttijd } );
   await page.getByText('CSS', { exact: true }).click( { delay: wachttijd } );
   await page.getByText('Flaky vs robust testcode').click( { delay: wachttijd } );
   await page.getByText('Manual testing').click( { delay: wachttijd } );
   await page.getByText('Third party').click( { delay: wachttijd } );
   await page.getByText('Test suite').click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Test failures' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'All-time failures' }).click( { delay: wachttijd } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: wachttijd } );
   await page.getByRole('heading', { name: 'Baanperspectief' }).click( { delay: wachttijd } );

} )