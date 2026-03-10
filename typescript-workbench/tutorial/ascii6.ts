import * as readline from 'node:readline/promises'; // node.js module om input van user in terminal te lezen en te verwerken in ts   
import { stdin as input, stdout as output } from 'node:process';

class Ascii6 {
   static kaderdecoratie: string = '*';
   static spatie: string = ' ';
   static randbreedte = 7;
   static grijs: string = "\x1b[90m";
   static rood: string = "\x1b[91m";
   static geel: string = "\x1b[93m";
   static blauw: string = "\x1b[94m";
   static paars: string = "\x1b[95m";
   static groen: string = "\x1b[92m";
   static kleurSluiter: string = "\x1b[0m";

   static A: string[] = [
      this.geel + String.raw`     ~~~     ` + this.kleurSluiter,
      this.geel + String.raw`   ((~^~))   ` + this.kleurSluiter,
      this.geel + String.raw`  '(|o_o|)'  ` + this.kleurSluiter,
      this.geel + String.raw`    (===)    ` + this.kleurSluiter,
      this.geel + String.raw`             ` + this.kleurSluiter,
   ];
   //#region meer gezichten
   static B: string[] = [
      String.raw`     ,.,     `,
      String.raw`    (( ))    `,
      String.raw`   (|oVo|)   `,
      String.raw`   ()\=/()   `,
      String.raw`   ()   ()   `
   ];

   static C: string[] = [
      String.raw`             `,
      String.raw`  ('('~')')  `,
      String.raw`  ('|*_*|')  `,
      String.raw`     \=/     `,
      String.raw`             `
   ];

   static D: string[] = [
      String.raw`     ,.,     `,
      String.raw`    ((())    `,
      String.raw`   (|*-*|)   `,
      String.raw`    c\=/c    `,
      String.raw`             `,
   ];

   static E: string[] = [
      String.raw`     .-.     `,
      String.raw`    (~ ~)    `,
      String.raw`    :o o:    `,
      String.raw`   (((_)))   `,
      String.raw`     '-'     `
   ];

   static F: string[] = [
      this.rood + String.raw`     ~I~     ` + this.kleurSluiter,
      this.rood + String.raw`    ('¯')    ` + this.kleurSluiter,
      this.rood + String.raw`    )Ø Ø(    ` + this.kleurSluiter,
      this.rood + String.raw`   ( (_) )   ` + this.kleurSluiter,
      this.rood + String.raw`     '-'     ` + this.kleurSluiter
   ];

   static G: string[] = [
      String.raw`     .-.     `,
      String.raw`  '((/"\))'  `,
      String.raw`  '(:o o:)'  `,
      String.raw`   (\(_)/)   `,
      String.raw`     \=/     `
   ];


   static H: string[] = [
      String.raw`     ,.,     `,
      String.raw`    (~ ~)    `,
      String.raw`   q:0 0:p   `,
      String.raw`    ((_))    `,
      String.raw`     'u'     `
   ];

   static I: string[] = [
      String.raw`   ,oOOOo,   `,
      String.raw`   o(""")o   `,
      String.raw`   o|* *|o   `,
      String.raw`   C((_))C   `,
      String.raw`     '='     `
   ];

   static II: string[] = [
      String.raw`    ,WW3,    `,
      String.raw`   o-(")-.   `,
      String.raw`   ||. 0||   `,
      String.raw`   C(._))C   `,
      String.raw`     ='      `
   ];

   static J: string[] = [
      String.raw`      ,      `,
      String.raw`  ,.'   '.,  `,
      String.raw`   |:o o:|   `,
      String.raw`    \(_)/    `,
      String.raw`      v      `
   ];

   static K: string[] = [
      String.raw`      ,      `,
      String.raw`    ,iIi,    `,
      String.raw`   (((()))   `,
      String.raw`   ))o_o((   `,
      String.raw`    '\=/'    `
   ];

   static L: string[] = [
      String.raw`             `,
      String.raw`   (@@@@@)   `,
      String.raw`   @)0 0(@   `,
      String.raw`   @((_))@   `,
      String.raw`     )=(     `
   ];

