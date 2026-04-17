import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { Kleur, templatesAsciiGezichten as templates } from '../utils';

/** Printklare string array van een gezicht
 * 
*/
class AsciiGezicht {
   template: string[];
   constructor( templateIndex: number, kleur: string ) {
      this.template = templates[ templateIndex ];
      for ( let index = 0; index < this.template.length; index++ ) {
         this.template[ index ] = this.template[ index ].replace( Kleur.placeholder, kleur );
         this.template[ index ] = this.template[ index ].replace( Kleur.placeholderSluiter, Kleur.sluiter.ansi );
      }
   }
}

/** Handelt communicatie met user af en zorgt voor output in de terminal.
 * 
**/
class MaakAsciiGezichten {
   // defaults die de user kan overschrijven
   static defaultAantalGezichten: number = 5;
   static defaultTekst: string = 'Team';
   // defaults die hij niet kan overschrijven
   static randbreedte: number = 6;
   static kaderdeco: string = '*';
   static dakdeco: string = '8';
   static spatie: string = ' ';
   static underscore: string = '_';
   static kantlijn: string = this.spatie.repeat( 20 );
   // andere properties
   static breedteAsciiBox: number;
   static PrintRegelsGezichten: string[];
   static koptekstRegel: string;
   static vraag1: string = `Type aantal gezichtjes of druk enter: `;
   static vraag2: string = `Type de koptekst of druk enter: `;

   /** Verwerkt user input en print resultaat
    * 
   */
   static async dialoog () {
      let rl = readline.createInterface( { input, output } );
      for ( let index = 0; index < 100; index++ ) {
         const antwoord1: string = await rl.question( this.vraag1 );
         if ( Number( antwoord1 ) ) {
            // set new default
            this.defaultAantalGezichten = Number( antwoord1 );
         }

         const antwoord2 = await rl.question( this.vraag2 );
         if ( antwoord2 !== "" ) {
            // set new default
            this.defaultTekst = antwoord2;
         }
         this.printAlles( this.defaultAantalGezichten, this.defaultTekst );
      }
      rl.close();
   }

   static printAlles ( aantalGezichten: number, tekst: string ) {
      this.PrintRegelsGezichten = this.maakPrintregelsGezichten( aantalGezichten );
      this.koptekstRegel = this.maakKoptekstRegel( aantalGezichten, tekst );

      // dak vd box
      console.log( this.kantlijn + Kleur.grijs.ansi + '  ' + this.underscore.repeat( this.breedteAsciiBox - 4 ) + '  ' + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.grijs.ansi + ' /' + this.dakdeco.repeat( this.breedteAsciiBox - 4 ) + '\\' + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.grijs.ansi + '/' + this.dakdeco.repeat( this.breedteAsciiBox - 2 ) + '\\' + Kleur.sluiter.ansi );

      // voorkant boven
      console.log( this.kantlijn + Kleur.groen.ansi + this.koptekstRegel + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.magenta.ansi + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.rood.ansi + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi );

      // gezichtjes in box
      console.log( this.kantlijn
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
         + this.PrintRegelsGezichten[ 0 ]
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi );

      console.log( this.kantlijn
         + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
         + this.PrintRegelsGezichten[ 1 ]
         + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi );

      console.log( this.kantlijn
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
         + this.PrintRegelsGezichten[ 2 ]
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
      );

      console.log( this.kantlijn
         + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
         + this.PrintRegelsGezichten[ 3 ]
         + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
      );

      console.log( this.kantlijn
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
         + this.PrintRegelsGezichten[ 4 ]
         + Kleur.magenta.ansi + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi
      );

      // voorkant onder
      console.log( this.kantlijn + Kleur.geel.ansi + this.kaderdeco.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.rood.ansi + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.magenta.ansi + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter.ansi );
      console.log( this.kantlijn + Kleur.groen.ansi + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter.ansi );
      console.log();
   }

   /** Maakt array met de printklare strings voor de regels van de gezichtjes 
    * 
   */
   static maakPrintregelsGezichten ( aantalGezichten: number ): string[] {
      let gezichten: AsciiGezicht[] = [];
      for ( let index = 0; index < aantalGezichten; index++ ) {
         const randT = Math.floor( Math.random() * ( templates.length ) );
         let randK = Math.floor( Math.random() * ( Kleur.alleKleuren.length ) );

         const gezicht = new AsciiGezicht( randT, Kleur.alleKleuren[ randK ].ansi );
         // bij elke loop wordt een random gekozen gezicht toegevoegd aan gezichten
         gezichten.push( gezicht );
      }

      let printArr: string[] = [];
      for ( let index = 0; index < 5; index++ ) {
         let printRegel: string = "";
         for ( let gezicht of gezichten ) {
            printRegel += gezicht.template[ index ];
         }
         printArr.push( printRegel );
      }
      return printArr;
   }

   /** Dynamische tekst wordt ingepast
    *  returned string voor regel ex kleur
    */
   static maakKoptekstRegel ( aantalGezichten: number, tekst: string ): string {
      this.breedteAsciiBox = this.randbreedte + aantalGezichten * 13 + this.randbreedte;
      // koptekst inpassen 
      const lengteText: number = tekst.length + 2;
      const breedteAsciiBoxMinusTekst: number = this.breedteAsciiBox - lengteText;
      const kaderDecoVoorTekst: number = breedteAsciiBoxMinusTekst / 2;
      const kaderdecoAchterTekst: number = breedteAsciiBoxMinusTekst / 2 + 1;
      let s: string = this.kaderdeco.repeat( kaderDecoVoorTekst );
      s += " " + tekst + " " + this.kaderdeco.repeat( kaderdecoAchterTekst );
      return s.substring( 0, this.breedteAsciiBox );
   }
}

MaakAsciiGezichten.dialoog();