import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, takeWhile } from 'rxjs/operators';
import { NavigationEnd, Router } from "@angular/router";
import { MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { environment } from "../../environments/environment";
import { __capitalizedCp__AuthService } from "../__cp__-auth/service/__cp__-auth.service";
import { LoginResponseData } from "../__cp__-auth/data/login.response.data";

@Component({
  selector: 'app-__cp__-nav',
  templateUrl: './__cp__-nav.component.html',
  styleUrls: ['./__cp__-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capitalizedCp__NavComponent {

  private static readonly config = {
    routeTitles: {
      home: 'Herzlich willkommen!'
    },

    loginRoute: '/anmelden',
    logoutRoute: '/abmelden',
    welcomeRoute: '/willkommen',

    menuIconsVisible: true,
    logoutCounterVisible: true,
  };

  @ViewChild('drawer', {static: true}) mainNav: MatSidenav;
  @ViewChild('matSidenavContent', {static: true}) matSidenavContent: MatSidenavContent;

  lastClickInMillis = Date.now();
  version = environment.version;
  commitHash = environment.commitHash;
  loggedIn = false;
  data: LoginResponseData = null;
  title = 'Herzlich willkommen!';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private alive = true;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly authService: __capitalizedCp__AuthService,
    private readonly cdr: ChangeDetectorRef
  ) {
  }

  get cfg() {
    return __capitalizedCp__NavComponent.config;
  }

  get menuIconsVisible() {
    return __capitalizedCp__NavComponent.config.menuIconsVisible;
  }

  get logoutCounterVisible() {
    return __capitalizedCp__NavComponent.config.logoutCounterVisible;
  }

  static forRoot(config) {
    Object.assign(this.config, config);
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:click', ['$event'])
  onResize(_) {
    this.lastClickInMillis = Date.now();
  }

  ngOnInit() {
    this.router
      .events
      .pipe(takeWhile(() => this.alive))
      .subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          this.matSidenavContent.scrollTo({top: 0, left: 0});
          const routeTitles = __capitalizedCp__NavComponent.config.routeTitles;
          const keys = Object.keys(routeTitles);
          for (const key of keys) {
            if (evt.url.indexOf(key) > -1) {
              this.title = routeTitles[key];
              return;
            }
          }
          this.title = 'Herzlich willkommen!';
        }
      });
    this.authService
      .valueChanges$
      .pipe(takeWhile(() => this.alive))
      .subscribe(data => {
        this.loggedIn = !!data.token;
        this.data = data;
        this.cdr.detectChanges();
      });
  }

  onSessionTimeout() {
    console.warn('onSessionTimeout()...');
    this.authService.logout();
  }

}
