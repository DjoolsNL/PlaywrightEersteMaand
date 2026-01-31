import path from 'path';
import { test, Page, expect, Locator } from '@playwright/test';

export function localIndexFile (): string {
   let part1 = `file://`;
   let part2 = path.resolve( `testwebsite/html-css/index.html` );
   return part1 + part2;
}

/**
 * Link type definition.
 * @property {string} textLinkName - The name of the text link.
 * @property {string} imageid - The test ID of the image link.
 * @property {string} htmlFile - The HTML file associated with the link.
 * @property {string} tag - The tag categorizing the link.
 */
type Link = {
   textLinkName: string;
   imageid: string;
   htmlFile: string;
   tag: string;
};

export class Index {
   page: Page;
   indexpage: Locator;
   public Links: Link[];
   constructor( page: Page ) {
      this.page = page;
      this.indexpage = this.page.getByRole( 'link', { name: 'Home' } );
      this.Links = [
         // --- leerbedrijf ---
         {
            textLinkName: "About us",
            imageid: "about-us",
            htmlFile: "testwebsite/html-css/a-leerbedrijf/about-us.html",
            tag: "leerbedrijf",
         },
         {
            textLinkName: "Onboarding the team",
            imageid: "onboarding-the-team",
            htmlFile: "testwebsite/html-css/a-leerbedrijf/onboarding-the-team.html",
            tag: "leerbedrijf"
         },
         {
            textLinkName: "Testautomation",
            imageid: "testautomation",
            htmlFile: "testwebsite/html-css/a-leerbedrijf/testautomation.html",
            tag: "leerbedrijf"
         },
         {
            textLinkName: "Opportunities",
            imageid: "opportunities",
            htmlFile: "testwebsite/html-css/a-leerbedrijf/opportunities.html",
            tag: "leerbedrijf"
         },
         {
            textLinkName: "De rol van testen in de ICT",
            imageid: "de-rol-van-testen-in-de-ict",
            htmlFile: "testwebsite/html-css/a-leerbedrijf/de-rol-van-testen-in-de-ict.html",
            tag: "leerbedrijf"
         },
         // --- educatief ---
         {
            textLinkName: "Onboarding skills en leerdoelen",
            imageid: "onboarding-skills-en-leerdoelen",
            htmlFile: "testwebsite/html-css/b-educatief/onboarding-skills-en-leerdoelen.html",
            tag: "educatief"
         },
         {
            textLinkName: "Basics webtesten met playwright",
            imageid: "basics-webtesting-met-playwright",
            htmlFile: "testwebsite/html-css/b-educatief/basics-webtesting-met-playwright.html",
            tag: "educatief"
         },
         {
            textLinkName: "Probleemoplossend vermogen",
            imageid: "probleemoplossend-vermogen",
            htmlFile: "testwebsite/html-css/b-educatief/probleemoplossend-vermogen.html",
            tag: "educatief"
         },
         {
            textLinkName: "Dossier AI",
            imageid: "dossier-ai",
            htmlFile: "testwebsite/html-css/b-educatief/dossier-ai.html",
            tag: "educatief"
         },
         {
            textLinkName: "Werken met codegen",
            imageid: "werken-met-codegen",
            htmlFile: "testwebsite/html-css/b-educatief/werken-met-codegen.html",
            tag: "educatief"
         },
         {
            textLinkName: "Enkele vaktermen",
            imageid: "enkele-vaktermen",
            htmlFile: "testwebsite/html-css/b-educatief/enkele-vaktermen.html",
            tag: "educatief"
         },
         // --- baanperspectief ---
         {
            textLinkName: "Kansen op de arbeidsmarkt",
            imageid: "kansen-op-de-arbeidsmarkt",
            htmlFile: "testwebsite/html-css/c-baanperspectief/kansen-op-de-arbeidsmarkt.html",
            tag: "baanperspectief"
         },
         {
            textLinkName: "Certificaten voor testers",
            imageid: "certificaten-voor-testers",
            htmlFile: "testwebsite/html-css/c-baanperspectief/certificaten-voor-testers.html",
            tag: "baanperspectief"
         },
         {
            textLinkName: "UWV ICT-beroepen in beeld",
            imageid: "uwv-ict-beroepen-in-beeld",
            htmlFile: "testwebsite/html-css/c-baanperspectief/uwv-ict-beroepen-in-beeld.html",
            tag: "baanperspectief"
         },
         {
            textLinkName: "Job search",
            imageid: "job-search",
            htmlFile: "testwebsite/html-css/c-baanperspectief/job-search.html",
            tag: "baanperspectief"
         },
         {
            textLinkName: "Je cv",
            imageid: "je-cv",
            htmlFile: "testwebsite/html-css/c-baanperspectief/je-cv.html",
            tag: "baanperspectief"
         },
         // --- portfolio ---
         {
            textLinkName: "Templates aanpak en voorbeelden",
            imageid: "templates-aanpak-en-voorbeelden",
            htmlFile: "testwebsite/html-css/d-portfolio/templates-aanpak-en-voorbeelden.html",
            tag: "portfolio"
         },
         {
            textLinkName: "Project ISTQB",
            imageid: "project-istqb",
            htmlFile: "testwebsite/html-css/d-portfolio/project-istqb.html",
            tag: "portfolio"
         },
         {
            textLinkName: "Project Reddit",
            imageid: "project-reddit",
            htmlFile: "testwebsite/html-css/d-portfolio/project-reddit.html",
            tag: "portfolio"
         },
         {
            textLinkName: "Project custom browser",
            imageid: "project-custom-browser",
            htmlFile: "testwebsite/html-css/d-portfolio/project-custom-browser.html",
            tag: "portfolio"
         },
         {
            textLinkName: "Project websitetemplate en website",
            imageid: "index",
            htmlFile: "testwebsite/html-css/index.html",
            tag: "portfolio"
         },
         // --- footer ---
         {
            textLinkName: "Locatie Bee LKQ",
            imageid: "",
            htmlFile: "testwebsite/html-css/e-footer/locatie-Bee-LKQ.html",
            tag: "footer"
         },
         {
            textLinkName: "Over deze site",
            imageid: "",
            htmlFile: "testwebsite/html-css/e-footer/over-deze-site.html",
            tag: "footer"
         }
      ];
   }

