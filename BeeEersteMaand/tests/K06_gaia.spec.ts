import { test } from '@playwright/test';

// ---------------------------------------------------------------------
//    E2E -- End-to-end
// ---------------------------------------------------------------------
// Het doel van e2e tests is om een webservice/website te gebruiken zoals een user/consument
// dat zou doen. In het geval van onze opdrachtgever betekent het dat we de
// software applicatie gebruiken alsof we zelf de garagehouder zijn die gebruik
// maakt van de applicatie.
// We testen zgn userscenario's:
// kan de user een vehicle aanmaken?
// kan de user een werkorder voor dit vehicle inboeken?
// Etc. Elk userscenario van stap 1 tot stap laatst scripten we
// in de testfile die dit userscenario moet uitvoeren en testen
// hieronder zie je een eenvoudig userscenario uitgewerkt.
// kan de inwoner van Heerlen op de site Heerlen.nl info vinden over
// de collectieve zorgverzekering?
// Je kunt je wel voorstellen dat voor een site als Heerlen.nl nog tientallen(of zelfs honderden)
// andere userscenario's nodig zijn om de werking van de site goed te kunnen testen

test.describe('We zoeken de mogelijkheid om een dier te adopteren', () => {
    
    test('Bezoek de hoofdpagina', async ({ page }) => {
        // dit gaan we echt niet toelichten. dit moet je zelf maar uitvogelen 
        await page.goto('https://www.gaiazoo.nl/?s=adoptie');
        await page.waitForTimeout(100);
        await page.locator('#CybotCookiebotDialogBodyLevelButtonAccept').click();
        await page.locator('body').click({ force: true });
        await page.evaluate(() => {
            window.scrollTo(0, 5000); // Scrolt tot 5000 pixels naar beneden op de pagina            
        });
    })
})
