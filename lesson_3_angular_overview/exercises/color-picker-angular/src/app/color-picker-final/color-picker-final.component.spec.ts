import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerFinalComponent } from './color-picker-final.component';

describe('ColorPickerFinalComponent', () => {
  let component: ColorPickerFinalComponent;
  let fixture: ComponentFixture<ColorPickerFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
