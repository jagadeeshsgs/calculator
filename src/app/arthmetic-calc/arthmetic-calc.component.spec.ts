import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthmeticCalcComponent } from './arthmetic-calc.component';

describe('ArthmeticCalcComponent', () => {
  let component: ArthmeticCalcComponent;
  let fixture: ComponentFixture<ArthmeticCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArthmeticCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthmeticCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
