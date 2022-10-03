import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorAdultComponent } from './bmi-calculator-adult.component';

describe('BmiCalculatorAdultComponent', () => {
  let component: BmiCalculatorAdultComponent;
  let fixture: ComponentFixture<BmiCalculatorAdultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorAdultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
