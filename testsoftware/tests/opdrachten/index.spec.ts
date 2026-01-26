//#region READ ME
// To write testautomation we need programming skills and experience. 

// Below in test 0.0.0 the script instructs the browser to click on all links of the section 'Leerbedrijf' on the index page. 
// After each click the browser navigates to its destination and then back to the index page for the next link. 
 
// The script shows many repetitions and programmers don't like repetion. We refactor it to 
// make it more lean and flexible. Refactoring helps to manage the continuously growing complexity of code.

// In all tests after version 0.0.0 we build upon the previous version to develop our testcode.

// So how to do it? Automate the elements on the webpage that can be used to interact with. Like this: a) find a reliable playwright locator 
// for element, b) put locator in variable, c) give variable a very good name, d) use variable with very good name whenever you need. 
// The next step would be to create a class for this particular webpage that holds all variables and also common methods like
// verifyThis(), verifyThat().    

// To write testautomation we also need to know the basics of testing
// Does the product meet its requirements?  

// To learn testautomation you should focus on 'what does this line of code do when executed' instead on 'how does this work'. 

// Try to understand as many versions as you can.      
//#endregion

import { test, expect, request } from '@playwright/test';
import path from 'node:path';
import { localIndexFile, Index } from '../../pages/index'

// Sets width and height of the browser screen (viewport) 
test.use( { viewport: { width: 1833, height: 980 } } );

//#region What Happens in this Test?
// Use this regiontemplate in this file to annotate the different tests 
//#endregion
test( '0.0.0 - Automate navigation for text links in group Leerbedrijf', async ( { page } ) => {
   await page.goto( localIndexFile() );

   // The code below was written by codegen
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Testautomation' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Opportunities' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'De rol van testen' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).click();
} )

test( '0.0.1 - Additional code to make flow more visible in headed run.', async ( { page } ) => {
   await page.goto( localIndexFile() );

   // The same flow as in the previous test but with extra code that makes it easier 
   // to see what the script does when it runs headed (in the browser).  
   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Testautomation' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Opportunities' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'De rol van testen' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'De rol van testen' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

} )

