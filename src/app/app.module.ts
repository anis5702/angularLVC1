import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { GalleryComponent } from './gallery/gallery.component';
import { JavaComponent } from './java/java.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { MevnComponent } from './mevn/mevn.component';
import { BannerComponent } from './banner/banner.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { NewGalleryComponent } from './new-gallery/new-gallery.component';
import { LightboxComponent } from './lightbox/lightbox.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    HomeComponent,
    CoursesComponent,
    RegistrationComponent,
    ContactUsComponent,
    GalleryComponent,
    JavaComponent,
    DotnetComponent,
    MeanComponent,
    MernComponent,
    MevnComponent,
    BannerComponent,
    UserListComponent,
    NewGalleryComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    routes
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
