import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { __capitalizedCp____capitalizedEntity__DataIf } from "../data/__cp__-__entity__.data.if";

@Injectable({
  providedIn: 'root',
})
export class __capitalizedCp____capitalizeEntity__AjaxService {

  // TODO see url definitions (__cp____capitalizeEntity__Config) in environment.ts and environment.prod.ts
  // see app.component.ts: __capitalizedCp____capitalizeEntity__AjaxService.forRoot(environment.__cp____capitalizeEntity__Config);

  private static readonly config = {
    getUrl: 'assets/mock-data/__entity__/get.json',
    getAllUrl: 'assets/mock-data/__entity__/getall.json',
    deleteUrl: 'assets/mock-data/__entity__/delete.json',
    postUrl: 'assets/mock-data/__entity__/post.json',
    putUrl: 'assets/mock-data/__entity__/put.json'
  };

  constructor(
    private readonly http: HttpClient
  ) {
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  getById(id: any): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    let url = __capitalizedCp____capitalizeEntity__AjaxService.config.getUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capitalizedCp____capitalizedEntity__DataIf>(url);
    }
    url = url.replace(/:id/g, id);
    return this.http.get<__capitalizedCp____capitalizedEntity__DataIf>(url);
  }

  getAll(): Observable<__capitalizedCp____capitalizedEntity__DataIf[]> {
    let url = __capitalizedCp____capitalizeEntity__AjaxService.config.getAllUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capitalizedCp____capitalizedEntity__DataIf[]>(url);
    }
    return this.http.get<__capitalizedCp____capitalizedEntity__DataIf[]>(url);
  }

  post(o: __capitalizedCp____capitalizedEntity__DataIf): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    let url = __capitalizedCp____capitalizeEntity__AjaxService.config.postUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capitalizedCp____capitalizedEntity__DataIf>(url);
    }
    return this.http.post<__capitalizedCp____capitalizedEntity__DataIf>(url, o);
  }

  put(o: __capitalizedCp____capitalizedEntity__DataIf): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    let url = __capitalizedCp____capitalizeEntity__AjaxService.config.putUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capitalizedCp____capitalizedEntity__DataIf>(url);
    }
    return this.http.put<__capitalizedCp____capitalizedEntity__DataIf>(url, o);
  }

  delete(id: any): Observable<__capitalizedCp____capitalizedEntity__DataIf> {
    let url = __capitalizedCp____capitalizeEntity__AjaxService.config.deleteUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<__capitalizedCp____capitalizedEntity__DataIf>(url);
    }
    url = url.replace(/:id/g, id);
    return this.http.delete<__capitalizedCp____capitalizedEntity__DataIf>(url);
  }

}

