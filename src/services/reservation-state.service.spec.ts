import { TestBed } from '@angular/core/testing';

import { ReservationStateService } from './reservation-state.service';

describe('ReservationStateService', () => {
  let service: ReservationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
