import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fileNames from '../../htmlfile_names.json';
test.use({ viewport: { width: 1920, height: 1080 } });

test( 'Validate html', async ( { page } ) => {
   // name htmlfile goes here
   await goTo(fileNames.index);

   async function goTo ( fileName: string ) {
      let filePath = path.resolve( `testwebsite/html-css/${fileName}.html` );
      const fileUrl = `file://${filePath}`;

      await page.goto( fileUrl );
      const htmlContent = await page.content();

      // Send the HTML content to the W3C validator API via a POST request
      const response = await page.request.post( 'https://validator.w3.org/nu/', {
         headers: {
            'Content-Type': 'text/html; charset=utf-8',
         },
         data: htmlContent
      } );

      // Check that the API request was successful (status 200)
      expect( response.ok() ).toBeTruthy();

      // html komt als buffer
      const jsonResponse = await response.body();

      console.log( jsonResponse.toString() );
   }
} )