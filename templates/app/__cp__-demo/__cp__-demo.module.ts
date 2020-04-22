import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { __capitalizedCp__DemoComponent } from "./__cp__-demo.component";

const routes: Routes = [
  {
    path: '',
    component: __capitalizedCp__DemoComponent
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-fonts-demo/__cp__-fonts-demo.module').then(m => m.__capitalizedCp__FontsDemoModule)
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-forms-demo/__cp__-forms-demo.module').then(m => m.__capitalizedCp__FormsDemoModule)
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-buttons-demo/__cp__-buttons-demo.module').then(m => m.__capitalizedCp__ButtonsDemoModule)
  },
  {
    path: '',
    loadChildren: () => import('./__cp__-mix-demo/__cp__-mix-demo.module.js').then(m => m.__capitalizedCp__MixDemoModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FlexModule,
    MatButtonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    __capitalizedCp__DemoComponent
  ]
})
export class __capitalizedCp__DemoModule {
}
