import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fileNames from '../../htmlfile_names.json';
test.use({ viewport: { width: 1920, height: 1080 } });

test( 'Validate all links - run with trace viewer to see results of checks', async ( { page } ) => {
   for ( const name of Object.values( fileNames ) ) {
      await checkLinks( name );
   }

   function isHttpUrl ( href: string ) {
      return href.startsWith( '/' ) || href.startsWith( 'http://' ) || href.startsWith( 'https://' );
   }
   async function checkLinks ( fileName: string ) {
      let filePath = path.resolve( `test website/html/${fileName}.html` );
      const fileUrl = `file://${filePath}`;

      // Navigate to the local file
      await page.goto( fileUrl );

      // Collect hrefs from <a> elements
      const hrefs = await page.locator( 'a' ).evaluateAll( nodes =>
         nodes
            .map( n => n.getAttribute( 'href' ) )
            .filter( Boolean ) as string[]
      );

      // Filter out non-HTTP links (mailto:, tel:, javascript:, #anchors)
      const filtered = hrefs.filter( h =>
         isHttpUrl( h ) && !h.startsWith( '#' ) && !h.startsWith( 'javascript:' )
      );

      // Resolve relative URLs against the current page
      const base = new URL( page.url() );
      const urls = filtered.map( h => new URL( h, base ).toString() );

      // Optional: de-duplicate
      const unique = Array.from( new Set( urls ) );

      // Batch requests to avoid rate-limiting
      const BATCH = 10;
      const failures: string[] = [];

      for ( let i = 0; i < unique.length; i += BATCH ) {
         const slice = unique.slice( i, i + BATCH );

         const results = await Promise.allSettled(
            slice.map( u => page.request.get( u, { timeout: 15_000, failOnStatusCode: false } ) )
         );

         results.forEach( ( res, idx ) => {
            const target = slice[ idx ];
            if ( res.status !== 'fulfilled' ) {
               failures.push( `${target} → network error: ${String( res.reason )}` );
               return;
            }
            const status = res.value.status();
            if ( status < 200 || status >= 400 ) {
               failures.push( `${target} → HTTP ${status}` );
            }
         } );
      }

      // Report
      if ( failures.length ) {
         console.error( 'Broken links:\n' + failures.join( '\n' ) );
      }
      expect( failures, 'Some links returned non-2xx/3xx' ).toHaveLength( 0 );
   }


} );

test( 'Validate links on certain pages - run with trace viewer to see results of checks', async ( { page } ) => {
   await checkLinks( fileNames.index );
   //await checkLinks( pages.kansen_op_de_arbeidsmarkt );
   // await checkLinks( pages.probleemoplossend );
   // await checkLinks( pages.dossier_ai );
   // await checkLinks( pages.jobsearch );
   // await checkLinks( pages.subreddit );
   
   function isHttpUrl ( href: string ) {
      return href.startsWith( '/' ) || href.startsWith( 'http://' ) || href.startsWith( 'https://' );
   }
   async function checkLinks ( fileName: string ) {
      let filePath = path.resolve( `test website/html/${fileName}.html` );
      const fileUrl = `file://${filePath}`;

      // Navigate to the local file
      await page.goto( fileUrl );

      // Collect hrefs from all <a> elements on page
      const hrefs = await page.locator( 'a' ).evaluateAll( nodes =>
         nodes
            .map( n => n.getAttribute( 'href' ) )
            .filter( Boolean ) as string[]
      );

      // Filter out non-HTTP links (mailto:, tel:, javascript:, #anchors)
      const filtered = hrefs.filter( h =>
         isHttpUrl( h ) && !h.startsWith( '#' ) && !h.startsWith( 'javascript:' )
      );

      // Resolve relative URLs against the current page
      const base = new URL( page.url() );
      const urls = filtered.map( h => new URL( h, base ).toString() );

      // Optional: de-duplicate
      const unique = Array.from( new Set( urls ) );

      // Batch requests to avoid rate-limiting
      const BATCH = 10;
      const failures: string[] = [];

      for ( let i = 0; i < unique.length; i += BATCH ) {
         const slice = unique.slice( i, i + BATCH );

         const results = await Promise.allSettled(
            slice.map( u => page.request.get( u, { timeout: 15_000, failOnStatusCode: false } ) )
         );

         results.forEach( ( res, idx ) => {
            const target = slice[ idx ];
            if ( res.status !== 'fulfilled' ) {
               failures.push( `${target} → network error: ${String( res.reason )}` );
               return;
            }
            const status = res.value.status();
            if ( status < 200 || status >= 400 ) {
               failures.push( `${target} → HTTP ${status}` );
            }
         } );
      }

      // Report
      if ( failures.length ) {
         console.error( 'Broken links:\n' + failures.join( '\n' ) );
      }
      expect( failures, 'Some links returned non-2xx/3xx' ).toHaveLength( 0 );
   }
} );

