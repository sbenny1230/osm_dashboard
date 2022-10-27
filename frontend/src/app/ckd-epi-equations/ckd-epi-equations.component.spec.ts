import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkdEpiEquationsComponent } from './ckd-epi-equations.component';

describe('CkdEpiEquationsComponent', () => {
  let component: CkdEpiEquationsComponent;
  let fixture: ComponentFixture<CkdEpiEquationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CkdEpiEquationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkdEpiEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
