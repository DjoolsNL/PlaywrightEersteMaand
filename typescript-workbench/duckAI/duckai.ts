import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { writeFile } from 'node:fs';
import path from "path";
import { Kleur, templatesDuck as templates, templatesDuckVertaald as templatesVertaald, interactie } from '../utils';

/** Class levert printklare string array van een duck incl. random template en kleurcode voor terminal en html
 * 
*/
class Duck {
   templateAnsi: string[];
   templateHtml: string[];
   kleurAnsi: string;
   kleurHtml: string;
   constructor( index?: number ) {
      let randK = Math.floor( Math.random() * ( Kleur.alleKleuren.length ) );

      if ( index ) {
         this.templateAnsi = [ ...templatesVertaald[ index ] ];
         this.templateHtml = [ ...templatesVertaald[ index ] ];
      }
      else {      // random voor Template en Kleur
         let randT = Math.floor( Math.random() * ( templates.length ) );
         let randK = Math.floor( Math.random() * ( Kleur.alleKleuren.length ) );

         // kies uit originele templates 
         if ( RubberDucking.vertaling === false ) {
            // Duck krijgt template
            this.templateAnsi = [ ...templates[ randT ] ];
            this.templateHtml = [ ...templates[ randT ] ];
         }
         // of de vertaalde templates
         else {
            // Duck krijgt template
            this.templateAnsi = [ ...templatesVertaald[ randT ] ];
            this.templateHtml = [ ...templatesVertaald[ randT ] ];
         }
      }

      // aan de slag met kleuren 
      this.kleurAnsi = Kleur.alleKleuren[ randK ].ansi;
      for ( let index = 0; index < this.templateAnsi.length; index++ ) {
         if ( this.templateAnsi[ index ].includes( '~' ) ) {
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholder, Kleur.blauw.ansi );
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.ansi );
         }

         else if ( this.templateAnsi[ index ].includes( "('<" ) || this.templateAnsi[ index ].includes( ">')" ) ) {
            let randK = Math.floor( Math.random() * ( Kleur.alleKleuren.length ) );
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholder, Kleur.alleKleuren[ randK ].ansi );
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.ansi );
         }

         else {
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholder, this.kleurAnsi );
            this.templateAnsi[ index ] = this.templateAnsi[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.ansi );
         }
      }
      this.kleurHtml = Kleur.alleKleuren[ randK ].html;
      for ( let index = 0; index < 7; index++ ) {
         if ( this.templateHtml[ index ].includes( '~' ) ) {
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '<', '&lt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '>', '&gt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholder, Kleur.blauw.html );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.html );
         }
         else if ( this.templateHtml[ index ].includes( "('<" ) || this.templateHtml[ index ].includes( ">')" ) ) {
            let randK = Math.floor( Math.random() * ( Kleur.alleKleuren.length ) );
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '<', '&lt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '>', '&gt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholder, Kleur.alleKleuren[ randK ].html );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.html );
         }
         else {
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '<', '&lt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replaceAll( '>', '&gt;' );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholder, this.kleurHtml );
            this.templateHtml[ index ] = this.templateHtml[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.html );
         }
      }
   }
}

/** Handelt communicatie met user af en zorgt voor output in de terminal.
 * 
**/
class RubberDucking {
   static vraag: string = 'JIJ';
   static aantalLoops: number = 25;
   static vertaling: boolean = false;
   static spatie: string = ' ';
   static kantlijn: string = this.spatie.repeat( 10 );
   static schrijfHtmlFile: string = 's';
   static htmlArray: string[] = [
      "<!DOCTYPE html>\n<html>\n<head>\n",
      "  <style>\n",
      "    pre {line-height:0.34; padding-left:10%; }\n",
      "  </style>\n",
      "</head>\n<body style='font-family: Arial, sans-serif;",
      "padding-left:10%;padding-top:4em;background-color: black;color:white;font-size:17px'>\n",
      "  DuckAI kan ernaast zitten. Dus double-check de antwoorden.\n"
   ];
   //static ducks: Duck[];

   /** Verwerkt user input en print resultaat
    * 
   */
   static async chatLoop () {
      await this.zetVersie();

      for ( let index = 0; index < this.aantalLoops; index++ ) {
         const antwoord = interactie( this.vraag );
         this.verwerkInput( await antwoord );
      }

      await this.schrijfFile();
      console.log( 'De sessie met Duck AI is voorbij.' );
      console.log( 'Een html versie van de sessie is naar de html file geschreven.' );
   }

   /**
    * Zet de originele versie in Duck taal of de vertaalde versie.
   */
   static async zetVersie () {
      const vraag = "Type o voor de originele versie of v voor de vertaalde versie: ";
      const antwoord = await interactie( vraag );
      if ( antwoord === 'v' ) {
         this.vertaling = true;
      }
   }

   static async verwerkInput ( antwoord: string ) {
      if ( antwoord === this.schrijfHtmlFile ) {
         await this.schrijfFile();
      }
      else {
         this.htmlArray.push( "   <br>\n   <br>\n   JIJ:\n   " + antwoord + "\n   <br>\n   <br>\n" );
      }

      // Maak willekeurig aantal ducks en print die 
      const n = Math.floor( Math.random() * ( 7 ) + 1 );
      this.printAlles( n );
   }

   static printAlles ( aantalDucks: number ) {
      console.log();
      console.log( 'DuckAI:' );
      console.log();

      for ( let regel of this.maakPrintregelsDucks( aantalDucks ) ) {
         console.log( this.kantlijn + regel );
      }
      console.log();
   }

   /** Returns string[] met de printklare strings voor de terminal 
    * @param aantalDucks - aantal ducks in de string
   */
   static maakPrintregelsDucks ( aantalDucks: number ): string[] {
      let ducks = this.maakDucks( aantalDucks );

      this.htmlArray.push( "\n   DuckAI:\n" );

      let printArr: string[] = [];

      for ( let index = 0; index < 7; index++ ) {
         this.htmlArray.push( "   <pre>" );
         let printRegel: string = "";
         for ( let duck of ducks ) {
            printRegel += duck.templateAnsi[ index ];

            this.htmlArray.push( duck.templateHtml[ index ] );
         }
         this.htmlArray.push( "</pre>\n" );
         printArr.push( printRegel );
      }
      return printArr;
   }

   static maakDucks ( aantalDucks: number ): Duck[] {
      let ducks: Duck[] = [];
      for ( let index = 0; index < aantalDucks; index++ ) {
         const duck = new Duck();
         ducks.push( duck );
      }
      return ducks;
   }

   /**
    * Schrijft html versie naar file. En die kun je met playwright testen in de testomgeving!
   */
   static async schrijfFile () {
      const filePath = path.join(
         __dirname,
         "..",
         "..",
         "testwebsite",
         "html-css",
         "duck.html"
      );
      this.htmlArray.push( "\n\n\n<span style='font-size:11px;'>jvn/2026</span>\n</body>\n</html>" );
      const content = this.htmlArray.join( " " );

      writeFile( filePath, content, ( err ) => {
         if ( err ) throw err;
         console.log( 'The file has been saved!', filePath );
      } )
   }
}

RubberDucking.chatLoop();