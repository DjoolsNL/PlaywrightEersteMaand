import { test } from "@playwright/test";


test.describe('Bezoek de website die je een plattegrond toont van testen in de IT', () => {
    
    
        test.beforeEach(async ({ page }) => {
            // Dit wordt vóór elke test uitgevoerd.
            await page.goto("https://roadmap.sh/qa");
           
            page.on('pageerror', (err) => {
                // hier false retourneren voorkomt dat Playwright
                // de test faalt
                console.error('Uncaught exception:', err);
                return false
            });
        })
        
        test('Ontdek meer over het vak van testen', async ({page}) => {
            await page.waitForTimeout(2000);
        })
    })
