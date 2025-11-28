import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

//#region namen naar de verschillende webpagina's
   //  "index": "index",
   //  "about_us": "a-leerbedrijf/about-us",
   //  "geautomatiseerde_test": "a-leerbedrijf/geautomatiseerde-test",
   //  "onboarding": "a-leerbedrijf/onboarding",
   //  "openingen": "a-leerbedrijf/openingen",
   //  "basic_webtesting_met_playwright": "b-educatief/basic-webtesting-met-playwright",
   //  "dossier_ai": "b-educatief/dossier-ai",
   //  "instructievideo_codegen": "b-educatief/instructievideo-codegen",
   //  "onboardingdoelen": "b-educatief/onboardingdoelen",
   //  "probleemoplossend": "b-educatief/probleemoplossend",
   //  "vaktermen": "b-educatief/vaktermen",
   //  "certificaten": "c-baanperspectief/certificaten",
   //  "cv": "c-baanperspectief/cv",
   //  "ict_beroepen_in_beeld": "c-baanperspectief/ict-beroepen-in-beeld",
   //  "jobsearch": "c-baanperspectief/jobsearch",
   //  "kansen_op_de_arbeidsmarkt": "c-baanperspectief/kansen-op-de-arbeidsmarkt",
   //  "custom_browser": "d-portfolio/custom-browser",
   //  "istqb": "d-portfolio/istqb",
   //  "portfolioprojecten": "d-portfolio/portfolioprojecten",
   //  "subreddit": "d-portfolio/subreddit"
//#endregion

// hier stel je de grootte van het browserscherm (viewport)
test.use( { viewport: { width: 1833, height: 980 } } );
test( 'Go to any page', async ( { page } ) => {

   let naam = 'c-baanperspectief/certificaten';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click(  );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Educatief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Templates', exact: true } ).click(  );
   await page.getByRole( 'link', { name: 'Leerbedrijf' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Portfolio' } ).click( );
   await page.getByRole( 'link', { name: 'Baanperspectief' } ).click( { delay: 1000 } );
   await page.getByRole( 'link', { name: 'Home' } ).click( { delay: 1000 } );


} )