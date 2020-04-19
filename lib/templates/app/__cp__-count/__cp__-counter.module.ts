import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__CountdownComponent } from './__cp__-countdown.component';
import { __capitalizedCp__CountupComponent } from './__cp__-countup.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    __capitalizedCp__CountdownComponent,
    __capitalizedCp__CountupComponent
  ],
  exports: [
    __capitalizedCp__CountdownComponent,
    __capitalizedCp__CountupComponent
  ]
})
export class __capitalizedCp__CounterModule {
}
