import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RatingFinalInOutPutComponent} from './rating-final-in-out-put/rating-final-in-out-put.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    RatingFinalInOutPutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
