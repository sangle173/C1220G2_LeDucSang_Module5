import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
