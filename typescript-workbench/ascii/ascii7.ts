import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

class Kleur {
   static rood: string = "\x1b[91m";
   static groen: string = "\x1b[92m";
   static blauw: string = "\x1b[94m";
   static geel: string = "\x1b[93m";
   static grijs: string = "\x1b[90m";
   static magenta: string = "\x1b[95m";
   static cyaan: string = "\x1b[96m";
   //static paars: string = "\x1b[95m";
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
   ]
];

class Gezicht {
   template: string[];

   constructor( templateIndex: number, kleur: string ) {
      this.template = templates[ templateIndex ];
      for ( let index = 0; index < this.template.length; index++ ) {
         this.template[ index ] = this.template[ index ].replace( Kleur.placeholder, kleur );
      }
   }
}

class Ascii6 {
   static kaderdecoratie: string = '*';
   static spatie: string = ' ';
   static randbreedte = 6;
   static defaultAantalGezichten = 6;
   static defaultTekst = 'voorbeeld tekst';
   /** Maakt de printklare string voor de regels van de gezichtjes 
    * 
   */
   static maakPrintRegels ( aantalgezichten: number ): string[] {
      let gezichten = [];

      for ( let index = 0; index < aantalgezichten; index++ ) {
         // random selectie van gezichten
         const rand = Math.floor( Math.random() * ( templates.length ) );
         const gezicht = new Gezicht( rand, Kleur.randomKleur() );
         // random selectie van kleur voor gezicht
         gezichten.push( gezicht ); // bij elke loop wordt een random gekozen gezicht toegevoegd
      }

      // linker kant van de regel
      let printRegel0: string = Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;
      // lettertekens van gezichten
      for ( let gezicht of gezichten ) {
         printRegel0 += gezicht.template[ 0 ]; // we nemen van elk gezicht in arr de bovenste string
      }
      // rechter kant van de regel
      printRegel0 += Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel1: string = Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;
      // lettertekens van gezichten
      for ( let gezicht of gezichten ) {
         printRegel1 += gezicht.template[ 1 ]; // we nemen van elk gezicht in arr de op 1 na bovenste string
      }
      // rechter kant
      printRegel1 += Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel2 = Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel2 += gezicht.template[ 2 ]; // we nemen van elk gezicht in arr etc.  
      }
      // rechter kant
      printRegel2 += Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel3: string = Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel3 += gezicht.template[ 3 ];
      }
      // rechter kant
      printRegel3 += Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;

      // linker kant
      let printRegel4: string = Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;
      for ( let gezicht of gezichten ) {
         printRegel4 += gezicht.template[ 4 ];
      }
      // rechter kant
      printRegel4 += Kleur.magenta + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter;

      return [ printRegel0, printRegel1, printRegel2, printRegel3, printRegel4 ];
   }

   static printAlles ( aantalGezichten: number, tekst: string ) {
      const arrayPrintRegels = this.maakPrintRegels( aantalGezichten );
      const underscore = '_';
      const breedte: number = this.randbreedte + aantalGezichten * 13 + this.randbreedte;
      const lengteText = tekst.length + 2;
      const aantalPositiesTekstregel = this.randbreedte + aantalGezichten * 13 + this.randbreedte - lengteText;
      const kaderDecoErvoor = aantalPositiesTekstregel / 2;
      const kaderdecoErachter = aantalPositiesTekstregel / 2 + 2;
      let tekstErboven: string = this.kaderdecoratie.repeat( kaderDecoErvoor );
      tekstErboven += " " + tekst + " " + this.kaderdecoratie.repeat( kaderdecoErachter );
      tekstErboven = tekstErboven.substring( 0, breedte );

      console.log();
      console.log( Kleur.grijs + '  ' + underscore.repeat( breedte - 4 ) + '  ' + Kleur.sluiter );
      console.log( Kleur.grijs + ' /' + this.kaderdecoratie.repeat( breedte - 4 ) + '\\' + Kleur.sluiter );
      console.log( Kleur.grijs + '/' + this.kaderdecoratie.repeat( breedte - 2 ) + '\\' + Kleur.sluiter );
      console.log( Kleur.groen + this.kaderdecoratie.repeat( breedte ) + Kleur.sluiter );
      console.log( Kleur.magenta + tekstErboven + Kleur.sluiter );
      console.log( Kleur.rood + this.kaderdecoratie.repeat( breedte ) + Kleur.sluiter );
      console.log( Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdecoratie.repeat( this.randbreedte ) + Kleur.sluiter );

      console.log( arrayPrintRegels[ 0 ] );
      console.log( arrayPrintRegels[ 1 ] );
      console.log( arrayPrintRegels[ 2 ] );
      console.log( arrayPrintRegels[ 3 ] );
      console.log( arrayPrintRegels[ 4 ] );

      console.log( Kleur.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdecoratie.repeat( this.randbreedte ) + '\x1b[0m' );
      console.log( Kleur.rood + this.kaderdecoratie.repeat( breedte ) + Kleur.sluiter );
      console.log( Kleur.magenta + this.kaderdecoratie.repeat( breedte ) + Kleur.sluiter );
      console.log( Kleur.groen + this.kaderdecoratie.repeat( breedte ) + Kleur.sluiter );
      console.log();
   }

   static async interactief () {
      const rl = readline.createInterface( { input, output } );
      for ( let index = 0; index < 100; index++ ) {

         // 1ste vraag
         let vraag1 = `Hoeveel gezichtjes wil je hieronder op rij?: ${this.defaultAantalGezichten}  `;
         const antwoord: string = await rl.question( vraag1 );

         if ( antwoord === "z" ) {
            rl.close();
            return;
         }

         if ( antwoord !== "" ) {
            this.defaultAantalGezichten = Number( antwoord );
         }

         // 2de vraag
         const aantwoord = await rl.question( `
Welke tekst moet erboven:
bevestig *${this.defaultTekst}* met enter of 
typ nieuwe tekst en bevestig met enter: ` );

         if ( aantwoord === "" ) {
            const aantalGezichten: number = this.defaultAantalGezichten;
            this.printAlles( aantalGezichten, this.defaultTekst );
            this.printAlles( aantalGezichten, this.defaultTekst );
            this.printAlles( aantalGezichten, this.defaultTekst );
            this.printAlles( aantalGezichten, this.defaultTekst );
         }
         else {
            const aantalGezichten: number = this.defaultAantalGezichten;
            this.printAlles( aantalGezichten, aantwoord );
            this.defaultTekst = aantwoord;
         }
      }
      rl.close();
   }
}

Ascii6.interactief();


