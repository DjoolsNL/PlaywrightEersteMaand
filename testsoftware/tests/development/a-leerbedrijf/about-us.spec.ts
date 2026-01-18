import { test, expect, request } from '@playwright/test';
import path from 'path';

//test.use( { viewport: { width: 1833, height: 980 } } );
test( 'page about-us', async ( { page } ) => {
   let naam = 'a-leerbedrijf/about-us';
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;

   await page.goto( fileUrl );

   const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0"); 
const day = String(now.getDate()).padStart(2, "0");       

const hour = String(now.getTime);
const dateString = `${year}-${month}-${day} : ${hour}`;

console.log(dateString); // e.g. "2026-01-16"


const nnow = (): string => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");

  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} `
       + `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
};

console.log(nnow);

})