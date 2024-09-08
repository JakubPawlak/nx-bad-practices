import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BarrelFileHelperService {
  helpMe() {
    console.log('Done. Success.');
  }
}
