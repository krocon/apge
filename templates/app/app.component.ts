import { Component } from '@angular/core';
import { __capitalizedCp__NavComponent } from "./__cp__-nav/__cp__-nav.component";
import { __capitalizedCp__AuthAjaxService } from "./__cp__-auth/service/__cp__-auth.ajax.service";
import { environment } from "../environments/environment";
import { __capitalizedCp__AuthGuardCanActivate } from "./__cp__-auth/__cp__-auth-guard-can-activate";
// import { __capitalizedCp____capitalizedEntity__AjaxService } from "./__cp__-__entity__-service/service/__cp__-__entity__-ajax.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    __capitalizedCp__NavComponent.forRoot({
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
    __capitalizedCp__AuthGuardCanActivate.forRoot({
      loginRoute: environment.loginRoute
    });
    __capitalizedCp__AuthAjaxService.forRoot(environment.authServiceConfig);

    // __capitalizedCp____capitalizedEntity__AjaxService.forRoot(environment.__cp____capitalizedEntity__Config);
  }

}
