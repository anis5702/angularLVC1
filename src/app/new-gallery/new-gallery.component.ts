import { Component } from '@angular/core';

@Component({
  selector: 'app-new-gallery',
  templateUrl: './new-gallery.component.html',
  styleUrls: ['./new-gallery.component.css']
})
export class NewGalleryComponent {

 
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

openModal(): void {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Thumbnail image controls
currentSlide(n: number): void {
  // this.showSlides(this.slideIndex = n);
}

showSlides(n: number): void {

  // let i: number;
  // const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
  // const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("demo");
  // const captionText: HTMLElement = document.getElementById("caption");

  // let slideIndex: number;

  // if (n > slides.length) {
  //     slideIndex = 1;
  // }
  // if (n < 1) {
  //     slideIndex = slides.length;
  // }
  // for (i = 0; i < slides.length; i++) {
  //     (slides[i] as HTMLElement).style.display = "none";
  // }
  // for (i = 0; i < dots.length; i++) {
  //     (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
  // }
  // (slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
  //  (dots[this.slideIndex - 1] as HTMLElement).className += " active";
  // captionText.innerHTML = (dots[this.slideIndex - 1] as HTMLElement).alt;
}

}
