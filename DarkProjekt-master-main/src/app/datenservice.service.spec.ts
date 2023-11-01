import { TestBed } from '@angular/core/testing';

import { DatenserviceService } from './datenservice.service';

describe('DatenserviceService', () => {
  let service: DatenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
