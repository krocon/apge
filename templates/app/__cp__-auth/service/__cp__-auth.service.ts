import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseData } from '../data/login.response.data';
import { __capitalizedCp__AuthAjaxService } from './__cp__-auth.ajax.service';
import { map } from 'rxjs/operators';
import { LoginRequestData } from '../data/login.request.data';
import { __capitalizedCp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root',
})
export class __capitalizedCp__AuthService {

  public static redirectUrl = '/';

  private static readonly innerService =
    new __capitalizedCp__TypedDataService<LoginResponseData>('auth', new LoginResponseData());

  constructor(
    private readonly authAjaxService: __capitalizedCp__AuthAjaxService,
    public readonly router: Router
  ) {
  }

  get data(): LoginResponseData {
    return __capitalizedCp__AuthService.innerService.getValue();
  }

  get valueChanges$(): Observable<LoginResponseData> {
    return __capitalizedCp__AuthService.innerService.valueChanges$;
  }

  setRedirectUrl(url: string) {
    return __capitalizedCp__AuthService.redirectUrl = url;
  }

  isLoggedIn(): boolean {
    return !!__capitalizedCp__AuthService.innerService.getValue().token;
  }

  logout() {
    console.info('Logging out...');
    __capitalizedCp__AuthService.innerService.update(new LoginResponseData('', '', '','', ''));
    this.router.navigate(['/']);
  }

  login(loginData: LoginRequestData): Observable<LoginResponseData> {
    return this.authAjaxService
      .login(loginData)
      .pipe(
        map((responseData: LoginResponseData) => {
          __capitalizedCp__AuthService.innerService.update(responseData);
          return responseData;
        })
      );
  }

  getNextNavigation(): string {
    // Get the redirect URL from our auth service. If no redirect has been set, use the default:
    if (this.isLoggedIn() && __capitalizedCp__AuthService.redirectUrl) {
      return __capitalizedCp__AuthService.redirectUrl;
    }
    return '/';
  }

}
