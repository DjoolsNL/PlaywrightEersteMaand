class Ascii3 {

   //#region gezichten
   //Faces by Sher^
   static Agezicht: string = String.raw`
      ,.,
    ((~"~))
   '(|o_o|)'
   ,..\=/..,
   `;

   static Bgezicht: string = String.raw`
      ,.,
     ((())
    (|o_o|)
    ()\=/()
    ()   ()
`;

   // de twee hierboven zijn gecorrigeerd tov de vorige versie. Nu worden ze wel goed in de log weergegeven.
   // dus corrigeer ook de gezichten hieronder op dezelfde manier. 
   static Cgezicht: string = String.raw`
   ('('~')')
   ('|*_*|')
    (.\=/.)
    '¯\,/¯'
`;

   static Dgezicht: string = String.raw`
      ,.,
     ((())
    (|*_*|)
     c\=/c
`;

   static Egezicht: string = String.raw`
      .-.
     (~ ~)
     :o o:
    (((_)))
      '-'
`;

   static Fgezicht: string = String.raw`
      ~I~
     ('¯')
     )Ø Ø(
    ( (_) )
      '-'
`;

   static Ggezicht: string = String.raw`
      .-.
   '((/"\))'
   '(:o o:)'
    (\(_)/)
      \=/
`;

   static Hgezicht: string = String.raw`
      ,.,
     (~ ~)
    q:0 0:p
     ((_))
      'u'
`;

   static Igezicht: string = String.raw`
    ,oOOOo,
    o(""")o
    o|* *|o
    C((_))C
      '='
`;

   static Jgezicht: string = String.raw`
       ,
   ,.'  '.,
    |:o o:|
     \(_)/
       v
`;

   static Kgezicht: string = String.raw`     
       ,
     ,iIi,
    (((()))
    ))o_o((
     '\=/'
`;

   static Lgezicht: string = String.raw`     
    (@@@@@)
    @)0 0(@
    @((_))@
      )=(
`;

   static Mgezicht: string = String.raw`         
  ( =(""")= )
  ,))|o o|((,
    !((_))!
      '-'
Sher^`;

   static Ngezicht: string = String.raw`
    (\   /)
    .\\_//.
     )0 0(
    ( (_) )
      '"' 
`;

   static Ogezicht: string = String.raw`      
    (\___/)
     )o o(
    (_(_)_)
`;

   static Pgezicht: string = String.raw`    
    ((___))
     )* *(
   (==(_)==)
`;
   //#endregion

   static gezichten: string[] = [
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
    *   
    */
   static log () {

      // for ( let gezicht of this.gezichten ) {
      //    console.log( gezicht );
      // }
      const AAgezicht: string[] = [
         String.raw`   ,.,   `,
         String.raw` ((~"~)) `,
         String.raw`'(|o_o|)'`,
         String.raw`,..\=/..,`,
         String.raw`         `
      ];

      const BBgezicht: string[] = [
         String.raw`   ,.,    `,
         String.raw`  (( ))   `,
         String.raw` (|oVo|)  `,
         String.raw` ()\=/()  `,
         String.raw` ()   ()  `
      ];

      for ( let index = 0; index < AAgezicht.length; index++ ) {

         console.log( AAgezicht[ index ] + BBgezicht[ index ] )

      }

      // for ( let line of AAgezicht ) {
      //    console.log( line );
      // }
      //console.log( AAgezicht );
   }
}

// Een class met alleen static properties en methods hoef je niet aan te maken met new en heeft ook geen constructor nodig.
// De aanroep is heel eenvoudig:
Ascii3.log();