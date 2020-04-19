import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { __capitalizedCp__AuthService } from './service/__cp__-auth.service';
import { __capitalizedCp__AuthAjaxService } from './service/__cp__-auth.ajax.service';
import { __capitalizedCp__AuthGuardCanActivate } from './__cp__-auth-guard-can-activate';
import { __capitalizedCp__AuthLogoutComponent } from './__cp__-logout/__cp__-auth-logout.component';
import { __capitalizedCp__ConfirmationModule } from "../__cp__-confirmation-dialog/__cp__-confirmation.module";
import { __capitalizedCp__LoginPageComponent } from "./__cp__-login/__cp__-login-page.component";
import { __capitalizedCp__AutofocusModule, } from "../__cp__-autofocus/__cp__-common.module";


const routes = [
  {path: 'anmelden', component: __capitalizedCp__LoginPageComponent},
  {path: 'abmelden', component: __capitalizedCp__AuthLogoutComponent},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,

    __capitalizedCp__ConfirmationModule,
    __capitalizedCp__AutofocusModule,
  ],
  entryComponents: [],
  declarations: [
    __capitalizedCp__AuthLogoutComponent,
    __capitalizedCp__LoginPageComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    __capitalizedCp__AuthService,
    __capitalizedCp__AuthAjaxService,
    __capitalizedCp__AuthGuardCanActivate
  ]
})
export class __capitalizedCp__AuthModule {
}

