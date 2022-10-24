import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatinineCalculatorComponent } from './creatinine-calculator.component';

describe('CreatinineCalculatorComponent', () => {
  let component: CreatinineCalculatorComponent;
  let fixture: ComponentFixture<CreatinineCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatinineCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatinineCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
