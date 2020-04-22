import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { __capitalizedCp__SettingsService } from './service/__cp__-settings.service';
import { Router } from '@angular/router';
import { __capitalizedCp__SettingsData } from './data/settings.data';


@Component({
  selector: 'app-__cp__-settings',
  templateUrl: '__cp__-settings.component.html',
  styleUrls: ['__cp__-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capitalizedCp__SettingsComponent implements OnInit, OnDestroy {

  public data: __capitalizedCp__SettingsData = new __capitalizedCp__SettingsData();
  private alive = true;

  constructor(
    private readonly service: __capitalizedCp__SettingsService,
    private readonly router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit(): void {
    this.data = this.service.getSettingsFromStorage();
  }

  go2Welcome() {
    this.router.navigate(['/willkommen']);
  }

  onOkClicked() {
    this.service.settings2storage(this.data);
    setTimeout(this.go2Welcome.bind(this), 666);
  }

  onCancelClicked() {
    setTimeout(this.go2Welcome.bind(this), 1);
  }

}
