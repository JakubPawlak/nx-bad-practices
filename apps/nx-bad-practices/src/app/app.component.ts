import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BarrelFileComponent } from '@nx-bad-practices/barrel-file';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BarrelFileComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nx-bad-practices';
}
