import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __capcp____pascalentity__AjaxService } from "./service/__cp__-__entity__-ajax.service";
import { __capcp____pascalentity__Service } from "./service/__cp__-__entity__.service";


@NgModule({
  providers: [
    __capcp____pascalentity__Service,
    __capcp____pascalentity__AjaxService
  ],
  imports: [
    CommonModule
  ]
})
export class __capcp____pascalentity__ServiceModule { }
