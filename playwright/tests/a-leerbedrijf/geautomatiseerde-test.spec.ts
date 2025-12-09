import { test, expect, request } from '@playwright/test';
import path from 'path';

test.use( { viewport: { width: 1833, height: 980 } } );
test( 'page geautomatiseerde-test', async ( { page } ) => {
   let naam = 'a-leerbedrijf/geautomatiseerde-test';
   // path.resolve zorgt ervoor dat de file op jouw lokale machine gevonden kan worden 
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   // navigeert naar de url
   await page.goto( fileUrl );

})