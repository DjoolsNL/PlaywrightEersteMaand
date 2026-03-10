class Ascii4 {

   //#region gezichten
   //Faces by Sher^
   static Agezicht: string[] = [
      String.raw`           `,
      String.raw`    ,.,    `,
      String.raw`  ((~"~))  `,
      String.raw` '(|o_o|)' `,
      String.raw` ,..\=/.., `
   ];

   static Bgezicht: string[] = [
      String.raw`   ,.,   `,
      String.raw`  (( ))  `,
      String.raw` (|oVo|) `,
      String.raw` ()\=/() `,
      String.raw` ()   () `
   ];

   // de twee hierboven zijn gecorrigeerd tov de vorige versie. Nu worden ze wel goed in de log weergegeven.
   // dus corrigeer ook de gezichten hieronder op dezelfde manier. 
   static Cgezicht: string[] = [
      String.raw`           `,
      String.raw` ('('~')') `,
      String.raw` ('|*_*|') `,
      String.raw`  (.\=/.)  `,
      String.raw`  '¯\,/¯'  `
   ];

   static Dgezicht: string[] = [
      String.raw`         `,
      String.raw`   ,.,   `,
      String.raw`  ((())  `,
      String.raw` (|*-*|) `,
      String.raw`  c\=/c  `
   ];

   static Egezicht: string[] = [
      String.raw`   .-.   `,
      String.raw`  (~ ~)  `,
      String.raw`  :o o:  `,
      String.raw` (((_))) `,
      String.raw`   '-'   `
   ];

   static Fgezicht: string[] = [
      String.raw`   ~I~   `,
      String.raw`  ('¯')  `,
      String.raw`  )Ø Ø(  `,
      String.raw` ( (_) ) `,
      String.raw`   '-'   `
   ];

   static Ggezicht: string[] = [
      String.raw`    .-.    `,
      String.raw` '((/"\))' `,
      String.raw` '(:o o:)' `,
      String.raw`  (\(_)/)  `,
      String.raw`    \=/    `
   ];


   static Hgezicht: string[] = [
      String.raw`   ,.,   `,
      String.raw`  (~ ~)  `,
      String.raw` q:0 0:p `,
      String.raw`  ((_))  `,
      String.raw`   'u'   `
   ];

   static Igezicht: string[] = [
      String.raw` ,oOOOo, `,
      String.raw` o(""")o `,
      String.raw` o|* *|o `,
      String.raw` C((_))C `,
      String.raw`   '='   `
   ];

   static Jgezicht: string[] = [
      String.raw`     ,     `,
      String.raw` ,.'   '., `,
      String.raw`  |:o o:|  `,
      String.raw`   \(_)/   `,
      String.raw`     v     `
   ];

   static Kgezicht: string[] = [
      String.raw`    ,    `,
      String.raw`  ,iIi,  `,
      String.raw` (((())) `,
      String.raw` ))o_o(( `,
      String.raw`  '\=/'  `
   ];

   static Lgezicht: string[] = [
      String.raw`         `,
      String.raw` (@@@@@) `,
      String.raw` @)0 0(@ `,
      String.raw` @((_))@ `,
      String.raw`   )=(   `
   ];

   static Mgezicht: string[] = [
      String.raw`             `,
      String.raw` ( =(""")= ) `,
      String.raw` ,))|o o|((, `,
      String.raw` !( ( _ ) )! `,
      String.raw`     '-'     `
   ];

   static Ngezicht: string[] = [
      String.raw` ( \   / ) `,
      String.raw`  .\\_//.  `,
      String.raw`   )0 0(   `,
      String.raw`  ( (_) )  `,
      String.raw`    '"'    `
   ];

   static Ogezicht: string[] = [
      String.raw`           `,
      String.raw`  (\___/)  `,
      String.raw`   )o o(   `,
      String.raw` (_(. .)_) `,
      String.raw`           `
   ];

   static Pgezicht: string[] = [
      String.raw`           `,
      String.raw`  ((___))  `,
      String.raw`   )* *(   `,
      String.raw` (==(_)==) `,
      String.raw`           `
   ];
   //#endregion

   static gezichten = [
      this.Agezicht,
      this.Bgezicht,
      this.Cgezicht,
      this.Dgezicht,
      this.Egezicht,
      this.Fgezicht,
      this.Ggezicht,
      this.Hgezicht,
      this.Igezicht,
      this.Jgezicht,
      this.Kgezicht,
      this.Lgezicht,
      this.Mgezicht,
      this.Ngezicht,
      this.Ogezicht,
      this.Pgezicht
   ];

   /**
    * We loggen continue om de output te zien zodat we de code ook weer kunnen verbeteren en dingen kunnen toevoegen
    */
   static log () {

      // for ( let gezicht of this.gezichten ) {
      //    console.log( gezicht );
      // }
      console.log( '****************************************************************************************************************' );
      console.log( '************************************* TEAM  ********************************************************************' );
      console.log( '****************************************************************************************************************' );

      for ( let index = 0; index < this.Agezicht.length; index++ ) {

         console.log(
            '***' + this.Agezicht[ index ] +
            this.Ogezicht[ index ] +
            this.Igezicht[ index ] +
            this.Mgezicht[ index ] +
            this.Cgezicht[ index ] +
            this.Dgezicht[ index ] +
            this.Bgezicht[ index ] +
            this.Pgezicht[ index ] +
            this.Cgezicht[ index ] +
            this.Ggezicht[ index ] + "***" )

      }
      console.log( '***                                                                                                          ***' );
      console.log( '****************************************************************************************************************' );
      console.log( '****************************************************************************************************************' );
      console.log( '****************************************************************************************************************' );
      console.log();



      // for ( let line of AAgezicht ) {
      //    console.log( line );
      // }
      //console.log( AAgezicht );
   }
}

// Een class met alleen static properties en methods hoef je niet aan te maken met new en heeft ook geen constructor nodig.
// De aanroep is heel eenvoudig:
Ascii4.log();