import { Page, Locator } from '@playwright/test';

export class LoginPage {

   url: string;
   fieldUserName: Locator;
   fieldPassword: Locator;
   buttonLogin: Locator;

   constructor( private page: Page ) {
      this.url = 'https://bee-ids-test.azurewebsites.net/realms/bee-ideas-testing-realm/protocol/openid-connect/auth?client_id=angular-app-client&redirect_uri=https%3A%2F%2Fit-talenten-portaal-test-it-talenten-webapp-test.iapmkw.easypanel.host%2Ftalent&state=9afb2cc1-70cf-4453-b9cb-eaf1f4b982d3&response_mode=fragment&response_type=code&scope=openid&nonce=75a68cf7-2ed9-4988-a72a-992a7741c8d5&code_challenge=cF4MzdBXfuJNnjEIToWNnAQWxp8JsqptOCW5HVE-zW0&code_challenge_method=S256%27';
      this.fieldUserName = page.locator( '#username' );
      this.fieldPassword = page.locator( '#password' );
      this.buttonLogin = page.getByRole( 'button', { name: 'Sign In' } );
   }

   async goto () {
      await this.page.goto( this.url );
   }

   async login ( username: string, password: string ) {
      await this.fieldUserName.fill( username );
      await this.fieldPassword.fill( password );
      await this.buttonLogin.click();
   }


   //await LoginPage.Login( 'davien', '123Huppakee' );

   // async loginKees ( username: string, password: string ) {

   //    await this.fieldUserName.fill( 'username' );

   //    await this.page.fill( '#password', password );

   //    await this.page.getByRole( 'button', { name: 'Sign In' } ).click();

   // }

   // async loginDavien ( username: string, password: string ) {

   //    await this.fieldUserName.fill( 'username' );

   //    await this.page.fill( '#password', password );

   //    await this.page.getByRole( 'button', { name: 'Sign In' } ).click();

   // }

}