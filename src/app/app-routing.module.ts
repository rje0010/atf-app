import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { WhoLayoutComponent } from './layouts/who-layout/who-layout.component';
import { WhatLayoutComponent } from './layouts/what-layout/what-layout.component';
import { ResourcesLayoutComponent } from './layouts/resources-layout/resources-layout.component';

const routes: Routes = [
  {
    path:"",
    component: HomeLayoutComponent
  },
  {
    path:"about",
    component: AboutLayoutComponent
  },
  {
    path:"who-we-are",
    component: WhoLayoutComponent
  },
  {
    path:"what-we-do",
    component: WhatLayoutComponent
  },
  {
    path:"resources",
    component: ResourcesLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
