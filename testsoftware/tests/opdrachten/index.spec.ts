//#region READ ME
// To write testautomation we need programming skills and experience. 
//
// Below in test 0.0.0 the script instructs the browser to click on all links of the section 'Leerbedrijf' on the index page. 
// After each click the browser navigates to its destination and then back to the index page for the next link. 
//
// The script shows many repetitions and programmers don't like repetion. We refactor it to 
// make it more lean and flexible. Refactoring helps to manage the continuously growing complexity of code.
//
// In all tests after version 0.0.0 we build upon the previous version to develop our testcode.
//
// So how to do it? Automate the elements on the webpage that can be used to interact with. Like this: a) find a reliable playwright locator 
// for element, b) put locator in variable, c) give variable a very good name, d) use variable with very good name whenever you need. 
// The next step would be to create a class for this particular webpage that holds all variables and also common methods like
// verifyThis(), verifyThat().    
//
// To write testautomation we also need to know the basics of testing
// Does the product meet its requirements?  
//
// To learn testautomation you should focus on 'what does this line of code do when executed' instead on 'how does this work'. 
//
// Try to understand as many versions as you can.  
//
// If you understand all versions up to 0.1.4 you have a good basis to build upon for more advanced testautomation scripts.

// Extra tip !!!
// This will help you to learn typescript (and programming in general):
//
// Bison calf: 
//
// abbriviation: booleans, if-statements, strings, objects, numbers, classes, arrays, loops and functions.
// These are basic building blocks of programming. Keep your focus on these while taking the first steps. 
// Practise a lot!
// Practicing is an iterating process of (re)writing code, running it, improving it, running it, (re)writing it. 
// Rinse and repeat.
//#endregion

import { test, expect, request } from '@playwright/test';
import path from 'node:path';
import { localIndexFile, Index } from '../../pages/index'

// Adjust width and height of the browser to fit your local machine's display resolution (viewport). 
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

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT ' } ).click();

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

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( 500 );
   await page.getByRole( 'link', { name: 'Home' } ).click();

} )

test( '0.0.2 - Added a variable for timeout', async ( { page } ) => {
   await page.goto( localIndexFile() );

   // The same flow as in the previous test but we added a variable
   // and use that as timeout. Now we can control the speed of the run in one place.
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

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).click();

   await page.getByRole( 'link', { name: 'Home' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'Home' } ).click();

} )

test( '0.0.3 - Added a variable for home link', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // There's still much duplicate code in our test. We start somewhere and tackle 
   // the repeating code "page.getByRole( 'link', { name: 'Home' }" first. 
   // We create a variable called 'home' that holds the value "page.getByRole( 'link', { name: 'Home' }". 
   const home = page.getByRole( 'link', { name: 'Home' } )

   await page.getByRole( 'link', { name: 'About us', exact: true } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'About us', exact: true } ).click();

   // Instead of writing the full code for the home link we now use the variable 'home'.
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

   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).highlight();
   await page.waitForTimeout( timeout );
   await page.getByRole( 'link', { name: 'De rol van testen in de ICT' } ).click();

   await home.highlight();
   await page.waitForTimeout( timeout );
   await home.click();
} )

test( '0.0.4 - All code for home link in function', async ( { page } ) => {
   // There's still much duplicate code in our test. We refactor our home link code and create
   // a function that holds all code for the home link. Now we just need to call the function 
   // whenever we want to go home.

   await page.goto( localIndexFile() );
   const timeout: number = 500;
   const home = page.getByRole( 'link', { name: 'Home' } )

   /**
    * Function to navigate to the home page. 
   */
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

   /**
    * Function to navigate to a destination page by clicking its link.
    * @param {string} destination - The name of the link to click.
    */
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

   // Our code already looks much better and is more flexible. 
   // Btw we can use emojis in vs-code 🎉😊🚀.
} )

