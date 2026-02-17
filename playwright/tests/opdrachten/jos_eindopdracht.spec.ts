// How to go about these exercises? 
// Copy this file and paste it in the folder 'opdrachten'. Give it
// a name like my-opdrachten.spec.ts. This copy is the file you use for completing the exercises
// Use as much from the original code as you like.


import { test, expect, request } from '@playwright/test';
import path from 'path';
test.use( { viewport: { width: 1833, height: 980 } } );

// - Voor de eindopdracht heb ik de website van UWV gekozen
// - Ik heb de resolutie van de file opdrachten.spec.ts aangepast naar de schermresolutie van de laptop.
// - Ik heb de eerste regel van de test overgenomen uit een andere test, en aangepast waar nodig.
// - Ik heb met codegen een opname gemaakt van het accepteren van de cookies.
// - Daarna ben ik de onderdelen van het menu langsgegaan, en heb deze opgenomen met codegen.
// - De website is erg uitgebreid, dus ik heb niet alles getest in deze opdracht

// Jules 9-2-2026: Mooi gedaan Jos. 
//// Je hebt gewerkt met vscode, google en ai, codegen en playwright. 
//// Je hebt een flink script werkend gekregen, 
//// je hebt de opdracht duidelijk gedocumenteerd, 
//// De beste keuze gemaakt uit de sites van de voorbeelden. 
//// Je hebt efficient geleerd en gewerkt in de korte tijd!
//// Hier gaan we op verder bouwen!  


test( 'eindopdracht, website uwv', async ( { page } ) => {
   test.setTimeout( 120000 );
   await page.goto( 'https://www.uwv.nl/nl' );
   await page.waitForTimeout( 500 );

   //cookies accepteren
   await page.getByRole( 'button', { name: 'Alles accepteren' } ).click();

   //Ga naar menu, onderwerpen, betaaldatums
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Onderwerpen' ).getByRole( 'link', { name: 'Betaaldatums' } ).click();
   await page.waitForTimeout( 500 );

   //Ga terug naar Home
   await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, onderwerpen, inkomsten doorgeven
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Onderwerpen' ).getByRole( 'link', { name: 'Inkomsten doorgeven' } ).click();
   await page.waitForTimeout( 500 );

   //Ga terug naar Home
   await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, onderwerpen, kind krijgen
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Onderwerpen' ).getByRole( 'link', { name: 'Kind krijgen' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar Home
   await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, onderwerpen, ontslag
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Onderwerpen' ).getByRole( 'link', { name: 'Ontslag' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, onderwerpen, werkloos
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Onderwerpen' ).getByRole( 'link', { name: 'Werkloos' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, onderwerpen, ziek
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Onderwerpen Ziek, Werkloos,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Ziek', exact: true } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen, wajong
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Wajong-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen, WAO
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'WAO-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen WAZ
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'WAZ-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen WIA
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'WIA-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen, WW
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'WW-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, uitkeringen, Ziektewet
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Uitkeringen WW, WIA, Wajong' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Ziektewet-uitkering' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, afnemers van gegevens
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Afnemers van gegevens' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, eigenrisicodragers
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Eigenrisicodragers' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, gemeenten
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Gemeenten' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, leveranciers
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Leveranciers' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, werkgevers
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Werkgevers' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, speciaal voor, zelfstandigen
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Speciaal voor Gemeenten,' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Zelfstandigen' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, Over UWV, Over ons
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Over UWV Over ons, Pers en' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Over ons' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, Over UWV, Pers en Nieuws
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Over UWV Over ons, Pers en' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Over UWV' ).getByRole( 'link', { name: 'Pers en nieuws' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, over UWV, werken bij UWV
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Over UWV Over ons, Pers en' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Over UWV' ).getByRole( 'link', { name: 'Werken bij UWV' } ).click();
   await page.waitForTimeout( 500 );

   //klik nu op het UWV logo, om terug te gaan naar de UWV website
   await page.getByRole( 'link', { name: 'Ga naar de homepagina van' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, Over UWV, kennis en cijfers
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Over UWV Over ons, Pers en' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Over UWV' ).getByRole( 'link', { name: 'Kennis en cijfers' } ).click();
   await page.waitForTimeout( 500 );

   //Klik op het UWV logo, om terug te gaan naar de UWV website
   await page.getByRole( 'link', { name: 'Ga naar de homepagina van' } ).click();
   await page.waitForTimeout( 500 );

   //Ga naar menu, Over UWV, arbeidsmarktinformatie
   await page.getByRole( 'button', { name: 'Menu' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'button', { name: 'Over UWV Over ons, Pers en' } ).click();
   await page.waitForTimeout( 500 );
   await page.getByLabel( 'Over UWV' ).getByRole( 'link', { name: 'Arbeidsmarktinformatie' } ).click();
   await page.waitForTimeout( 500 );

   //Klik op het UWV logo, om terug te gaan naar de UWV website
   await page.getByRole( 'link', { name: 'Ga naar de homepagina van' } ).click();
} )