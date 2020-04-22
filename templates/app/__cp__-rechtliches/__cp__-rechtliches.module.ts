import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { __capitalizedCp__DatenschutzComponent } from "./__cp__-datenschutz/__cp__-datenschutz.component";
import { __capitalizedCp__ImprintComponent } from "./__cp__-imprint/__cp__-imprint.component";
import { __capitalizedCp__NutzungsbedingungenComponent } from "./__cp__-nutzungsbedingungen/__cp__-nutzungsbedingungen.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capitalizedCp__DatenschutzComponent,
        data: {depth: 1}
      },
      {
        path: 'datenschutz',
        component: __capitalizedCp__DatenschutzComponent,
        data: {depth: 1}
      },
      {
        path: 'impressum',
        component: __capitalizedCp__ImprintComponent,
        data: {depth: 1}
      },
      {
        path: 'nutzungsbedingungen',
        component: __capitalizedCp__NutzungsbedingungenComponent,
        data: {depth: 1}
      }
    ]),
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    __capitalizedCp__DatenschutzComponent,
    __capitalizedCp__ImprintComponent,
    __capitalizedCp__NutzungsbedingungenComponent
  ],
  providers: []
})
export class __capitalizedCp__RechtlichesModule {
}
