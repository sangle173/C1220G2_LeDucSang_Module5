import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCalculatorComponent } from './demo-calculator.component';

describe('DemoCalculatorComponent', () => {
  let component: DemoCalculatorComponent;
  let fixture: ComponentFixture<DemoCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
