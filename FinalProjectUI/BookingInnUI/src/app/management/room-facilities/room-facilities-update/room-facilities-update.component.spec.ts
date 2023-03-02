import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFacilitiesUpdateComponent } from './room-facilities-update.component';

describe('RoomFacilitiesUpdateComponent', () => {
  let component: RoomFacilitiesUpdateComponent;
  let fixture: ComponentFixture<RoomFacilitiesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomFacilitiesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomFacilitiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
