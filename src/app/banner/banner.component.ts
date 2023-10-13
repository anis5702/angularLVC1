import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/images1.jpg'
 },
 {
    "ID": "2",
    "url": './assets/images/images2.jpg'
 } ,
 {
  "ID": "3",
  "url": './assets/images/images3.jpg'
} ,
{
  "ID": "4",
  "url": './assets/images/images4.jpg'
} 
];
}
