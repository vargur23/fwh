import { TestBed } from '@angular/core/testing';

import { UnitDetailsService } from './unit-details.service';

describe('UnitDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitDetailsService = TestBed.get(UnitDetailsService);
    expect(service).toBeTruthy();
  });
});
