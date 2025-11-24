import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import pages from '../pageNames.json';

test( 'Validate html', async ( { page } ) => {
   async function goTo ( fileName: string ) {
      let filePath = path.resolve( `test website/html/${fileName}.html` );
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

   await goTo(pages.index);






} )