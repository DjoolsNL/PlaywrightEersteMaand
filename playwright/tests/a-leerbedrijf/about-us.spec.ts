import { test, expect, request } from '@playwright/test';
import path from 'path';

test.use( { viewport: { width: 1833, height: 980 } } );
test( 'page about-us', async ( { page } ) => {
   let naam = 'a-leerbedrijf/about-us';
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   await page.goto( fileUrl );

})