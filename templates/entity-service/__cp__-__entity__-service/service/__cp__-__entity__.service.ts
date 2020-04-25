import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { __capitalizedCp____capitalizeEntity__AjaxService } from "./__cp__-__entity__-ajax.service";
import { __capitalizedCp____capitalizedEntity__DataIf } from "../data/__cp__-__entity__.data.if";

@Injectable({
  providedIn: 'root',
})
export class __capitalizedCp____capitalizeEntity__Service {

  constructor(
    private readonly ajaxService: __capitalizedCp____capitalizeEntity__AjaxService
  ) {
  }

  getById(id: any): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    return this.ajaxService.getById(id);
  }

  getAll(): Observable<__capitalizedCp____capitalizedEntity__DataIf[]> {
    return this.ajaxService.getAll();
  }

  insert(o: __capitalizedCp____capitalizedEntity__DataIf): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    return this.ajaxService.post(o);
  }

  update(o: __capitalizedCp____capitalizedEntity__DataIf): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    return this.ajaxService.put(o);
  }

  delete(id: any): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    return this.ajaxService.delete(id);
  }

}
