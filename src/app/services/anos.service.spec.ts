import { TestBed } from '@angular/core/testing';

import { AnosService } from './anos.service';

describe('AnosService', () => {
  let service: AnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
