class Ascii5 {

   //#region en
   //Faces by Sher^
   static A: string[] = [
      String.raw`             `,
      String.raw`     ,.,     `,
      String.raw`   ((~"~))   `,
      String.raw`  '(|o_o|)'  `,
      String.raw`  ,..\=/..,  `
   ];

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
      String.raw`   (.\=/.)   `,
      String.raw`             `
   ];

   static D: string[] = [
      String.raw`             `,
      String.raw`     ,.,     `,
      String.raw`    ((())    `,
      String.raw`   (|*-*|)   `,
      String.raw`    c\=/c    `
   ];

   static E: string[] = [
      String.raw`     .-.     `,
      String.raw`    (~ ~)    `,
      String.raw`    :o o:    `,
      String.raw`   (((_)))   `,
      String.raw`     '-'     `
   ];

   static F: string[] = [
      String.raw`     ~I~     `,
      String.raw`    ('¯')    `,
      String.raw`    )Ø Ø(    `,
      String.raw`   ( (_) )   `,
      String.raw`     '-'     `
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
      String.raw`     '"'     `
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
      this.J,
      this.K,
      this.L,
      this.M,
      this.N,
      this.O,
      this.P
   ];

   static createTeam ( aantal: number ): string[] {
      let arr = [];
      for ( let index = 0; index < aantal; index++ ) {
         const rand = Math.floor( Math.random() * ( this.arrayGezichten.length ) );
         arr.push( this.arrayGezichten[ rand ] );
      }

      let string0: string = '*****';
      for ( let a of arr ) {
         string0 += a[ 0 ];
      }
      string0 += '*****';

      let string1: string = '*****';
      for ( let a of arr ) {
         string1 += a[ 1 ];
      }
      string1 += '*****';

      let string2: string = '*****';
      for ( let a of arr ) {
         string2 += a[ 2 ];
      }
      string2 += '*****';

      let string3: string = '*****';
      for ( let a of arr ) {
         string3 += a[ 3 ];
      }
      string3 += '*****';

      let string4: string = '*****';
      for ( let a of arr ) {
         string4 += a[ 4 ];
      }
      string4 += '*****';

      const teamGezichten: string[] = [ string0, string1, string2, string3, string4 ];
      return teamGezichten;
   }

   /**
    * We loggen continue om de output te zien zodat we de code ook weer kunnen verbeteren en dingen kunnen toevoegen
    */
   static log ( aantal: number ) {
      const aantalSterren: number = aantal * 13 + 10;
      const ster: string = '*';
      const spatie: string = ' ';
      const meetTheTeam: string = ster.repeat( aantal * 13 / 2 - 3 ) + ' MEET THE TEAM ' + ster.repeat( aantal * 13 / 2 - 1 );
      const mtt: string = meetTheTeam.substring( 0, aantalSterren );
      console.log( ster.repeat( aantalSterren ) );
      console.log( mtt );
      console.log( ster.repeat( aantalSterren ) );

      for ( let a of this.createTeam( aantal ) ) {
         console.log( a );
      }

      console.log( '*****' + spatie.repeat( aantal * 13 ) + '*****' );
      console.log( ster.repeat( aantalSterren ) );
      console.log( ster.repeat( aantalSterren ) );
      console.log( ster.repeat( aantalSterren ) );
      console.log();
   }
}

Ascii5.log( 7 );
