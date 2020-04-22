import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { __capitalizedCp__SettingsComponent } from './__cp__-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { __capitalizedCp__SettingsService } from "./service/__cp__-settings.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capitalizedCp__SettingsComponent
      }
    ]),
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [],
  declarations: [
    __capitalizedCp__SettingsComponent
  ],
  providers: [
    __capitalizedCp__SettingsService
  ]
})
export class __capitalizedCp__SettingsModule {

  constructor(@Optional() @SkipSelf() parentModule: __capitalizedCp__SettingsModule) {
    if (parentModule) {
      throw new Error(
        '__capitalizedCp__SettingsModule is already loaded. Import it in the AppModule only.');
    }
  }

}
