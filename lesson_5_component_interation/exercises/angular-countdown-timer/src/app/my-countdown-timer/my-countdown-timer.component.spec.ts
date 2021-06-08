import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountdownTimerComponent } from './my-countdown-timer.component';

describe('MyCountdownTimerComponent', () => {
  let component: MyCountdownTimerComponent;
  let fixture: ComponentFixture<MyCountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
