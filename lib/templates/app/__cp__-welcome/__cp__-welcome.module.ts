import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { __capitalizedCp__WelcomeComponent } from "./__cp__-welcome.component";
import { ExtendedModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    __capitalizedCp__WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: __capitalizedCp__WelcomeComponent
      }
    ]),
    ExtendedModule,
  ]
})
export class __capitalizedCp__WelcomeModule {
}
