import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capitalizedCp__DateStringToTextPipe } from "./__cp__-date-string-to-text.pipe";
import { __capitalizedCp__DateStringToShortTextPipe } from "./__cp__-date-string-to-short-text.pipe";
import { __capitalizedCp__DateStringToHtmlPipe } from "./__cp__-date-string-to-html.pipe";
import { __capitalizedCp__ReplaceTextPipe } from "./__cp__-replace-text.pipe";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    __capitalizedCp__DateStringToTextPipe,
    __capitalizedCp__DateStringToShortTextPipe,
    __capitalizedCp__DateStringToHtmlPipe,
    __capitalizedCp__ReplaceTextPipe,
  ],
  exports: [
    __capitalizedCp__DateStringToTextPipe,
    __capitalizedCp__DateStringToShortTextPipe,
    __capitalizedCp__DateStringToHtmlPipe,
    __capitalizedCp__ReplaceTextPipe,
  ]
})
export class __capitalizedCp__CommonPipesModule {
}

