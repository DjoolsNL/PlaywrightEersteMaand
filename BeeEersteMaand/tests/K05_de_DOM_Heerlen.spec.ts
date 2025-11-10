import { test } from '@playwright/test';

// ---------------------------------------------------------------------
//    De DOM -- interactie tussen cypress script en browser via de DOM
// ---------------------------------------------------------------------
// Elke page.locator(), page.$(), page.$$() kijkt in het object dat alle data van de webpagina
// bevat. Dit object heet de DOM. In de DOM zit de hele webpagina
// en met page.locator(), page.$(), page.$$() kunnen we binnen de DOM zoeken en selecteren

test.describe('Oefenen met de DOM', () => {

    test('1. Gemeente Heerlen', async ({page}) => {

        await page.goto('https://www.heerlen.nl');
        await page.waitForLoadState('networkidle'); // wacht tot netwerkoproepen zijn voltooid
        await page.getByRole('button', { name: 'Accepteer alle cookies' }).click();   
    })
})