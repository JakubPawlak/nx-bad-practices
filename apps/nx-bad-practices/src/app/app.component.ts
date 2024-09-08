import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BarrelFileComponent } from '@nx-bad-practices/barrel-file';
import { UiButtonWithIconComponent } from '@nx-bad-practices/ui-button-with-icon';
import { GtmComponent } from '@nx-bad-practices/gtm';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    BarrelFileComponent,
    UiButtonWithIconComponent,
    GtmComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-bad-practices';
}
