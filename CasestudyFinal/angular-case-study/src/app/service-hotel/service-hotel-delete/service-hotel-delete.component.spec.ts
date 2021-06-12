import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotelDeleteComponent } from './service-hotel-delete.component';

describe('ServiceHotelDeleteComponent', () => {
  let component: ServiceHotelDeleteComponent;
  let fixture: ComponentFixture<ServiceHotelDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHotelDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHotelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
