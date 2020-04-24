import { NgModule } from '@angular/core';
import { __capitalizedCp__DummyLogoComponent } from "./__cp__dummy-logo.component";
import { __capitalizedCp__DeutscheBahnLogoComponent } from "./__cp__deutsche-bahn-logo.component";
import { __capitalizedCp__DeutscheBankLogoComponent } from "./__cp__deutsche-bank-logo.component";
import { __capitalizedCp__LufthansaLogoComponent } from "./__cp__lufthansa-logo.component";

// TODO a) enable or insert your logo component. b) delete other logo components.

@NgModule({
  imports: [],
  declarations: [
    __capitalizedCp__DummyLogoComponent,
    __capitalizedCp__DeutscheBahnLogoComponent,
    __capitalizedCp__DeutscheBankLogoComponent,
    __capitalizedCp__LufthansaLogoComponent
  ],
  exports: [
    __capitalizedCp__DummyLogoComponent,
    // __capitalizedCp__DeutscheBahnLogoComponent,
    // __capitalizedCp__DeutscheBankLogoComponent,
    // __capitalizedCp__LufthansaLogoComponent
  ]
})
export class __capitalizedCp__LogoModule {
}
