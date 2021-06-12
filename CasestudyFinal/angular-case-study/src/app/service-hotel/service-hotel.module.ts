import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceHotelRoutingModule } from './service-hotel-routing.module';
import { ServiceHotelCreateComponent } from './service-hotel-create/service-hotel-create.component';
import { ServiceHotelListComponent } from './service-hotel-list/service-hotel-list.component';
import { ServiceHotelUpdateComponent } from './service-hotel-update/service-hotel-update.component';
import { ServiceHotelDeleteComponent } from './service-hotel-delete/service-hotel-delete.component';


@NgModule({
  declarations: [ServiceHotelCreateComponent, ServiceHotelListComponent, ServiceHotelUpdateComponent, ServiceHotelDeleteComponent],
  imports: [
    CommonModule,
    ServiceHotelRoutingModule
  ]
})
export class ServiceHotelModule { }
