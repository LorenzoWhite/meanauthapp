import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerbookingComponent } from './fillerbooking.component';

describe('FillerbookingComponent', () => {
  let component: FillerbookingComponent;
  let fixture: ComponentFixture<FillerbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillerbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillerbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
