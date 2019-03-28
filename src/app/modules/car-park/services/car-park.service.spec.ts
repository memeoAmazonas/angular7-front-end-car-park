import { TestBed } from '@angular/core/testing';

import { CarParkService } from './car-park.service';

describe('CarParkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarParkService = TestBed.get(CarParkService);
    expect(service).toBeTruthy();
  });
});
