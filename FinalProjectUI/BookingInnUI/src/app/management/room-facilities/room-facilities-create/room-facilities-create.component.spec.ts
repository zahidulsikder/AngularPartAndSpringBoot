import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFacilitiesCreateComponent } from './room-facilities-create.component';

describe('RoomFacilitiesCreateComponent', () => {
  let component: RoomFacilitiesCreateComponent;
  let fixture: ComponentFixture<RoomFacilitiesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomFacilitiesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomFacilitiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
