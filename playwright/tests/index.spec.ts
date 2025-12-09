import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

// stelt de grootte van het browserscherm (viewport)
test.use( { viewport: { width: 1833, height: 980 } } );
test( '1. Verify text links Leerbedrijf', async ( { page } ) => {

   let naampagina = 'index';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naampagina}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 2000;
   // hightlight de plek waar geklikt wordt zodat we dat goed kunnen observeren
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.getByRole( 'link', { name: 'Testautomation' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.getByRole( 'link', { name: 'Opportunities' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'De rol van testen' } ).highlight();
   await page.getByRole( 'link', { name: 'De rol van testen' } ).click( { delay: wachttijd } );

   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).highlight();
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: wachttijd } );

} )

test( '2. Verify text links Educatief', async ( { page } ) => {

   let naam = 'index';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 2000;
   // hightlight de plek waar geklikt wordt zodat we dat goed kunnen observeren
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

   await page.getByRole( 'link', { name: 'Educatief' } ).highlight();
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: wachttijd } );
} )

test( '3. Verify text links Baanperspectief', async ( { page } ) => {

   let naam = 'index';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   const wachttijd: number = 2000;
   // hightlight de plek waar geklikt wordt zodat we dat goed kunnen observeren
   await page.getByRole('link', { name: 'Kansen op de arbeidsmarkt' }).highlight();
   await page.getByRole('link', { name: 'Kansen op de arbeidsmarkt' }).click( { delay: wachttijd } );

   await page.getByRole('link', { name: 'Baanperspectief' }).highlight();
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Certificaten voor testers' }).highlight();
   await page.getByRole('link', { name: 'Certificaten voor testers' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Baanperspectief' }).highlight();
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'UWV ICT-beroepen in beeld' }).highlight();
   await page.getByRole('link', { name: 'UWV ICT-beroepen in beeld' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Baanperspectief' }).highlight();
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Job search' }).highlight();
   await page.getByRole('link', { name: 'Job search' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Baanperspectief' }).highlight();
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Je cv' }).highlight();
   await page.getByRole('link', { name: 'Je cv' }).click( { delay: wachttijd } );
   
   await page.getByRole('link', { name: 'Baanperspectief' }).highlight();
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: wachttijd } );
} )

// in test 4. testen we niet alleen de tekstlinks maar ook de imagelinks. 
test( '4. Verify text and image links Portfolio - All redundant code removed', async ( { page } ) => {
   let naam = 'index';
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   await page.goto( fileUrl );

   await page.getByRole('link', { name: 'Portfolio' }).first().click();

   // tekstlinks to contentpages
   // the names here come from the link's visible text in the browser
   await page.getByRole('link', { name: 'Templates, aanpak en' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();

   await page.getByRole('link', { name: 'Project ISTQB' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();   
   
   await page.getByRole('link', { name: 'Project Reddit' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();   
   
   await page.getByRole('link', { name: 'Project custom browser' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();   

   await page.getByRole('link', { name: 'Project websitetemplate en' }).click();

   // imagelinks to content pages
   // the names here come from the img alt attribute
   await page.getByRole('link', { name: 'portfolioprojecten' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();

   await page.getByRole('link', { name: 'istqb', exact: true }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();
   
   await page.getByRole('link', { name: 'subreddit' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();
   
   await page.getByRole('link', { name: 'custom-browser' }).click();
   await page.getByRole('link', { name: 'Portfolio' }).click();
   
   await page.getByRole('link', { name: 'index' }).click();


})
