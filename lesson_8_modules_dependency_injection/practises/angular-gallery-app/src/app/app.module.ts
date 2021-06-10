import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGallerComponent } from './image-gallery/image-card/image-galler/image-galler.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGallerComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
