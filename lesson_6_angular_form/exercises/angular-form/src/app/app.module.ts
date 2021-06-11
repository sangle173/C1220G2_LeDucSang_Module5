import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './login/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyRegisterPageComponent } from './my-register-page/my-register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MyRegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
