import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculatorChildComponent } from './bmi-calculator-child.component';

describe('BmiCalculatorChildComponent', () => {
  let component: BmiCalculatorChildComponent;
  let fixture: ComponentFixture<BmiCalculatorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculatorChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCalculatorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
