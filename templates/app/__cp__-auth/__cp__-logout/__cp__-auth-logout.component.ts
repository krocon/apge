import { Component, OnInit } from '@angular/core';
import { __capitalizedCp__AuthService } from "../service/__cp__-auth.service";

@Component({
  template: ``
})
export class __capitalizedCp__AuthLogoutComponent implements OnInit {

  constructor(
    public authService: __capitalizedCp__AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.logout();
  }
}
