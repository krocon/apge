import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__ButtonsDemoComponent } from './__cp__-buttons-demo.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    __capitalizedCp__ButtonsDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'buttons',
        component: __capitalizedCp__ButtonsDemoComponent,
      }
    ]),
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    __capitalizedCp__ButtonsDemoComponent
  ]
})
export class __capitalizedCp__ButtonsDemoModule {
}
