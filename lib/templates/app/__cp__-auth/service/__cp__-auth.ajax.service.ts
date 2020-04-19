/* tslint:disable:max-line-length */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestData } from '../data/login.request.data';
import { LoginResponseData } from '../data/login.response.data';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class __capitalizedCp__AuthAjaxService {

  private static readonly config = {
    mock: false,
    loginUrl: 'assets/mock-data/auth/login.json',
    logoutUrl: 'assets/mock-data/auth/logout.json',
    logoutMock: true,
  };

  constructor(
    private readonly http: HttpClient
  ) {
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  private static object2ParamString(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        const s1 = encodeURIComponent(p);
        const s2 = encodeURIComponent(obj[p]);
        str.push(`${s1}=${s2}`);
      }
    }
    return str.join('&');
  }


  login(loginData: LoginRequestData): Observable<LoginResponseData> {
    let url = __capitalizedCp__AuthAjaxService.config.loginUrl;
    if (url.indexOf('mock-data') > -1) {
      return this.http.get<LoginResponseData>(url);
    }
    // const para = Object.assign({}, loginData);
    // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<LoginResponseData>(url, loginData);
  }


}
