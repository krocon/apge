import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: 'app-__cp__-welcome',
  templateUrl: './__cp__-welcome.component.html',
  styleUrls: ['./__cp__-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capitalizedCp__WelcomeComponent {

  public environment = environment;
  bgImageVisible = false;
  textAsOverlay = true;


  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
  }

  isSmall$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
