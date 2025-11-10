import { test } from '@playwright/test';

// ---------------------------------------------------------------------
//    De DOM -- interactie tussen cypress script en browser via de DOM
// ---------------------------------------------------------------------
// Elke page.locator() in playwright kijkt in het object dat alle data van de webpagina
// bevat. Dit object heet de DOM. In de DOM zit de hele webpagina
// en met page.locator() kunnen we binnen de DOM zoeken en selecteren

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// nog ergens een plek geven: blijf met de cursor uit het testvenster want anders
// verstoor je de test
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

test.describe('Oefenen met de DOM', () => {

    test.beforeEach(async ({ page }) => {
        // Dit wordt vóór elke test uitgevoerd.
           
        page.on('pageerror', (err) => {
        // returning false here prevents Playwright from
        // failing the test
        console.error('Uncaught exception:', err);            
        return false
    });
    });
    
    test('1. Buienradar', async ({page}) => {
        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        await page.goto('https://www.buienradar.nl');
        //await page.locator('span:has-text("Alles accepteren")').click({ force: true });
        await page.waitForTimeout(3000);

        // Altijd hetzelfde... page.locator() bevraagt de DOM en in dit geval
        // wordt gezocht naar een element met een id die de waarde 
        // 'onetrust-pc-btn-handler' heeft. 

    }) 
})