import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position/position.component';


@NgModule({
  declarations: [PositionComponent],
  exports: [
    PositionComponent
  ],
  imports: [
    CommonModule,
    PositionRoutingModule
  ]
})
export class PositionModule { }
