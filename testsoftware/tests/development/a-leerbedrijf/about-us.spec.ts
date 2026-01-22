import { test, expect, request } from '@playwright/test';
import path from 'path';

//test.use( { viewport: { width: 1833, height: 980 } } );
test( 'page about-us', async ( { page } ) => {
   let naam = 'a-leerbedrijf/about-us';
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   await page.goto( fileUrl );

   // onderstaand een stukje normaal typescript dat in een test of testfile gebruikt kan worden 
   const now = new Date();

   const year: number = now.getFullYear();
   const month: string = String(now.getMonth() + 1).padStart(2, "0");
   const day: string = String(now.getDate()).padStart(2, "0");

   const hours: string = String(now.getHours()).padStart(2, "0");
   const minutes: string = String(now.getMinutes()).padStart(2, "0");
   const seconds: string = String(now.getSeconds()).padStart(2, "0");

   const dateTime: string = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

   console.log("datum: ", dateTime);
// aaasdfg


})