import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { LoginComponent } from './login/login.component';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
 
import { ServicesComponent } from './services/services.component';
import { ModalsComponent } from './modals/modals.component';
import { VideoLayerComponent } from './video-layer/video-layer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const appRoute:Routes=[
  {path:'login',component:LoginComponent},
 // {path:'home',component:ContainerComponent}, 
  {path:'section',component: SectionAComponent},
  {path:'home',component: HomeComponent},
  {path:'',component: DashboardComponent},
  {path:'gallery',component: GalleryComponent},
  {path:'video',component: VideoLayerComponent},
  {path:'dash',component: DashboardComponent},
  {path:'wrapper',component: WrapperComponent },
]


@NgModule({
  declarations: [
    AppComponent,
 
    ContainerComponent,
    SliderComponent,
    NavbarComponent,
    FooterComponent,
    SectionAComponent,
    SectionBComponent,
    LoginComponent,
    HomeComponent,
    GalleryComponent,
 
    ServicesComponent,
    ModalsComponent,
    VideoLayerComponent,
    DashboardComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
