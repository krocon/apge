import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { __capitalizedCp__NavComponent } from "./__cp__-nav.component";
import { __capitalizedCp__LogoModule } from "../__cp__-logo/__cp__-logo.module";
import { __capitalizedCp__FooterModule } from "../__cp__-footer/__cp__-footer.module";
import { __capitalizedCp__CounterModule } from "../__cp__-count/__cp__-counter.module";
import { __capitalizedCp__CommonPipesModule } from "../__cp__-common-pipes/__cp__-common-pipes.module";
import { __capitalizedCp__CommonModule } from "../__cp__-common/__cp__-common.module";


@NgModule({
  declarations: [
    __capitalizedCp__NavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    __capitalizedCp__LogoModule,
    __capitalizedCp__FooterModule,
    __capitalizedCp__CounterModule,
    __capitalizedCp__CommonPipesModule,
    __capitalizedCp__CommonModule
  ],
  exports: [
    __capitalizedCp__NavComponent
  ]
})
export class __capitalizedCp__NavModule {
}
