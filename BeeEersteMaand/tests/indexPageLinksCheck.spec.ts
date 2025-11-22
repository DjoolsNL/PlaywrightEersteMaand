import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

test( 'Check all links ', async ( { page } ) => {

  function isHttpUrl ( href: string ) {
  return href.startsWith( '/' ) || href.startsWith( 'http://' ) || href.startsWith( 'https://' );
  }
  async function checkLinks ( fileName: string ) {
    let filePath = path.resolve( `C:./test website/html/${fileName}.html` );
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

  await checkLinks('/c-baanperspectief/kansen op de arbeidsmarkt');
  await checkLinks('index');
  await checkLinks('/b-educatief/probleemoplossend');
  await checkLinks('/c-baanperspectief/jobsearch');
  

} );

