import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fileNames from '../htmlfile_names.json';
import {Topmenu} from '../pages/topmenu';
test.use({ viewport: { width: 1920, height: 1080 } });

// schrijf je eigen toelichtingen bij de coderegels

test( 'Go to any page', async ( { page } ) => {
   const topmenu = new Topmenu(page)
   await goTo( fileNames.istqb );
   // await goTo( fileNames.index );
   // await goTo( fileNames.subreddit );

   async function goTo ( fileName: string ) {
      let filePath = path.resolve( `test website/html/${fileName}.html` );
      const fileUrl = `file://${filePath}`;

      await page.goto( fileUrl );
   }

   // // class Topmenu in actie
   await topmenu.educatief.click( { delay: 1000 } );
   await topmenu.templates.click( { delay: 1000 } );
   await topmenu.leerbedrijf.click( { delay: 1000 } );
   await topmenu.portfolio.click( { delay: 1000 } ); 
   await topmenu.baanperspectief.click( { delay: 1000 } );
   await topmenu.home.click( { delay: 1000 } );
   
   // // en dezelfde reeks clicks zonder de class
   await page.getByRole('link', { name: 'Educatief' }).click( { delay: 1000 } );
   await page.getByRole('link', { name: 'Templates', exact: true }).click( { delay: 1000 } );
   await page.getByRole('link', { name: 'Leerbedrijf' }).click( { delay: 1000 } );
   await page.getByRole('link', { name: 'Portfolio' }).click( { delay: 1000 } );
   await page.getByRole('link', { name: 'Baanperspectief' }).click( { delay: 1000 } );
   await page.getByRole('link', { name: 'Home' }).click( { delay: 1000 } );
   
   // // class Topmenu in actie
   await topmenu.educatief.click( { delay: 1000 } );
   await topmenu.templates.click( { delay: 1000 } );
   await topmenu.leerbedrijf.click( { delay: 1000 } );
   await topmenu.portfolio.click( { delay: 1000 } ); 
   await topmenu.baanperspectief.click( { delay: 1000 } );
   await topmenu.home.click( { delay: 1000 } );
} )