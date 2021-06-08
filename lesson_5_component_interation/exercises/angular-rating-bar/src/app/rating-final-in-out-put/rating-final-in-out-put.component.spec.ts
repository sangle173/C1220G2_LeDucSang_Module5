import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFinalInOutPutComponent } from './rating-final-in-out-put.component';

describe('RatingFinalInOutPutComponent', () => {
  let component: RatingFinalInOutPutComponent;
  let fixture: ComponentFixture<RatingFinalInOutPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingFinalInOutPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFinalInOutPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