   /**
    * Verifies a textlink on the index page.
    * @param link - The link object containing details for verification.
    */
   async verifyLinkRoutine ( link: Link ) {
      if ( link.textLinkName !== "" ) {
         await this.page.getByRole( 'link', { name: link.textLinkName, exact: true } ).click();
         const url = this.page.url();
         expect( url ).toContain( link.htmlFile );

         await this.indexpage.click();
      }

      if ( link.imageid !== "" ) {
         await this.page.getByTestId( link.imageid ).click();
         const url = this.page.url();
         expect( url ).toContain( link.htmlFile ); link

         await this.indexpage.click();
      }
   }

   /**
    * Verifies all links on the index page that share a specific tag.
    * @param tag - The tag used to filter and verify links.
    */
   async verifyTaggedLinks ( tag: string ) {
      const filterByTag = this.Links.filter( item => item.tag === tag );
      for ( const link of filterByTag ) {
         await this.verifyLinkRoutine( link );
      }
   }

   /**
    * Verifies a single link on the index page using the HTML file name.
    * @param htmlFileName - The HTML file name associated with the link to verify.
    */
   async verifySingleLink ( htmlFileName: string ) {
      const filterByHtmlFileName = this.Links.filter( item => item.htmlFile === htmlFileName );
      for ( const link of filterByHtmlFileName ) {
         await this.verifyLinkRoutine( link );
      }
   }

   /**
    * Navigates to a link on the index page using the image ID.
    * @param imageid - The test ID of the image link to navigate to. 
    */
   async navigateToImageLink ( imageid: string ) {
      const a = this.Links.find( l => l.imageid === imageid );
      await this.page.getByTestId( a.imageid ).click();
   }

   /**
    * Navigates to a link on the index page using the text link name.
    * @param textLinkName - The name of the text link to navigate to.
    */
   async navigateToTextLink ( textLinkName: string ) {
      const a = this.Links.find( l => l.textLinkName === textLinkName );
      await this.page.getByRole( 'link', { name: a.textLinkName } ).click();
   }
}
