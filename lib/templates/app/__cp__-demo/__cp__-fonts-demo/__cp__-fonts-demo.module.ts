import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__FontsDemoComponent } from './__cp__-fonts-demo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    __capitalizedCp__FontsDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'fonts',
        component: __capitalizedCp__FontsDemoComponent,
      }
    ]),
  ],
  providers: [
    __capitalizedCp__FontsDemoComponent
  ]
})
export class __capitalizedCp__FontsDemoModule {
}
