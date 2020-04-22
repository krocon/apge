import { Component } from '@angular/core';
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-__cp__-version-indicator',
  styles: [`
    :host {
      background: #ffdc3c;
      color: #000046;
      position: absolute;
      top: 0;
      left: 45%;
      min-width: 100px;
      height: 20px;
      z-index: 9999;
    }
  `],
  template: `
    <div *ngIf="environment?.showVersionIndicator && environment.env!=='prod'">
      <small>&nbsp;Version ({{environment.env}}): {{environment.version}}&nbsp;&nbsp;</small>
    </div>
  `
})
export class __capitalizedCp__VersionIndicatorComponent {

  public environment = environment;

  constructor() {
    // tslint:disable:no-console
    console.info('Version >');
    console.info('        > Build Version:', environment.version);
    console.info('        > env          :', environment.env);
    console.info('        > all          :', environment);
  }

}
