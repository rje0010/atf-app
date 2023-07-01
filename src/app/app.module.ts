import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardsComponent } from './cards/cards.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { WhoLayoutComponent } from './layouts/who-layout/who-layout.component';
import { WhatLayoutComponent } from './layouts/what-layout/what-layout.component';
import { ResourcesLayoutComponent } from './layouts/resources-layout/resources-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarTopComponent,
    CarouselComponent,
    DropdownComponent,
    CardsComponent,
    HomeLayoutComponent,
    WhoLayoutComponent,
    WhatLayoutComponent,
    ResourcesLayoutComponent,
    AboutLayoutComponent,
    UserInfoComponent,
    AddCardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, "atf-app"),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
