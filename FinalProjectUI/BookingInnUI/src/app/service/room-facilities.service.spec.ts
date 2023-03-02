import { TestBed } from '@angular/core/testing';

import { RoomFacilitiesService } from './room-facilities.service';

describe('RoomFacilitiesService', () => {
  let service: RoomFacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomFacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
