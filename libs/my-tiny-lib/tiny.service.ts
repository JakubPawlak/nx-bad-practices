import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TinyService {
  boo() {
    console.log('I was not detected');
  }
}
