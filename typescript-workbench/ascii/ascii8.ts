import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/** Kleuren voor weergave ascii in terminal 
 * 
 */
class Kleur {
   static rood: string = "\x1b[91m";
   static groen: string = "\x1b[92m";
   static blauw: string = "\x1b[94m";
   static geel: string = "\x1b[93m";
   static grijs: string = "\x1b[90m";
   static magenta: string = "\x1b[95m";
   static cyaan: string = "\x1b[96m";
   static wit: string = "\x1b[97m";
   static vet: string = "\x1b[1m";
   static sluiter: string = "\x1b[0m";
   static placeholder: string = "";
   static alleKleuren: string[] = [
      this.rood,
      this.groen,
      this.blauw,
      this.geel,
      this.grijs,
      this.magenta,
      this.cyaan,
      this.wit
   ]
   static randomKleur (): string {
      let rand = Math.floor( Math.random() * ( this.alleKleuren.length ) );
      return this.alleKleuren[ rand ];
   }
}

/** Ascii templates voor een instance van class AsciiGezicht. Elke template[] heeft 5 strings van elk 13 posities.
 * 
 */
const templates: string[][] = [
   [
      Kleur.placeholder + String.raw`     ~~~     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ((~^~))   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  '(|o_o|)'  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    (===)    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    (( ))    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (|oVo|)   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ()\=/()   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ()   ()   ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  ('('~')')  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  ('|*_*|')  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     \=/     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    ((())    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (|*-*|)   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    c\=/c    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     .-.     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    (~ ~)    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    :o o:    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (((_)))   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     ~I~     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    ('¯')    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )Ø Ø(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     .-.     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  '((/"\))'  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  '(:o o:)'  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (\(_)/)   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     \=/     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`     ,.,     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    (~ ~)    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   q:0 0:p   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    ((_))    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     'u'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`   ,oOOOo,   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   o(""")o   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   o|* *|o   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   C((_))C   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '='     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`    ,WW3,    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   o-(")-.   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ||. 0||   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   C(._))C   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     ='      ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`      ,      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  ,.'   '.,  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   |:o o:|   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    \(_)/    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      v      ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`      ,      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    ,iIi,    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (((()))   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ))o_o((   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    '\=/'    ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (@@@@@)   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   @)0 0(@   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   @((_))@   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     )=(     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw` ( =(""")= ) ` + Kleur.sluiter,
      Kleur.placeholder + String.raw` ,))|o o|((, ` + Kleur.sluiter,
      Kleur.placeholder + String.raw` !( ( _ ) )! ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '-'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )9 9(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )6 6(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`  ( \   / )  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   .\\_//.   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )d b(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ( (_) )   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     '"'     ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   (\___/)   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )o o(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  (_(. .)_)  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`   ((___))   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    )* *(    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`  (==(_)==)  ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      ||     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    @:OO:@   ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     (\/)    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`      _      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     >')     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      _      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     ('<     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.sluiter
   ],
   [
      Kleur.placeholder + String.raw`      _      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`     ('<     ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`    <(_)>    ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`      ^      ` + Kleur.sluiter,
      Kleur.placeholder + String.raw`             ` + Kleur.sluiter
   ]

];

/** Printklare string array
 * 
*/
class AsciiGezicht {
   template: string[];
   constructor( templateIndex: number, kleur: string ) {
      this.template = templates[ templateIndex ];
      for ( let index = 0; index < this.template.length; index++ ) {
         this.template[ index ] = this.template[ index ].replace( Kleur.placeholder, kleur );
      }
   }
}

/** Handelt communicatie met user af en zorgt voor output in de terminal.
 * 
**/
class MaakAsciiGezichten {
   // default waarden die de user kan overschrijven
   static defaultAantalGezichten = 5;
   static defaultTekst = 'Team';
   // defaults die hij niet kan overschrijven
   static randbreedte = 6;
   static kaderdeco: string = 'B';
   static dakdeco: string = '8';
   static spatie: string = ' ';
   static underscore = '_';
   static kantlijn: string = this.spatie.repeat( 20 );
   static breedteAsciiBox: number;
   static PrintRegelsGezichten: string[];

   /** Verwerkt user input en print resultaat
    * 
   */
   static async dialoog () {
      const rl = readline.createInterface( { input, output } );
      for ( let index = 0; index < 100; index++ ) {

         const vraag1 = `Type aantal gezichtjes of druk enter: `;
         const antwoord1: string = await rl.question( vraag1 );
         if ( Number( antwoord1 ) ) {
            // set new default
            this.defaultAantalGezichten = Number( antwoord1 );
         }

         const vraag2 = `Type de koptekst of druk enter: `;
         const antwoord2 = await rl.question( vraag2 );
         if ( antwoord2 === "" ) {
            this.printAlles( this.defaultAantalGezichten, this.defaultTekst );
            this.printAlles( this.defaultAantalGezichten, this.defaultTekst );
         } else {
            this.printAlles( this.defaultAantalGezichten, antwoord2 );
            this.printAlles( this.defaultAantalGezichten, antwoord2 );
            // set new default
            this.defaultTekst = antwoord2;
         }
      }
      rl.close();
   }

   /** Maakt array met de printklare strings voor de regels van de gezichtjes 
    * 
   */
   static maakPrintregelsGezichten ( aantalGezichten: number ): string[] {
      let gezichten = [];
      for ( let index = 0; index < aantalGezichten; index++ ) {
         const rand = Math.floor( Math.random() * ( templates.length ) );
         const gezicht = new AsciiGezicht( rand, Kleur.randomKleur() );
         // bij elke loop wordt een random gekozen gezicht toegevoegd aan gezichten
         gezichten.push( gezicht );
      }

      // linker kant eerste regel
      let printRegel0: string = Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel0 += gezicht.template[ 0 ]; // we nemen van elk gezicht in arr de bovenste string
      }
      // rechter kant van de regel
      printRegel0 += Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant tweede regel
      let printRegel1: string = Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel1 += gezicht.template[ 1 ]; // we nemen van elk gezicht in arr de op 1 na bovenste string
      }
      // rechter kant
      printRegel1 += Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant derde regel
      let printRegel2 = Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel2 += gezicht.template[ 2 ]; // we nemen van elk gezicht in arr etc.  
      }
      // rechter kant
      printRegel2 += Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel3: string = Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel3 += gezicht.template[ 3 ];
      }
      // rechter kant
      printRegel3 += Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel4: string = Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel4 += gezicht.template[ 4 ];
      }
      // rechter kant
      printRegel4 += Kleur.magenta + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter;

      return [ printRegel0, printRegel1, printRegel2, printRegel3, printRegel4 ];
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

   static printAlles ( aantalGezichten: number, tekst: string ) {
      // regels gezichtjes
      this.PrintRegelsGezichten = this.maakPrintregelsGezichten( aantalGezichten );
      // regel koptekst
      const koptekstRegel = this.maakKoptekstRegel( aantalGezichten, tekst );

      // dak
      console.log( this.kantlijn + Kleur.grijs + '  ' + this.underscore.repeat( this.breedteAsciiBox - 4 ) + '  ' + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.grijs + ' /' + this.dakdeco.repeat( this.breedteAsciiBox - 4 ) + '\\' + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.grijs + '/' + this.dakdeco.repeat( this.breedteAsciiBox - 2 ) + '\\' + Kleur.sluiter );
      // bovenkant
      console.log( this.kantlijn + Kleur.groen + koptekstRegel + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.magenta + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.rood + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter );
      // gezichtjes
      console.log( this.kantlijn + this.PrintRegelsGezichten[ 0 ] );
      console.log( this.kantlijn + this.PrintRegelsGezichten[ 1 ] );
      console.log( this.kantlijn + this.PrintRegelsGezichten[ 2 ] );
      console.log( this.kantlijn + this.PrintRegelsGezichten[ 3 ] );
      console.log( this.kantlijn + this.PrintRegelsGezichten[ 4 ] );
      // onderkant
      console.log( this.kantlijn + Kleur.geel + this.kaderdeco.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdeco.repeat( this.randbreedte ) + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.rood + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.magenta + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter );
      console.log( this.kantlijn + Kleur.groen + this.kaderdeco.repeat( this.breedteAsciiBox ) + Kleur.sluiter );
      console.log();
   }
}

MaakAsciiGezichten.dialoog();


