import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfUpdateComponent } from './hf-update.component';

describe('HfUpdateComponent', () => {
  let component: HfUpdateComponent;
  let fixture: ComponentFixture<HfUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
