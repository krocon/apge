import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__MixDemoComponent } from './__cp__-mix-demo.component';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    __capitalizedCp__MixDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'mix',
        component: __capitalizedCp__MixDemoComponent,
      }
    ]),
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    __capitalizedCp__MixDemoComponent
  ]
})
export class __capitalizedCp__MixDemoModule {
}