test( '0.0.6 - Variable for locator', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // In this test we introduce a variable called locator. 
   /**
    * Function to navigate to a destination page by clicking its link.
    * @param {string} destination - The name of the link to click.
    */
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
} )

test( '0.0.6.1 - Arrays and loops - part 1', async ( { page } ) => {
   // In this test (which isn't a real test like the others) we introduces arrays and loops.
   // An array is type of variable that can hold a collection of values of the same type. A 
   // individual value in an array is called element or item.
   // Arrays let you access and manipulate each element individually. When used with a for-loop 
   // they enable you to perform repetitive tasks (the loop) efficiently.
   // Below is an array of strings called 'words'.   
   const words: string[] = [ 'hopefully', 'you', 'will', 'understand', 'arrays', 'and', 'loops', 'after', 'this', 'lesson' ];

   // A for-loop is a programming construct that repeats a block of code multiple times.
   // A collection like an array is often used to loop through. 
   for ( let word of words ) {
      console.log( word );
   }

   console.log(); // Just a linebreak in the console output.

   // We can also manipulate the data in the array during the loop.
   for ( let word of words ) {
      word = word.toUpperCase();
      console.log( word );
   }

   console.log(); // Just a linebreak in the console output.

   // Below is also a string array called 'faces'.
   const faces: string[] = [ '\u{1F604}', '\u{1F601}', '\u{1F606}', '\u{1F923}', '\u{1F602}' ];
   for ( const face of faces ) {
      console.log( face );
   }

   console.log(); // Just a linebreak in the console output.

   // In case you like emojis you can find them here: https://unicode.org/emoji/charts/full-emoji-list.html

   // You can find the output of the console.log statements above in the terminal under the tab TEST RESULTS!!!
} )

