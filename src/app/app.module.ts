import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    CarouselComponent,
    DropdownComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
