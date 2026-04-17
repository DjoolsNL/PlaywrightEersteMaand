import { test, expect, request, Locator } from '@playwright/test';
import path from 'path';

test.beforeEach( 'Go to indexpage', async ( { page } ) => {
   let naam = 'duck';
   let filePath = path.resolve( `testwebsite/html-css/${naam}.html` );
   const fileUrl = `file://${filePath}`;
   await page.goto( fileUrl );
} )

test.use( { viewport: { width: 1833, height: 980 } } );

test( '0.0.0 - Visit DuckAI', async ( { page } ) => {
   // Als geen referentiefoto aanwezig is gaat de test fout. In de volgende run 
   // wordt het snapshot van de foutgelopen test als referentie snapshot gebruikt.
   // Verandert de UI dan dien je de referentie te verwijderen.
   // Run de test, hij loopt fout want geen referentie. Run hem nog eens en hij 
   // loopt goed.
   await expect( page ).toHaveScreenshot( 'image.png' );
} )

