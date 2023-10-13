import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/1.jpg',
    "title":"CRAFTING USER STORIES FOR AGILE EXCELLENCE",
    "price":"5000"
 },
 {
    "ID": "2",
    "url": './assets/images/2.jpg',
    "title":"SAFE® FOR TEAMS",
    "price":"4000"
 } ,
 {
  "ID": "3",
  "url": './assets/images/3.jpg',
  "title":"LEADING SAFE®",
  "price":"4000"
} ,
{
  "ID": "4",
  "url": './assets/images/4.jpg',
  "title":"MICROSOFT POWERPOINT 2021",
  "price":"800"
} ,
{
  "ID": "5",
  "url": './assets/images/5.jpg',
  "title":"FITSM® ADVANCED SERVICE PLANNING & DELIVERY",
  "price":"3900"
} 
];
}