test( '0.0.2 - Variable for timeout', async ( { page } ) => {
   await page.goto( localIndexFile() );

   // The same flow as in the previous test but we added a variable
   // and use that as timeout. Now we can control the speed of the run in one place.
   // We just added a tool that helps us to observe what happens in the browser when the code is executed. 
   const timeout: number = 500;

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Testautomation' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Opportunities' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

   await page.getByRole( 'link', { name: 'De rol van testen' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'De rol van testen' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

} )

test( '0.0.3 - Variable for home link', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // There's still much duplicate code in our test. We start somewhere and pick 
   // the repeating code "page.getByRole( 'link', { name: 'Home' }" to tackle first. 
   // We create a variable for it called 'home'. 
   const home = page.getByRole( 'link', { name: 'Home' } )

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Testautomation' } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Opportunities' } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();

   await page.getByRole( 'link', { name: 'De rol van testen' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'De rol van testen' } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();

} )

test( '0.0.4 - All code for home link in function', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;
   const home = page.getByRole( 'link', { name: 'Home' } )

   // There's still much duplicate code in our test. We move the 'home' code
   // into a function.
   
   async function goHome () {
      await home.highlight();
      await page.waitForTimeout( timeout );
      await home.click();
   }

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   await goHome();

   await page.getByRole( 'link', { name: 'Onboarding the team' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Onboarding the team' } ).click();

   await goHome();

   await page.getByRole( 'link', { name: 'Testautomation' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Testautomation' } ).click();

   await goHome();

   await page.getByRole( 'link', { name: 'Opportunities' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Opportunities' } ).click();

   await goHome();

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).click();

   await goHome();
} )

test( '0.0.5 - Single function for all text links', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // There's still much duplicate code in our test. We refactor our function  
   // so that we can use it for all locators.
   async function goTo ( destination: string ) {
      await page.getByRole( 'link', { name: destination, exact: true } ).highlight();
      await page.waitForTimeout( timeout );
      await page.getByRole( 'link', { name: destination, exact: true } ).click();
   }

   await goTo( 'About us' );

   await goTo( 'Home' );

   await goTo( 'Onboarding the team' );

   await goTo( 'Home' );

   await goTo( 'Testautomation' );

   await goTo( 'Home' );

   await goTo( 'Opportunities' );

   await goTo( 'Home' );

   await goTo( 'De rol van testen in de ICT' );

   await goTo( 'Home' );
} )

test( '0.0.6 - Variable for locator', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // There's still duplicate code in our test. We refactor our function  
   // even further.
   async function goTo ( destination: string ) {
      // This const is the only new in this version.
      const locator = page.getByRole( 'link', { name: destination, exact: true } );

      await locator.highlight();
      await page.waitForTimeout( timeout );
      await locator.click();
   }

   await goTo( 'About us' );

   await goTo( 'Home' );

   await goTo( 'Onboarding the team' );

   await goTo( 'Home' );

   await goTo( 'Testautomation' );

   await goTo( 'Home' );

   await goTo( 'Opportunities' );

   await goTo( 'Home' );

   await goTo( 'De rol van testen in de ICT' );

   await goTo( 'Home' );

   // We could add the goTo('Home') to the function so that everytime we follow a link 
   // the function also returns to the home page but we don't opt for that because
   // we think that would make our code less readable.   
} )

test( '0.0.7 - Array for links group Leerbedrijf', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // We introduce a new variable[] that holds all strings and enables us to use a loop. 
   const leerBedrijf: string[] = [
      "About us",
      "Onboarding the team",
      "Testautomation",
      "Opportunities",
      "De rol van testen in de ICT"
   ];

   // We got rid of the function and introduce a for-loop that iterates through the 
   // new variable[] 'leerbedrijf' and in each loop executes the commands that 
   // used to come from the function. The for loop is just a repeating function 
   // that takes input from a collection like an array. It is also self-executing. 
   // We don't need to call it.
   for ( const destination of leerBedrijf ) {
      const locator = page.getByRole( 'link', { name: destination, exact: true } );
      await locator.highlight();
      await page.waitForTimeout( timeout );
      await locator.click();

      await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   }
} )

test( '0.0.8 - Type Link and LinkArray', async ( { page } ) => {
   // So far we just automated the text links on the web page. Now we're going to verify if clicking a link
   // navigates to the correct destination. For that we check if the click goes to the correct page url.
   // To implement this we need to check if the url contains the name of the correct html file.
   // We create a new type of variable and an array that can hold many of those new variables
   type Link =
      {
         textLinkName: string;
         htmlFile: string;
      }

   const leerBedrijf: Link[] = [
      {
         textLinkName: "About us",
         htmlFile: "about-us.html"
      },
      {
         textLinkName: "Onboarding the team",
         htmlFile: "onboarding-the-team.html"
      },
      {
         textLinkName: "Testautomation",
         htmlFile: "testautomation.html"
      },
      {
         textLinkName: "Opportunities",
         htmlFile: "opportunities.html"
      },
      {
         textLinkName: "De rol van testen in de ICT",
         htmlFile: "de-rol-van-testen-in-de-ict.html"
      }
   ];

   await page.goto( localIndexFile() );
   const timeout: number = 100;

   for ( const link of leerBedrijf ) {
      const locator = page.getByRole( 'link', { name: link.textLinkName, exact: true } );
      await locator.highlight();
      await page.waitForTimeout( timeout );
      await locator.click();

      const url = page.url();
      expect( url ).toContain( link.htmlFile );

      await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   }
} )

test( '0.0.9 - Type Link expanded for all kind of links', async ( { page } ) => {
   // we expand type Link so we can use variables of this type for text links and 
   // image links and for their verification. 
   type Link =
      {
         textLinkName: string;
         imageid: string;
         htmlFile: string;
         groupTag: string;
      }

   const leerBedrijf: Link[] = [
      {
         textLinkName: "About us",
         imageid: "about-us",
         htmlFile: "about-us.html",
         groupTag: "leerbedrijf",
      },
      {
         textLinkName: "Onboarding the team",
         imageid: "onboarding-the-team",
         htmlFile: "onboarding-the-team.html",
         groupTag: "leerbedrijf"
      },
      {
         textLinkName: "Testautomation",
         imageid: "testautomation",
         htmlFile: "testautomation.html",
         groupTag: "leerbedrijf"
      },
      {
         textLinkName: "Opportunities",
         imageid: "opportunities",
         htmlFile: "opportunities.html",
         groupTag: "leerbedrijf"
      },
      {
         textLinkName: "De rol van testen in de ICT",
         imageid: "de-rol-van-testen-in-de-ict",
         htmlFile: "de-rol-van-testen-in-de-ict.html",
         groupTag: "leerbedrijf"
      },

   ];

   await page.goto( localIndexFile() );
   const timeout: number = 50;

   for ( const link of leerBedrijf ) {

      if ( link.textLinkName !== "" ) {
         const locator = page.getByRole( 'link', { name: link.textLinkName, exact: true } );
         await locator.highlight();
         await page.waitForTimeout( timeout );
         await locator.click();

         const url = page.url();
         expect( url ).toContain( link.htmlFile );
         await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
      }

      if ( link.imageid !== "" ) {
         const locator = page.getByTestId( link.imageid );
         await locator.highlight();
         await page.waitForTimeout( timeout );
         await locator.click();
         const url = page.url();
         expect( url ).toContain( link.htmlFile );
         await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
      }
   }
} )

test( '0.1.0 - Filtering the Link[]', async ( { page } ) => {
   // We removed the highlights and the timeouts. 
   type Link =
      {
         textLinkName: string;
         imageid: string;
         htmlFile: string;
         tag: string;
      };

   // We change the name of the variable[] and add data for the other groups   
   const Links: Link[] = [
      // --- leerbedrijf ---
      {
         textLinkName: "About us",
         imageid: "about-us",
         htmlFile: "about-us.html",
         tag: "leerbedrijf",
      },
      {
         textLinkName: "Onboarding the team",
         imageid: "onboarding-the-team",
         htmlFile: "onboarding-the-team.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "Testautomation",
         imageid: "testautomation",
         htmlFile: "testautomation.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "Opportunities",
         imageid: "opportunities",
         htmlFile: "opportunities.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "De rol van testen in de ICT",
         imageid: "de-rol-van-testen-in-de-ict",
         htmlFile: "de-rol-van-testen-in-de-ict.html",
         tag: "leerbedrijf"
      },
      // --- educatief ---
      {
         textLinkName: "Onboarding skills en leerdoelen",
         imageid: "onboarding-skills-en-leerdoelen",
         htmlFile: "onboarding-skills-en-leerdoelen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Basics webtesten met playwright",
         imageid: "basics-webtesting-met-playwright",
         htmlFile: "basics-webtesting-met-playwright.html",
         tag: "educatief"
      },
      {
         textLinkName: "Probleemoplossend vermogen",
         imageid: "probleemoplossend-vermogen",
         htmlFile: "probleemoplossend-vermogen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Dossier AI",
         imageid: "dossier-ai",
         htmlFile: "dossier-ai.html",
         tag: "educatief"
      },
      {
         textLinkName: "Werken met codegen",
         imageid: "werken-met-codegen",
         htmlFile: "werken-met-codegen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Enkele vaktermen",
         imageid: "enkele-vaktermen",
         htmlFile: "enkele-vaktermen.html",
         tag: "educatief"
      },
      // --- baanperspectief ---
      {
         textLinkName: "Kansen op de arbeidsmarkt",
         imageid: "kansen-op-de-arbeidsmarkt",
         htmlFile: "kansen-op-de-arbeidsmarkt.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Certificaten voor testers",
         imageid: "certificaten-voor-testers",
         htmlFile: "certificaten-voor-testers.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "UWV ICT-beroepen in beeld",
         imageid: "uwv-ict-beroepen-in-beeld",
         htmlFile: "uwv-ict-beroepen-in-beeld.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Job search",
         imageid: "job-search",
         htmlFile: "job-search.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Je cv",
         imageid: "je-cv",
         htmlFile: "je-cv.html",
         tag: "baanperspectief"
      },
      // --- portfolio ---
      {
         textLinkName: "Templates aanpak en voorbeelden",
         imageid: "templates-aanpak-en-voorbeelden",
         htmlFile: "templates-aanpak-en-voorbeelden.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project ISTQB",
         imageid: "project-istqb",
         htmlFile: "project-istqb.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project Reddit",
         imageid: "project-reddit",
         htmlFile: "project-reddit.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project custom browser",
         imageid: "project-custom-browser",
         htmlFile: "project-custom-browser.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project websitetemplate en website",
         imageid: "index",
         htmlFile: "index.html",
         tag: "portfolio"
      },
      // --- footer ---
      {
         textLinkName: "Locatie Bee LKQ",
         imageid: "",
         htmlFile: "locatie-Bee-LKQ.html",
         tag: "footer"
      },
      {
         textLinkName: "Over deze site",
         imageid: "",
         htmlFile: "over-deze-site.html",
         tag: "footer"
      }
   ];

   await page.goto( localIndexFile() );

   // We create a new Link[] by filtering the Links array'
   const linksLeerbedrijf: Link[] = Links.filter( item => item.tag === "leerbedrijf" );
   for ( const link of linksLeerbedrijf ) {

      if ( link.textLinkName !== "" ) {
         await page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
         const url = page.url();
         expect( url ).toContain( link.htmlFile );

         await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
      }

      if ( link.imageid !== "" ) {
         await page.getByTestId( link.imageid ).click();

         const url = page.url();
         expect( url ).toContain( link.htmlFile );

         await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
      }
   }
} )

test( '0.1.1 - Execute all', async ( { page } ) => {
   type Link =
      {
         textLinkName: string;
         imageid: string;
         htmlFile: string;
         tag: string;
      };

   const Links: Link[] = [
      // --- leerbedrijf ---
      {
         textLinkName: "About us",
         imageid: "about-us",
         htmlFile: "about-us.html",
         tag: "leerbedrijf",
      },
      {
         textLinkName: "Onboarding the team",
         imageid: "onboarding-the-team",
         htmlFile: "onboarding-the-team.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "Testautomation",
         imageid: "testautomation",
         htmlFile: "testautomation.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "Opportunities",
         imageid: "opportunities",
         htmlFile: "opportunities.html",
         tag: "leerbedrijf"
      },
      {
         textLinkName: "De rol van testen in de ICT",
         imageid: "de-rol-van-testen-in-de-ict",
         htmlFile: "de-rol-van-testen-in-de-ict.html",
         tag: "leerbedrijf"
      },
      // --- educatief ---
      {
         textLinkName: "Onboarding skills en leerdoelen",
         imageid: "onboarding-skills-en-leerdoelen",
         htmlFile: "onboarding-skills-en-leerdoelen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Basics webtesten met playwright",
         imageid: "basics-webtesting-met-playwright",
         htmlFile: "basics-webtesting-met-playwright.html",
         tag: "educatief"
      },
      {
         textLinkName: "Probleemoplossend vermogen",
         imageid: "probleemoplossend-vermogen",
         htmlFile: "probleemoplossend-vermogen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Dossier AI",
         imageid: "dossier-ai",
         htmlFile: "dossier-ai.html",
         tag: "educatief"
      },
      {
         textLinkName: "Werken met codegen",
         imageid: "werken-met-codegen",
         htmlFile: "werken-met-codegen.html",
         tag: "educatief"
      },
      {
         textLinkName: "Enkele vaktermen",
         imageid: "enkele-vaktermen",
         htmlFile: "enkele-vaktermen.html",
         tag: "educatief"
      },
      // --- baanperspectief ---
      {
         textLinkName: "Kansen op de arbeidsmarkt",
         imageid: "kansen-op-de-arbeidsmarkt",
         htmlFile: "kansen-op-de-arbeidsmarkt.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Certificaten voor testers",
         imageid: "certificaten-voor-testers",
         htmlFile: "certificaten-voor-testers.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "UWV ICT-beroepen in beeld",
         imageid: "uwv-ict-beroepen-in-beeld",
         htmlFile: "uwv-ict-beroepen-in-beeld.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Job search",
         imageid: "job-search",
         htmlFile: "job-search.html",
         tag: "baanperspectief"
      },
      {
         textLinkName: "Je cv",
         imageid: "je-cv",
         htmlFile: "je-cv.html",
         tag: "baanperspectief"
      },
      // --- portfolio ---
      {
         textLinkName: "Templates aanpak en voorbeelden",
         imageid: "templates-aanpak-en-voorbeelden",
         htmlFile: "templates-aanpak-en-voorbeelden.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project ISTQB",
         imageid: "project-istqb",
         htmlFile: "project-istqb.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project Reddit",
         imageid: "project-reddit",
         htmlFile: "project-reddit.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project custom browser",
         imageid: "project-custom-browser",
         htmlFile: "project-custom-browser.html",
         tag: "portfolio"
      },
      {
         textLinkName: "Project websitetemplate en website",
         imageid: "index",
         htmlFile: "index.html",
         tag: "portfolio"
      },
      // --- footer ---
      {
         textLinkName: "Locatie Bee LKQ",
         imageid: "",
         htmlFile: "locatie-Bee-LKQ.html",
         tag: "footer"
      },
      {
         textLinkName: "Over deze site",
         imageid: "",
         htmlFile: "over-deze-site.html",
         tag: "footer"
      }
   ];

   // We create a new function that executes the loop for all variables with the same tag value
   async function verifyTaggedLinks ( tag: string ) {
      const filterByTag = Links.filter( item => item.tag === tag );
      for ( const link of filterByTag ) {
         if ( link.textLinkName !== "" ) {
            await page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
            const url = page.url();
            expect( url ).toContain( link.htmlFile );

            await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
         }

         if ( link.imageid !== "" ) {
            await page.getByTestId( link.imageid ).click();
            const url = page.url();
            expect( url ).toContain( link.htmlFile );

            await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
         }
      }
   }

   await page.goto( localIndexFile() );

   // We call the function for all our groups
   await verifyTaggedLinks( 'leerbedrijf' );
   await verifyTaggedLinks( 'educatief' );
   await verifyTaggedLinks( 'baanperspectief' );
   await verifyTaggedLinks( 'portfolio' );
   await verifyTaggedLinks( 'footer' );
} )

test( '0.1.2 - A class for automation of links on the index page', async ( { page } ) => {
   // We introduce a class that holds the data and the functions
   // and a new function for verifying single links
   type Link =
      {
         textLinkName: string;
         imageid: string;
         htmlFile: string;
         tag: string;
      };

   class Index {
      Links: Link[];
      constructor() {
         this.Links = [
            // --- leerbedrijf ---
            {
               textLinkName: "About us",
               imageid: "about-us",
               htmlFile: "about-us.html",
               tag: "leerbedrijf",
            },
            {
               textLinkName: "Onboarding the team",
               imageid: "onboarding-the-team",
               htmlFile: "onboarding-the-team.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "Testautomation",
               imageid: "testautomation",
               htmlFile: "testautomation.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "Opportunities",
               imageid: "opportunities",
               htmlFile: "opportunities.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "De rol van testen in de ICT",
               imageid: "de-rol-van-testen-in-de-ict",
               htmlFile: "de-rol-van-testen-in-de-ict.html",
               tag: "leerbedrijf"
            },
            // --- educatief ---
            {
               textLinkName: "Onboarding skills en leerdoelen",
               imageid: "onboarding-skills-en-leerdoelen",
               htmlFile: "onboarding-skills-en-leerdoelen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Basics webtesten met playwright",
               imageid: "basics-webtesting-met-playwright",
               htmlFile: "basics-webtesting-met-playwright.html",
               tag: "educatief"
            },
            {
               textLinkName: "Probleemoplossend vermogen",
               imageid: "probleemoplossend-vermogen",
               htmlFile: "probleemoplossend-vermogen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Dossier AI",
               imageid: "dossier-ai",
               htmlFile: "dossier-ai.html",
               tag: "educatief"
            },
            {
               textLinkName: "Werken met codegen",
               imageid: "werken-met-codegen",
               htmlFile: "werken-met-codegen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Enkele vaktermen",
               imageid: "enkele-vaktermen",
               htmlFile: "enkele-vaktermen.html",
               tag: "educatief"
            },
            // --- baanperspectief ---
            {
               textLinkName: "Kansen op de arbeidsmarkt",
               imageid: "kansen-op-de-arbeidsmarkt",
               htmlFile: "kansen-op-de-arbeidsmarkt.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Certificaten voor testers",
               imageid: "certificaten-voor-testers",
               htmlFile: "certificaten-voor-testers.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "UWV ICT-beroepen in beeld",
               imageid: "uwv-ict-beroepen-in-beeld",
               htmlFile: "uwv-ict-beroepen-in-beeld.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Job search",
               imageid: "job-search",
               htmlFile: "job-search.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Je cv",
               imageid: "je-cv",
               htmlFile: "je-cv.html",
               tag: "baanperspectief"
            },
            // --- portfolio ---
            {
               textLinkName: "Templates aanpak en voorbeelden",
               imageid: "templates-aanpak-en-voorbeelden",
               htmlFile: "templates-aanpak-en-voorbeelden.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project ISTQB",
               imageid: "project-istqb",
               htmlFile: "project-istqb.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project Reddit",
               imageid: "project-reddit",
               htmlFile: "project-reddit.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project custom browser",
               imageid: "project-custom-browser",
               htmlFile: "project-custom-browser.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project websitetemplate en website",
               imageid: "index",
               htmlFile: "index.html",
               tag: "portfolio"
            },
            // --- footer ---
            {
               textLinkName: "Locatie Bee LKQ",
               imageid: "",
               htmlFile: "locatie-Bee-LKQ.html",
               tag: "footer"
            },
            {
               textLinkName: "Over deze site",
               imageid: "",
               htmlFile: "over-deze-site.html",
               tag: "footer"
            }
         ];
      }

      async verifyTaggedLinks ( tag: string ) {
         const filterByTag = this.Links.filter( item => item.tag === tag );
         for ( const link of filterByTag ) {
            if ( link.textLinkName !== "" ) {
               await page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
               const url = page.url();
               expect( url ).toContain( link.htmlFile );

               await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
            }

            if ( link.imageid !== "" ) {
               await page.getByTestId( link.imageid ).click();
               const url = page.url();
               expect( url ).toContain( link.htmlFile );

               await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
            }
         }
      }

      async verifySingleLink ( htmlFileName: string ) {
         const filterByHtmlFileName = this.Links.filter( item => item.htmlFile === htmlFileName );
         for ( const link of filterByHtmlFileName ) {
            if ( link.textLinkName !== "" ) {
               await page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
               const url = page.url();
               expect( url ).toContain( link.htmlFile );

               await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
            }

            if ( link.imageid !== "" ) {
               await page.getByTestId( link.imageid ).click();
               const url = page.url();
               expect( url ).toContain( link.htmlFile );

               await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
            }
         }
      }
   }

   const index = new Index();

   await page.goto( localIndexFile() );

   // We call the function for all our groups
   await index.verifyTaggedLinks( 'leerbedrijf' );
   await index.verifyTaggedLinks( 'educatief' );
   await index.verifyTaggedLinks( 'baanperspectief' );
   await index.verifyTaggedLinks( 'portfolio' );
   await index.verifyTaggedLinks( 'footer' );

   await index.verifySingleLink( 'about-us.html' );
} )

test( '0.1.3 - Method for duplicate code', async ( { page } ) => {
   // Yet again we moved duplicate code into a method
   type Link =
      {
         textLinkName: string;
         imageid: string;
         htmlFile: string;
         tag: string;
      };

   class Index {
      Links: Link[];
      constructor() {
         this.Links = [
            // --- leerbedrijf ---
            {
               textLinkName: "About us",
               imageid: "about-us",
               htmlFile: "about-us.html",
               tag: "leerbedrijf",
            },
            {
               textLinkName: "Onboarding the team",
               imageid: "onboarding-the-team",
               htmlFile: "onboarding-the-team.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "Testautomation",
               imageid: "testautomation",
               htmlFile: "testautomation.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "Opportunities",
               imageid: "opportunities",
               htmlFile: "opportunities.html",
               tag: "leerbedrijf"
            },
            {
               textLinkName: "De rol van testen in de ICT",
               imageid: "de-rol-van-testen-in-de-ict",
               htmlFile: "de-rol-van-testen-in-de-ict.html",
               tag: "leerbedrijf"
            },
            // --- educatief ---
            {
               textLinkName: "Onboarding skills en leerdoelen",
               imageid: "onboarding-skills-en-leerdoelen",
               htmlFile: "onboarding-skills-en-leerdoelen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Basics webtesten met playwright",
               imageid: "basics-webtesting-met-playwright",
               htmlFile: "basics-webtesting-met-playwright.html",
               tag: "educatief"
            },
            {
               textLinkName: "Probleemoplossend vermogen",
               imageid: "probleemoplossend-vermogen",
               htmlFile: "probleemoplossend-vermogen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Dossier AI",
               imageid: "dossier-ai",
               htmlFile: "dossier-ai.html",
               tag: "educatief"
            },
            {
               textLinkName: "Werken met codegen",
               imageid: "werken-met-codegen",
               htmlFile: "werken-met-codegen.html",
               tag: "educatief"
            },
            {
               textLinkName: "Enkele vaktermen",
               imageid: "enkele-vaktermen",
               htmlFile: "enkele-vaktermen.html",
               tag: "educatief"
            },
            // --- baanperspectief ---
            {
               textLinkName: "Kansen op de arbeidsmarkt",
               imageid: "kansen-op-de-arbeidsmarkt",
               htmlFile: "kansen-op-de-arbeidsmarkt.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Certificaten voor testers",
               imageid: "certificaten-voor-testers",
               htmlFile: "certificaten-voor-testers.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "UWV ICT-beroepen in beeld",
               imageid: "uwv-ict-beroepen-in-beeld",
               htmlFile: "uwv-ict-beroepen-in-beeld.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Job search",
               imageid: "job-search",
               htmlFile: "job-search.html",
               tag: "baanperspectief"
            },
            {
               textLinkName: "Je cv",
               imageid: "je-cv",
               htmlFile: "je-cv.html",
               tag: "baanperspectief"
            },
            // --- portfolio ---
            {
               textLinkName: "Templates aanpak en voorbeelden",
               imageid: "templates-aanpak-en-voorbeelden",
               htmlFile: "templates-aanpak-en-voorbeelden.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project ISTQB",
               imageid: "project-istqb",
               htmlFile: "project-istqb.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project Reddit",
               imageid: "project-reddit",
               htmlFile: "project-reddit.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project custom browser",
               imageid: "project-custom-browser",
               htmlFile: "project-custom-browser.html",
               tag: "portfolio"
            },
            {
               textLinkName: "Project websitetemplate en website",
               imageid: "index",
               htmlFile: "index.html",
               tag: "portfolio"
            },
            // --- footer ---
            {
               textLinkName: "Locatie Bee LKQ",
               imageid: "",
               htmlFile: "locatie-Bee-LKQ.html",
               tag: "footer"
            },
            {
               textLinkName: "Over deze site",
               imageid: "",
               htmlFile: "over-deze-site.html",
               tag: "footer"
            }
         ];
      }

      async linkRoutine ( link: Link ) {
         if ( link.textLinkName !== "" ) {
            await page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
            const url = page.url();
            expect( url ).toContain( link.htmlFile );

            await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
         }

         if ( link.imageid !== "" ) {
            await page.getByTestId( link.imageid ).click();
            const url = page.url();
            expect( url ).toContain( link.htmlFile ); link

            await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
         }
      }

      async verifyTaggedLinks ( tag: string ) {
         const filterByTag = this.Links.filter( item => item.tag === tag );
         for ( const link of filterByTag ) {
            await this.linkRoutine( link );
         }
      }

      async verifySingleLink ( htmlFileName: string ) {
         const filterByHtmlFileName = this.Links.filter( item => item.htmlFile === htmlFileName );
         for ( const link of filterByHtmlFileName ) {
            await this.linkRoutine( link );
         }
      }
   }

   const index = new Index();

   await page.goto( localIndexFile() );

   // We call the function for all our groups
   await index.verifyTaggedLinks( 'leerbedrijf' );
   await index.verifyTaggedLinks( 'educatief' );
   await index.verifyTaggedLinks( 'baanperspectief' );
   await index.verifyTaggedLinks( 'portfolio' );
   await index.verifyTaggedLinks( 'footer' );

   // this is to test a single link
   await index.verifySingleLink( 'testwebsite/html-css/leerbedrijf/about-us.html' );
} )

test( '0.1.4 - Class moved to different file', async ( { page } ) => {
   // We moved the type Link and the class Index to a separate file
   // It's now available for all testfiles.
   const index = new Index( page );

   await page.goto( localIndexFile() );

   // We also added two methods to navigate to the pages linked on the index page. One for textlinks and one for imagelinks.
   await index.navigateToImageLink("about-us");
   // We also added property for navigating to the indexpage.
   await index.indexpage.click();
   await index.navigateToTextLink('About us');
} )