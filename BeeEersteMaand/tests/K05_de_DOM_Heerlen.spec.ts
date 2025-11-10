import { test } from '@playwright/test';

test.describe('Oefenen met de DOM', () => {

    test('1. Gemeente Heerlen', async ({page}) => {
        await page.goto('https://www.heerlen.nl');
   
    })
})