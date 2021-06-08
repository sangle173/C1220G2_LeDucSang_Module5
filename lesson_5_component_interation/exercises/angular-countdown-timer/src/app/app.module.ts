import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {MyCountdownTimerComponent} from './my-countdown-timer/my-countdown-timer.component';
import {FormsModule} from '@angular/forms';
import {DigitalClockComponent} from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    MyCountdownTimerComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
