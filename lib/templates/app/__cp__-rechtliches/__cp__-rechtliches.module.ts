import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { __capitalizedCp__DatenschutzPage } from "./__cp__-datenschutz/__cp__-datenschutz.page";
import { __capitalizedCp__ImprintPage } from "./__cp__-imprint/__cp__-imprint.page";
import { __capitalizedCp__NutzungsbedingungenPage } from "./__cp__-nutzungsbedingungen/__cp__-nutzungsbedingungen.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capitalizedCp__DatenschutzPage,
        data: {depth: 1}
      },
      {
        path: 'datenschutz',
        component: __capitalizedCp__DatenschutzPage,
        data: {depth: 1}
      },
      {
        path: 'impressum',
        component: __capitalizedCp__ImprintPage,
        data: {depth: 1}
      },
      {
        path: 'nutzungsbedingungen',
        component: __capitalizedCp__NutzungsbedingungenPage,
        data: {depth: 1}
      }
    ]),
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    __capitalizedCp__DatenschutzPage,
    __capitalizedCp__ImprintPage,
    __capitalizedCp__NutzungsbedingungenPage
  ],
  providers: []
})
export class __capitalizedCp__RechtlichesModule {
}
