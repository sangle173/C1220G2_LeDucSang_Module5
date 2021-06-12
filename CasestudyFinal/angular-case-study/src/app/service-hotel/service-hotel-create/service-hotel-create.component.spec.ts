import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotelCreateComponent } from './service-hotel-create.component';

describe('ServiceHotelCreateComponent', () => {
  let component: ServiceHotelCreateComponent;
  let fixture: ComponentFixture<ServiceHotelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHotelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHotelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
