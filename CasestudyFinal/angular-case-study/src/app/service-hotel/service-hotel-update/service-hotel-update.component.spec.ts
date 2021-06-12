import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHotelUpdateComponent } from './service-hotel-update.component';

describe('ServiceHotelUpdateComponent', () => {
  let component: ServiceHotelUpdateComponent;
  let fixture: ComponentFixture<ServiceHotelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHotelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