   static M: string[] = [
      String.raw`             `,
      String.raw` ( =(""")= ) `,
      String.raw` ,))|o o|((, `,
      String.raw` !( ( _ ) )! `,
      String.raw`     '-'     `
   ];

   static N: string[] = [
      String.raw`  ( \   / )  `,
      String.raw`   .\\_//.   `,
      String.raw`    )9 9(    `,
      String.raw`   ( (_) )   `,
      String.raw`     '"'     `,
   ];

   static NN: string[] = [
      String.raw`  ( \   / )  `,
      String.raw`   .\\_//.   `,
      String.raw`    )6 6(    `,
      String.raw`   ( (_) )   `,
      String.raw`     '"'     `,
   ];

   static NNN: string[] = [
      String.raw`  ( \   / )  `,
      String.raw`   .\\_//.   `,
      String.raw`    )d b(    `,
      String.raw`   ( (_) )   `,
      String.raw`     '"'     `,
   ];

   static O: string[] = [
      String.raw`             `,
      String.raw`   (\___/)   `,
      String.raw`    )o o(    `,
      String.raw`  (_(. .)_)  `,
      String.raw`             `
   ];

   static P: string[] = [
      String.raw`             `,
      String.raw`   ((___))   `,
      String.raw`    )* *(    `,
      String.raw`  (==(_)==)  `,
      String.raw`             `
   ];
   //#endregion

   static arrayGezichten = [
      this.A,
      this.B,
      this.C,
      this.D,
      this.E,
      this.F,
      this.G,
      this.H,
      this.I,
      this.II,
      this.J,
      this.K,
      this.L,
      this.M,
      this.N,
      this.NN,
      this.NNN,
      this.O,
      this.P
   ];

   static maakPrintRegels ( aantalgezichten: number ): string[] {
      let gezichten = [];
      // random selectie van gezichten
      for ( let index = 0; index < aantalgezichten; index++ ) {
         const rand = Math.floor( Math.random() * ( this.arrayGezichten.length ) );
         gezichten.push( this.arrayGezichten[ rand ] ); // bij elke loop wordt een random gekozen gezicht toegevoegd
      }

      // linker kant van de regel
      let printregel0: string = this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;
      // lettertekens van gezichten
      for ( let gezicht of gezichten ) {
         printregel0 += gezicht[ 0 ]; // we nemen van elk gezicht in arr de bovenste string
      }
      // rechter kant van de regel
      printregel0 += this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;

      // linker kant
      let printregel1: string = this.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;
      // lettertekens van gezichten
      for ( let gezicht of gezichten ) {
         printregel1 += gezicht[ 1 ]; // we nemen van elk gezicht in arr de op 1 na bovenste string
      }
      // rechter kant
      printregel1 += this.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;

      // linker kant
      let printregel2 = this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;
      for ( let gezicht of gezichten ) {
         printregel2 += gezicht[ 2 ]; // we nemen van elk gezicht in arr etc.  
      }
      // rechter kant
      printregel2 += this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;

      // linker kant
      let printregel3: string = this.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;
      for ( let gezicht of gezichten ) {
         printregel3 += gezicht[ 3 ];
      }
      // rechter kant
      printregel3 += this.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;

      // linker kant
      let printregel4: string = this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;
      for ( let gezicht of gezichten ) {
         printregel4 += gezicht[ 4 ];
      }
      // rechter kant
      printregel4 += this.paars + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter;

      return [ printregel0, printregel1, printregel2, printregel3, printregel4 ];
   }

