import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__FormsDemoComponent } from './__cp__-forms-demo.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    __capitalizedCp__FormsDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'forms',
        component: __capitalizedCp__FormsDemoComponent,
      }
    ]),
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [
    __capitalizedCp__FormsDemoComponent
  ]
})

export class __capitalizedCp__FormsDemoModule {
}
