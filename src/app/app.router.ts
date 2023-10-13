// In the routes array, the path object is '' which means the path http://localhost:4200/ , we have not provided any destination 

import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { JavaComponent } from "./java/java.component";
import { DotnetComponent } from "./dotnet/dotnet.component";
import { UserListComponent } from "./user-list/user-list.component";
import { NewGalleryComponent } from "./new-gallery/new-gallery.component";
import { LightboxComponent } from "./lightbox/lightbox.component";

//to this object, but we are redirecting this path to items path using redirectTo key.
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'java', component: JavaComponent },
    { path: 'dotnet', component: DotnetComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'newgallery', component: NewGalleryComponent },
    { path: 'lightbox', component: LightboxComponent }
];

export const routes = RouterModule.forRoot(router);

