import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-__cp__-logo',
  templateUrl: './__cp__-logo.component.html'
})
export class __capitalizedCp__LogoComponent implements AfterViewInit {

  @Input() width = 94.606644 / 2;

  @Input() height = 66.223038 / 2;

  constructor(
    private readonly cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }
}
