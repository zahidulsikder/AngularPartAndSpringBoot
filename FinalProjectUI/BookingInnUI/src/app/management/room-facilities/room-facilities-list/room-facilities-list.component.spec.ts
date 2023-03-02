import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFacilitiesListComponent } from './room-facilities-list.component';

describe('RoomFacilitiesListComponent', () => {
  let component: RoomFacilitiesListComponent;
  let fixture: ComponentFixture<RoomFacilitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomFacilitiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomFacilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
