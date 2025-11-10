import { test } from '@playwright/test';

test.describe('Oefenen met de DOM', () => {

    test('1. Gemeente Heerlen', async ({page}) => {
        await page.goto('https://www.heerlen.nl');

        await page.getByRole('button', { name: 'Accepteer alle cookies' }).click();
        await page.getByRole('link', { name: 'Verhuizen' }).click();
        await page.getByRole('link', { name: 'Bouwen en wonen' }).click();await page.getByRole('link', { name: 'Huisnummering' }).click();
        await page.getByRole('link', { name: 'Regel bij Gegevenshuis(' }).click();
















        
     
    })
})