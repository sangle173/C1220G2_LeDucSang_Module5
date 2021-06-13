import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotelListComponent } from './service-hotel-list.component';

describe('ServiceHotelListComponent', () => {
  let component: ServiceHotelListComponent;
  let fixture: ComponentFixture<ServiceHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
