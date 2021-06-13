import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider/slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SliderComponent],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    SlickCarouselModule,
    NgbPaginationModule
  ]
})
export class SliderModule { }