   static logGezichtenTeam ( aantalGezichten: number, text: string ) {

      const positiesRegel: number = aantalGezichten * 13 + this.randbreedte + this.randbreedte;

      const aantalKaderDecoraties: number = aantalGezichten * 13 + this.randbreedte + this.randbreedte; // elke gezicht is 13 posities, 5 erbij voor l kant en 5 voor r kant
      const lengteText = text.length + 2;
      const resterendeSterretjes = aantalGezichten * 13 + this.randbreedte + this.randbreedte - lengteText;
      const resterendeSterretjesErvoor = resterendeSterretjes / 2;
      const resterendeSterretjesErachter = resterendeSterretjes / 2 + 2;
      const meetTheTeam: string = this.kaderdecoratie.repeat( resterendeSterretjesErvoor ) + " " + text + " " + this.kaderdecoratie.repeat( resterendeSterretjesErachter );
      const mtt: string = meetTheTeam.substring( 0, aantalKaderDecoraties );
      const underscore = '_';

      console.log();
      //console.log( this.grijs + '  ' + underscore.repeat( aantalKaderDecoraties - 4 ) + '  ' + this.kleurSluiter );
      console.log( this.grijs + '  ' + this.kaderdecoratie.repeat( aantalKaderDecoraties - 4 ) + ' ' + this.kleurSluiter );
      console.log( this.grijs + ' ' + this.kaderdecoratie.repeat( aantalKaderDecoraties - 2 ) + ' ' + this.kleurSluiter );
      console.log( this.groen + this.kaderdecoratie.repeat( aantalKaderDecoraties ) + this.kleurSluiter );
      console.log( this.paars + mtt + this.kleurSluiter );
      console.log( '\x1b[91m' + this.kaderdecoratie.repeat( aantalKaderDecoraties ) + '\x1b[0m' );
      console.log( this.geel + this.kaderdecoratie.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdecoratie.repeat( this.randbreedte ) + this.kleurSluiter );

      const ar = this.maakPrintRegels( aantalGezichten )
      for ( let regel of ar ) {
         console.log( regel );
      }

      console.log( '\x1b[93m' + this.kaderdecoratie.repeat( this.randbreedte ) + this.spatie.repeat( aantalGezichten * 13 ) + this.kaderdecoratie.repeat( this.randbreedte ) + '\x1b[0m' );
      console.log( '\x1b[91m' + this.kaderdecoratie.repeat( aantalKaderDecoraties ) + '\x1b[0m' );
      console.log( '\x1b[95m' + this.kaderdecoratie.repeat( aantalKaderDecoraties ) + '\x1b[0m' );
      console.log( '\x1b[92m' + this.kaderdecoratie.repeat( aantalKaderDecoraties ) + '\x1b[0m' );
      console.log();

      // console.log( "\x1b[90mBright Black (Gray)\x1b[0m" );
      // console.log( "\x1b[91mBright Red\x1b[0m" );
      // console.log( "\x1b[92mBright Green\x1b[0m" );
      // console.log( "\x1b[93mBright Yellow\x1b[0m" );
      // console.log( "\x1b[94mBright Blue\x1b[0m" );
      // console.log( "\x1b[95mBright Magenta\x1b[0m" );
      // console.log( "\x1b[96mBright Cyan\x1b[0m" );
      // console.log( "\x1b[97mBright White\x1b[0m" );
   }

   static async interactief () {
      const rl = readline.createInterface( { input, output } );
      let defaultAntwoord: string = ' tekst hier ';
      let defaultnumber: number = 3;

      for ( let index = 0; index < 100; index++ ) {
         // 1ste vraag
         const antwoord: string = await rl.question( `
Hoeveel gezichtjes wil je hieronder op rij?:
bevestig *${defaultnumber}* met enter of
typ hier nieuw aantal: ` );

         if ( antwoord === "z" ) {
            rl.close();
            return;
         }

         if ( antwoord !== "" ) {
            defaultnumber = Number( antwoord );
         }

         // 2de vraag
         const aantwoord = await rl.question( `
Welke tekst moet erboven:
bevestig *${defaultAntwoord}* met enter of 
typ nieuwe tekst en bevestig met enter: ` );

         if ( aantwoord === "" ) {
            const aantalGezichten: number = defaultnumber;
            this.logGezichtenTeam( aantalGezichten, defaultAntwoord );
         }
         else {
            const aantalGezichten: number = defaultnumber;
            this.logGezichtenTeam( aantalGezichten, aantwoord );
            defaultAntwoord = aantwoord;
         }
      }
      rl.close();
   }
}

Ascii6.interactief();