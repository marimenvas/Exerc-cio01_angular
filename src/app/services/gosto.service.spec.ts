import { TestBed } from '@angular/core/testing';

import { GostoService } from './gosto.service';

describe('GostoService', () => {
  let service: GostoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GostoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
