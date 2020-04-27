import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-__cp__-forms-demo',
  templateUrl: './__cp__-forms-demo.component.html',
  styleUrls: ['./__cp__-forms-demo.component.scss']
})
export class __capcp__FormsDemoComponent {

  selected = 'option2';
  checked = true;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  color: ThemePalette = 'accent';

}
