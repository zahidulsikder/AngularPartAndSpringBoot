import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HfCreateComponent } from './hf-create.component';

describe('HfCreateComponent', () => {
  let component: HfCreateComponent;
  let fixture: ComponentFixture<HfCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HfCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
