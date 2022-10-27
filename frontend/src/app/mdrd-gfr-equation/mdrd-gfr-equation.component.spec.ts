import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdrdGfrEquationComponent } from './mdrd-gfr-equation.component';

describe('MdrdGfrEquationComponent', () => {
  let component: MdrdGfrEquationComponent;
  let fixture: ComponentFixture<MdrdGfrEquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdrdGfrEquationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdrdGfrEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
