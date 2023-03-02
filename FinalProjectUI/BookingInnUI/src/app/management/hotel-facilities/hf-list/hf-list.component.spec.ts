import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfListComponent } from './hf-list.component';

describe('HfListComponent', () => {
  let component: HfListComponent;
  let fixture: ComponentFixture<HfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
