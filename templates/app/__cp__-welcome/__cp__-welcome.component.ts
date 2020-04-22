import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-__cp__-welcome',
  templateUrl: './__cp__-welcome.component.html',
  styleUrls: ['./__cp__-welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class __capitalizedCp__WelcomeComponent {

  public environment = environment;

}