test( '0.0.6.2 - Arrays and loops - part 2', async ( { page } ) => {
   // Strings, arrays and loops can do complex routines when combined. Add if-statements and
   // you can create advanced flows. Below is an example that uses all these building blocks.
   const bisoncalf = [
      "booleans",
      "if-statements",
      "strings",
      "objects",
      "numbers",
      "classes",
      "arrays",
      "loops",
      "functions"
   ];

   console.log(); // Just a linebreak in the console output.

   for ( let variable of bisoncalf ) {
      variable = variable.toUpperCase();
      console.log( "A question for you about", variable );

      if ( variable === "BOOLEANS" ) {
         console.log( variable, "are an alien race from Star Trek." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "IF-STATEMENTS" ) {
         console.log( variable, "are BOOLEANS." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "STRINGS" ) {
         console.log( variable, "can be found are in orchestra's and code." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "OBJECTS" ) {
         console.log( variable, "are things you can find in real life and in programming." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "NUMBERS" ) {
         console.log( variable, "are used to count and calculate." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "CLASSES" ) {
         console.log( variable, "are groups of objects with common variables (called properties) and functions (called methods)." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "ARRAYS" ) {
         console.log( variable, "are collections of values of the same type stored in a single variable." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "LOOPS" ) {
         console.log( variable, "are programming constructs that repeat a block of code multiple times." );
         console.log( "True or False?" );
         console.log();
      }

      if ( variable === "FUNCTIONS" ) {
         console.log( variable, "are reusable blocks of code that perform a specific task." );
         console.log( "True or False?" );
         console.log();
      }
   }

   console.log(); // Just a linebreak in the console output.

   console.log(); // Just a linebreak in the console output.

   // You can find the output of the console.log statements above in the terminal under the tab TEST RESULTS!!!
} )

test( '0.0.7 - Array for links group Leerbedrijf', async ( { page } ) => {
   await page.goto( localIndexFile() );
   const timeout: number = 500;

   // We introduce a new string array that holds all strings we used in our locators and enables us to use a loop. 
   const leerBedrijf: string[] = [
      "About us",
      "Onboarding the team",
      "Testautomation",
      "Opportunities",
      "De rol van testen in de ICT"
   ];

   // We got rid of the function and introduce a for-loop that iterates through the 
   // string array 'leerbedrijf' and in each loop executes the commands that 
   // used to come from the function that we've removed. The for loop is just a repeating function 
   // that takes input from a collection like an array. It is also self-executing. 
   // We don't need to call it to execute.

   for ( const destination of leerBedrijf ) {
      const locator = page.getByRole( 'link', { name: destination, exact: true } );
      await locator.highlight();
      await page.waitForTimeout( timeout );
      await locator.click();

      await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   }

   // If you still onboard and understand everything until here, you're doing great! 
} )

test( '0.0.8 - Type Link and LinkArray', async ( { page } ) => {
   // So far we just automated the text links on the web page. Now we're going to verify if clicking a link
   // navigates to the correct destination. For that we check if the click goes to the correct page url.
   // To implement this we need to check if the url contains the name of the correct html file.
   // We create a new type of variable and an array that can hold many of those new variables.
   type Link = {
      textLinkName: string,
      htmlFile: string
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

      // The new code in this version is the expect statement below that verifies
      // if the url contains the correct html file name after clicking the link.
      expect( url ).toContain( link.htmlFile );

      await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
   }
} )

test( '0.0.9 - Type Link expanded for all kind of links', async ( { page } ) => {
   // We also need to test the image links on the index page so we add these to our type Link.  
   type Link = {
      textLinkName: string,
      imageid: string,
      htmlFile: string,
      groupTag: string
   };

   // We expand the array 'leerBedrijf' to hold the new data for the image links.
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
      // First we test the text link
      if ( link.textLinkName !== "" ) {
         const locator = page.getByRole( 'link', { name: link.textLinkName, exact: true } );
         await locator.highlight();
         await page.waitForTimeout( timeout );
         await locator.click();

         const url = page.url();
         expect( url ).toContain( link.htmlFile );
         await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
      }
      // Then we test the image link
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
   type Link = {
      textLinkName: string,
      imageid: string,
      htmlFile: string,
      groupTag: string
   };

   // We change the name of the Link array from 'leerbedrijf' to 'links' and add data for the other groups   
   const links: Link[] = [
      // --- leerbedrijf ---
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
      // --- educatief ---
      {
         textLinkName: "Onboarding skills en leerdoelen",
         imageid: "onboarding-skills-en-leerdoelen",
         htmlFile: "onboarding-skills-en-leerdoelen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Basics webtesten met playwright",
         imageid: "basics-webtesting-met-playwright",
         htmlFile: "basics-webtesting-met-playwright.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Probleemoplossend vermogen",
         imageid: "probleemoplossend-vermogen",
         htmlFile: "probleemoplossend-vermogen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Dossier AI",
         imageid: "dossier-ai",
         htmlFile: "dossier-ai.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Werken met codegen",
         imageid: "werken-met-codegen",
         htmlFile: "werken-met-codegen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Enkele vaktermen",
         imageid: "enkele-vaktermen",
         htmlFile: "enkele-vaktermen.html",
         groupTag: "educatief"
      },
      // --- baanperspectief ---
      {
         textLinkName: "Kansen op de arbeidsmarkt",
         imageid: "kansen-op-de-arbeidsmarkt",
         htmlFile: "kansen-op-de-arbeidsmarkt.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Certificaten voor testers",
         imageid: "certificaten-voor-testers",
         htmlFile: "certificaten-voor-testers.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "UWV ICT-beroepen in beeld",
         imageid: "uwv-ict-beroepen-in-beeld",
         htmlFile: "uwv-ict-beroepen-in-beeld.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Job search",
         imageid: "job-search",
         htmlFile: "job-search.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Je cv",
         imageid: "je-cv",
         htmlFile: "je-cv.html",
         groupTag: "baanperspectief"
      },
      // --- portfolio ---
      {
         textLinkName: "Templates aanpak en voorbeelden",
         imageid: "templates-aanpak-en-voorbeelden",
         htmlFile: "templates-aanpak-en-voorbeelden.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project ISTQB",
         imageid: "project-istqb",
         htmlFile: "project-istqb.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project Reddit",
         imageid: "project-reddit",
         htmlFile: "project-reddit.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project custom browser",
         imageid: "project-custom-browser",
         htmlFile: "project-custom-browser.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project websitetemplate en website",
         imageid: "index",
         htmlFile: "index.html",
         groupTag: "portfolio"
      },
      // --- footer ---
      {
         textLinkName: "Locatie Bee LKQ",
         imageid: "",
         htmlFile: "locatie-Bee-LKQ.html",
         groupTag: "footer"
      },
      {
         textLinkName: "Over deze site",
         imageid: "",
         htmlFile: "over-deze-site.html",
         groupTag: "footer"
      }
   ];

   await page.goto( localIndexFile() );

   // We create a new Link array by filtering the existing Link array for the groupTag 'leerbedrijf'.
   const linksLeerbedrijf: Link[] = links.filter( link => link.groupTag === "leerbedrijf" );

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
   type Link = {
      textLinkName: string,
      imageid: string,
      htmlFile: string,
      groupTag: string
   };

   const links: Link[] = [
      // --- leerbedrijf ---
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
      // --- educatief ---
      {
         textLinkName: "Onboarding skills en leerdoelen",
         imageid: "onboarding-skills-en-leerdoelen",
         htmlFile: "onboarding-skills-en-leerdoelen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Basics webtesten met playwright",
         imageid: "basics-webtesting-met-playwright",
         htmlFile: "basics-webtesting-met-playwright.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Probleemoplossend vermogen",
         imageid: "probleemoplossend-vermogen",
         htmlFile: "probleemoplossend-vermogen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Dossier AI",
         imageid: "dossier-ai",
         htmlFile: "dossier-ai.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Werken met codegen",
         imageid: "werken-met-codegen",
         htmlFile: "werken-met-codegen.html",
         groupTag: "educatief"
      },
      {
         textLinkName: "Enkele vaktermen",
         imageid: "enkele-vaktermen",
         htmlFile: "enkele-vaktermen.html",
         groupTag: "educatief"
      },
      // --- baanperspectief ---
      {
         textLinkName: "Kansen op de arbeidsmarkt",
         imageid: "kansen-op-de-arbeidsmarkt",
         htmlFile: "kansen-op-de-arbeidsmarkt.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Certificaten voor testers",
         imageid: "certificaten-voor-testers",
         htmlFile: "certificaten-voor-testers.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "UWV ICT-beroepen in beeld",
         imageid: "uwv-ict-beroepen-in-beeld",
         htmlFile: "uwv-ict-beroepen-in-beeld.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Job search",
         imageid: "job-search",
         htmlFile: "job-search.html",
         groupTag: "baanperspectief"
      },
      {
         textLinkName: "Je cv",
         imageid: "je-cv",
         htmlFile: "je-cv.html",
         groupTag: "baanperspectief"
      },
      // --- portfolio ---
      {
         textLinkName: "Templates aanpak en voorbeelden",
         imageid: "templates-aanpak-en-voorbeelden",
         htmlFile: "templates-aanpak-en-voorbeelden.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project ISTQB",
         imageid: "project-istqb",
         htmlFile: "project-istqb.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project Reddit",
         imageid: "project-reddit",
         htmlFile: "project-reddit.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project custom browser",
         imageid: "project-custom-browser",
         htmlFile: "project-custom-browser.html",
         groupTag: "portfolio"
      },
      {
         textLinkName: "Project websitetemplate en website",
         imageid: "index",
         htmlFile: "index.html",
         groupTag: "portfolio"
      },
      // --- footer ---
      {
         textLinkName: "Locatie Bee LKQ",
         imageid: "",
         htmlFile: "locatie-Bee-LKQ.html",
         groupTag: "footer"
      },
      {
         textLinkName: "Over deze site",
         imageid: "",
         htmlFile: "over-deze-site.html",
         groupTag: "footer"
      }
   ];

   // We create a new function that executes the loop for all variables with the same groupTag value
   async function verifyTaggedLinks ( groupTag: string ) {
      const filterByTag = links.filter( item => item.groupTag === groupTag );
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
   // await verifyTaggedLinks( 'educatief' );
   // await verifyTaggedLinks( 'baanperspectief' );
   // await verifyTaggedLinks( 'portfolio' );
   // await verifyTaggedLinks( 'footer' );
} )

test( '0.1.2 - A class for automation of links on the index page', async ( { page } ) => {
   // We introduce a class that holds the data and the functions
   // and a new function for verifying single links
   type Link =
      {
         textLinkName: string,
         imageid: string,
         htmlFile: string,
         groupTag: string
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
            // --- educatief ---
            {
               textLinkName: "Onboarding skills en leerdoelen",
               imageid: "onboarding-skills-en-leerdoelen",
               htmlFile: "onboarding-skills-en-leerdoelen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Basics webtesten met playwright",
               imageid: "basics-webtesting-met-playwright",
               htmlFile: "basics-webtesting-met-playwright.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Probleemoplossend vermogen",
               imageid: "probleemoplossend-vermogen",
               htmlFile: "probleemoplossend-vermogen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Dossier AI",
               imageid: "dossier-ai",
               htmlFile: "dossier-ai.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Werken met codegen",
               imageid: "werken-met-codegen",
               htmlFile: "werken-met-codegen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Enkele vaktermen",
               imageid: "enkele-vaktermen",
               htmlFile: "enkele-vaktermen.html",
               groupTag: "educatief"
            },
            // --- baanperspectief ---
            {
               textLinkName: "Kansen op de arbeidsmarkt",
               imageid: "kansen-op-de-arbeidsmarkt",
               htmlFile: "kansen-op-de-arbeidsmarkt.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Certificaten voor testers",
               imageid: "certificaten-voor-testers",
               htmlFile: "certificaten-voor-testers.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "UWV ICT-beroepen in beeld",
               imageid: "uwv-ict-beroepen-in-beeld",
               htmlFile: "uwv-ict-beroepen-in-beeld.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Job search",
               imageid: "job-search",
               htmlFile: "job-search.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Je cv",
               imageid: "je-cv",
               htmlFile: "je-cv.html",
               groupTag: "baanperspectief"
            },
            // --- portfolio ---
            {
               textLinkName: "Templates aanpak en voorbeelden",
               imageid: "templates-aanpak-en-voorbeelden",
               htmlFile: "templates-aanpak-en-voorbeelden.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project ISTQB",
               imageid: "project-istqb",
               htmlFile: "project-istqb.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project Reddit",
               imageid: "project-reddit",
               htmlFile: "project-reddit.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project custom browser",
               imageid: "project-custom-browser",
               htmlFile: "project-custom-browser.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project websitetemplate en website",
               imageid: "index",
               htmlFile: "index.html",
               groupTag: "portfolio"
            },
            // --- footer ---
            {
               textLinkName: "Locatie Bee LKQ",
               imageid: "",
               htmlFile: "locatie-Bee-LKQ.html",
               groupTag: "footer"
            },
            {
               textLinkName: "Over deze site",
               imageid: "",
               htmlFile: "over-deze-site.html",
               groupTag: "footer"
            }
         ];
      }

      async verifyTaggedLinks ( groupTag: string ) {
         const filterByTag = this.Links.filter( item => item.groupTag === groupTag );
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
         textLinkName: string,
         imageid: string,
         htmlFile: string,
         groupTag: string
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
            // --- educatief ---
            {
               textLinkName: "Onboarding skills en leerdoelen",
               imageid: "onboarding-skills-en-leerdoelen",
               htmlFile: "onboarding-skills-en-leerdoelen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Basics webtesten met playwright",
               imageid: "basics-webtesting-met-playwright",
               htmlFile: "basics-webtesting-met-playwright.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Probleemoplossend vermogen",
               imageid: "probleemoplossend-vermogen",
               htmlFile: "probleemoplossend-vermogen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Dossier AI",
               imageid: "dossier-ai",
               htmlFile: "dossier-ai.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Werken met codegen",
               imageid: "werken-met-codegen",
               htmlFile: "werken-met-codegen.html",
               groupTag: "educatief"
            },
            {
               textLinkName: "Enkele vaktermen",
               imageid: "enkele-vaktermen",
               htmlFile: "enkele-vaktermen.html",
               groupTag: "educatief"
            },
            // --- baanperspectief ---
            {
               textLinkName: "Kansen op de arbeidsmarkt",
               imageid: "kansen-op-de-arbeidsmarkt",
               htmlFile: "kansen-op-de-arbeidsmarkt.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Certificaten voor testers",
               imageid: "certificaten-voor-testers",
               htmlFile: "certificaten-voor-testers.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "UWV ICT-beroepen in beeld",
               imageid: "uwv-ict-beroepen-in-beeld",
               htmlFile: "uwv-ict-beroepen-in-beeld.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Job search",
               imageid: "job-search",
               htmlFile: "job-search.html",
               groupTag: "baanperspectief"
            },
            {
               textLinkName: "Je cv",
               imageid: "je-cv",
               htmlFile: "je-cv.html",
               groupTag: "baanperspectief"
            },
            // --- portfolio ---
            {
               textLinkName: "Templates aanpak en voorbeelden",
               imageid: "templates-aanpak-en-voorbeelden",
               htmlFile: "templates-aanpak-en-voorbeelden.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project ISTQB",
               imageid: "project-istqb",
               htmlFile: "project-istqb.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project Reddit",
               imageid: "project-reddit",
               htmlFile: "project-reddit.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project custom browser",
               imageid: "project-custom-browser",
               htmlFile: "project-custom-browser.html",
               groupTag: "portfolio"
            },
            {
               textLinkName: "Project websitetemplate en website",
               imageid: "index",
               htmlFile: "index.html",
               groupTag: "portfolio"
            },
            // --- footer ---
            {
               textLinkName: "Locatie Bee LKQ",
               imageid: "",
               htmlFile: "locatie-Bee-LKQ.html",
               groupTag: "footer"
            },
            {
               textLinkName: "Over deze site",
               imageid: "",
               htmlFile: "over-deze-site.html",
               groupTag: "footer"
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
            expect( url ).toContain( link.htmlFile );

            await page.getByRole( 'link', { name: 'Home', exact: true } ).click();
         }
      }

      async verifyTaggedLinks ( groupTag: string ) {
         const filterByTag = this.Links.filter( item => item.groupTag === groupTag );
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
   // It's now available for all testfiles. New additions to the class:
   // two new methods for navigating to textlinks and imagelinks, 
   // a property for navigating to the indexpage,
   // and the constructor now needs the page parameter.  
   const index = new Index( page );

   await page.goto( localIndexFile() );

   // We also added two methods to navigate to the pages linked on the index page. One for textlinks and one for imagelinks.
   await index.navigateToImageLink( "about-us" );
   // We also added property for navigating to the indexpage.
   await index.indexpage.click();
   await index.navigateToTextLink( 'About us' );

   // If you understand all 15 versions of this file: 
   // 
   // CONGRATULATIONS!
   // 
   // You worked your way up to this file's line 1400 or so coming from from basic 
   // testautomation scripting to a more advanced level of testautomation engineering.
   // Build upon this knowledge to enter the next level while create even more advanced 
   // testautomation scripts.
} )