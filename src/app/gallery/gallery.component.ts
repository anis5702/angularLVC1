import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @ViewChild('imageCarousel') imageCarousel!: ElementRef;

  

  imgUrl = '';

  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/1.jpg'
 },
 {
    "ID": "2",
    "url": './assets/images/2.jpg'
 } ,
 {
    "ID": "3",
    "url": './assets/images/3.jpg'
} ,
{
    "ID": "4",
    "url": './assets/images/4.jpg'
} ,
{
    "ID": "5",
    "url": './assets/images/5.jpg'
} ,
{
  "ID": "6",
  "url": './assets/images/7.jpg'
} ,
{
  "ID": "7",
  "url": './assets/images/11.jpg'
} ,
{
  "ID": "8",
  "url": './assets/images/12.jpg'
} 
];

constructor() { }

  ngOnInit(): void {
    // JavaScript code that should run when the component initializes
    // For example, you can fetch data from an API or perform other tasks here.
  }

  // Define methods or event handlers here
  onClickImage(image: any): void {
    // Handle the click event here
    this.imgUrl = image;
    // this.changeSlide(image);
    // console.log('Clicked on image: ' + image);
  }

}


