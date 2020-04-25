import { Injectable } from "@angular/core";
import { __capitalizedCp__TypedDataService } from "../../__cp__-common/__cp__-typed-data-service";
import { __capitalizedCp____capitalizedEntity__Data } from "../data/__cp__-__entity__.data";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class __capitalizedCp____capitalizeEntity__StoreService {

  private static readonly innerService =
    new __capitalizedCp__TypedDataService<__capitalizedCp____capitalizedEntity__Data>(
      '__entity__', // key in localstorage
      new __capitalizedCp____capitalizedEntity__Data() // default-value
    );

  get valueChanges$(): Observable<__capitalizedCp____capitalizedEntity__Data> {
    return __capitalizedCp____capitalizeEntity__StoreService.innerService.valueChanges$.asObservable();
  }

  getValue(): __capitalizedCp____capitalizedEntity__Data {
    return __capitalizedCp____capitalizeEntity__StoreService.innerService.getValue();
  }

  update(o: __capitalizedCp____capitalizedEntity__Data): void {
    __capitalizedCp____capitalizeEntity__StoreService.innerService.update(o);
  }

}
