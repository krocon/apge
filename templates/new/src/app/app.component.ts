import { Component } from '@angular/core';
import { __capcp__NavComponent } from "./__cp__-nav/__cp__-nav.component";
import { __capcp__AuthAjaxService } from "./__cp__-auth/service/__cp__-auth.ajax.service";
import { environment } from "../environments/environment";
import { __capcp__AuthGuardCanActivate } from "./__cp__-auth/__cp__-auth-guard-can-activate";
// import { __capcp____pascalentity__AjaxService } from "./__cp__-__kebabentity__-service/service/__cp__-__kebabentity__-ajax.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    __capcp__NavComponent.forRoot({
        routeTitles: {
          home: 'Herzlich willkommen!',
          login: 'Anmelden',
          demo: 'Demos',
          abmelden: 'Abmelden',
          setup: 'Einstellungen',
          impressum: 'Impressum, Kontakt & Hilfe',
          nutzungsbedingungen: 'Nutzungsbedingungen',
          datenschutz: 'Datenschutzerklärung'
        },
        logoutCounterVisible: true,
        menuIconsVisible: true,
      }
    );
    __capcp__AuthGuardCanActivate.forRoot({
      loginRoute: environment.loginRoute
    });
    __capcp__AuthAjaxService.forRoot(environment.authServiceConfig);

    // __capcp____pascalentity__AjaxService.forRoot(environment.__cp____pascalentity__Config);
  }

}
