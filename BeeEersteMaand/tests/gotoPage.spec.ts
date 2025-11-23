import { test, expect, request } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import  pages from '../pageNames.json';

test( 'Go to any page', async ( { page } ) => {
    async function goTo ( fileName: string ) {
        let filePath = path.resolve( `test website/html/${fileName}.html` );
        const fileUrl = `file://${filePath}`;

        // Navigate to the local file
        await page.goto( fileUrl );
    }

    // use variable pages to pick the page you want to go to
    await goTo( pages.istqb );
    await goTo( pages.index );
    await goTo( pages.subreddit );
} )