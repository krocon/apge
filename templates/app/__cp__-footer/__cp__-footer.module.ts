import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__FooterComponent } from './__cp__-footer.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    __capitalizedCp__FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
  ],
  exports: [
    __capitalizedCp__FooterComponent
  ]
})
export class __capitalizedCp__FooterModule {
}
