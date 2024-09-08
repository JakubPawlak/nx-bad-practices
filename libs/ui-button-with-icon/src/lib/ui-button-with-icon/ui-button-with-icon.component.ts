import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { capitalize } from '@nx-bad-practices/util-capitalize';

@Component({
  selector: 'lib-ui-button-with-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-button-with-icon.component.html',
  styleUrl: './ui-button-with-icon.component.css',
})
export class UiButtonWithIconComponent {
  readonly capitalize = capitalize;
}
