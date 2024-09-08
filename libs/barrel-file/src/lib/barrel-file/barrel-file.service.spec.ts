import { TestBed } from '@angular/core/testing';

import { BarrelFileService } from './barrel-file.service';

describe('BarrelFileService', () => {
  let service: BarrelFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarrelFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
