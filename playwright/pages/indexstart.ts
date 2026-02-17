import path from 'path';
import { test, type Page, expect, type Locator } from '@playwright/test';

export class IndexStart {
   readonly page: Page

   // locators textlinks (tl_) in groep leerbedrijf
   /**
    * textlink 
   */
   readonly tl_Aboutus: Locator;
   readonly tl_Onboardingtheteam: Locator;
   readonly tl_Testautomation: Locator;
   readonly tl_Opportunities: Locator;
   readonly tl_Derolvanhettestenindeict: Locator;

   // locators imagelinks (il_) in groep leerbedrijf
   readonly il_Aboutus: Locator;
   readonly il_Onboardingtheteam: Locator;
   readonly il_Testautomation: Locator;
   readonly il_Opportunities: Locator;
   readonly il_Derolvanhettestenindeict: Locator;

   readonly indexpage: Locator;

   constructor( page: Page ) {
      this.page = page;

      // locators textlinks (tl_) in groep leerbedrijf
      this.tl_Aboutus = page.getByRole( 'link', { name: 'About us' } );
      this.tl_Onboardingtheteam = page.getByRole( 'link', { name: 'Onboarding the team' } );
      this.tl_Testautomation = page.getByRole( 'link', { name: 'Testautomation' } );
      this.tl_Opportunities = page.getByRole( 'link', { name: 'Opportunities' } );
      this.tl_Derolvanhettestenindeict = page.getByRole( 'link', { name: 'De rol van testen in de ICT' } );

      // locators imagelinks (il_) in groep leerbedrijf   
      this.il_Aboutus = page.getByTestId( 'about-us' );
      this.il_Onboardingtheteam = page.getByTestId( 'onboarding-the-team' );
      this.il_Testautomation = page.getByTestId( 'testautomation' );
      this.il_Opportunities = page.getByTestId( 'opportunities' );
      this.il_Derolvanhettestenindeict = page.getByTestId( 'de-rol-van-het-testen-in-de-ict' );

      // other locators
      this.indexpage = page.getByRole( 'link', { name: 'Home' } );
   }
}