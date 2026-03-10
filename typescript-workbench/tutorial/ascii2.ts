class Ascii2 {

   //#region gezichten
   //Faces by Sher^
   static Agezicht: string = `
      ,.,
    ((~"~))
   '(|o_o|)'
   ,..\\=/..,
   `;

   static Bgezicht: string = `
      ,.,
     ((())
    (|o_o|)
    ()\\=/()
    ()   ()
`;

   // de twee hierboven zijn gecorrigeerd tov de vorige versie. Nu worden ze wel goed in de log weergegeven.
   // dus corrigeer ook de gezichten hieronder op dezelfde manier. 
   static Cgezicht: string = `
   ('('~')')
   ('|*_*|')
    (.\=/.)
    '¯\,/¯'
`;

   static Dgezicht: string = `
      ,.,
     ((())
    (|*_*|)
     c\=/c
`;

   static Egezicht: string = `
      .-.
     (~ ~)
     :o o:
    (((_)))
      '-'
`;

   static Fgezicht: string = `
      ~I~
     ('¯')
     )Ø Ø(
    ( (_) )
      '-'
`;

   static Ggezicht: string = `
      .-.
   '((/"\))'
   '(:o o:)'
    (\(_)/)
      \=/
`;

   static Hgezicht: string = `
      ,.,
     (~ ~)
    q:0 0:p
     ((_))
      'u'
`;

   static Igezicht: string = `
    ,oOOOo,
    o(""")o
    o|* *|o
    C((_))C
      '='
`;

   static Jgezicht: string = `
       ,
   ,.'  '.,
    |:o o:|
     \(_)/
       v
`;

   static Kgezicht: string = `     
       ,
     ,iIi,
    (((()))
    ))o_o((
     '\=/'
`;

   static Lgezicht: string = `     
    (@@@@@)
    @)0 0(@
    @((_))@
      )=(
`;

   static Mgezicht: string = `         
  ( =(""")= )
  ,))|o o|((,
    !((_))!
      '-'
Sher^`;

   static Ngezicht: string = `
    (\   /)
    .\\_//.
     )0 0(
    ( (_) )
      '"' 
`;

   static Ogezicht: string = `      
    (\___/)
     )o o(
    (_(_)_)
`;

   static Pgezicht: string = `    
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

   static gezicht: string = `
      ,.,            ,.,
    ((~"~))         ((())
   '(|o_o|)'       (|o_o|)
   ,..\\=/..,       ()\\=/()
                   ()   ()  
   `;


   /**
    * We gebruiken de log nu om te zien hoe we de code zo kunnen veranderen dat we meerdere
    * gezichtjes naast elkaar kunnen printen.
    * In deze eerste versie staan ze nog onder elkaar.  
    */
   static log () {
      //console.log( this.gezichten[ 0 ], this.gezichten[ 1 ] );
      // // werkt ook alleen onder elkaar:
      // for ( let gezicht of this.gezichten ) {
      //    console.log( gezicht );
      // }
      console.log( this.gezicht );
      // what if we replace the \ with \\?
      // We ask AI and get this suggestion:
      //static gezicht: string = String.raw`
      //    ,.,            ,.,
      //  ((~"~))         ((())
      // '(|o_o|)'       (|o_o|)
      // ,..\=/..,       ()\=/()
      //                 ()   ()  
      // `;
   }
}

// Een class met alleen static properties en methods hoef je niet aan te maken met new en heeft ook geen constructor nodig.
// De aanroep is heel eenvoudig:
Ascii2.log();