import { test } from "@playwright/test";


test.describe('Window', () => {
    test.beforeEach(({ page }) => {
        page.goto('https://www.wspparkstad.nl/');
 
        page.on('pageerror', (err) => {
            // hier false retourneren voorkomt dat Playwright
            // de test faalt
            console.error('Uncaught exception:', err);
            return false
        });
    })

    test('get the global window object', async ({ page }) => {
        await page.getByRole('button', { name: 'Alles accepteren' }).click();
        await page.getByRole('link', { name: 'voor werkzoekenden' }).click();
        await page.getByRole('link', { name: 'Vacatures' }).click();
        
    })
    
})