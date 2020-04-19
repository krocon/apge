import { Injectable } from '@angular/core';
import { __capitalizedCp__SettingsData } from '../data/settings.data';
import { __capitalizedCp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";


@Injectable({
  providedIn: 'root',
})
export class __capitalizedCp__SettingsService {

  private static readonly innerService =
    new __capitalizedCp__TypedDataService<__capitalizedCp__SettingsData>(
      'settings', new __capitalizedCp__SettingsData());

  get settings$() {
    return __capitalizedCp__SettingsService.innerService.valueChanges$;
  }

  getSettingsFromStorage(): __capitalizedCp__SettingsData {
    return __capitalizedCp__SettingsService.innerService.getValue();
  }

  settings2storage(data: __capitalizedCp__SettingsData): void {
    __capitalizedCp__SettingsService.innerService.update(data);
  }

  private deleteSettingsFromStorage(): void {
    __capitalizedCp__SettingsService.innerService.update(null);
  }

}
