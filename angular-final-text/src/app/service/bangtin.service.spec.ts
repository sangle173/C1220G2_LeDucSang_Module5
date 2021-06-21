import { TestBed } from '@angular/core/testing';

import { BangtinService } from './bangtin.service';

describe('BangtinService', () => {
  let service: BangtinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BangtinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
