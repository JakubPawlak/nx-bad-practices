import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrelFileService } from '@nx-bad-practices/barrel-file'; // this is an aliased import which causes circular dependency

@Component({
  selector: 'lib-barrel-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barrel-file.component.html',
  styleUrl: './barrel-file.component.css',
})
export class BarrelFileComponent {
  constructor(private service: BarrelFileService) {
    this.service.foo();
  }
}
