import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TinyService } from '@nx-bad-practices/my-tiny-lib';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-bad-practices';

  readonly tinyService = inject(TinyService);

  constructor() {
    this.tinyService.boo();
  }
}
