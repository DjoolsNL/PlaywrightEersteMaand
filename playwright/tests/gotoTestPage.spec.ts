import { test, expect, request } from '@playwright/test';
import path from 'path';

// schrijf je eigen toelichtingen bij de coderegels

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