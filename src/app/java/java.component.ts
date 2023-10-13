import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/13.jpg',
    "title":"JAVA SE PROGRAMMING I",
    "price":"5900",
    "info":"https://www.info-trek.com/courses/java-se-programming-i/"
 },
 {
    "ID": "2",
    "url": './assets/images/17.jpg',
    "title":"JAVA SE PROGRAMMING II",
    "price":"5900",
    "info":"https://www.info-trek.com/courses/java-se-programming-ii/"
 } ,
 {
  "ID": "3",
  "url": './assets/images/18.jpg',
  "title":"JAVA SE 17: PROGRAMMING COMPLETE",
  "price":"4000",
  "info":"https://www.info-trek.com/courses/java-se-17-programming-complete/"
} ,
{
  "ID": "4",
  "url": './assets/images/19.jpg',
  "title":"JAVA SE 11: PROGRAMMING COMPLETE",
  "price":"5900",
  "info":"https://www.info-trek.com/courses/java-se-11-programming-complete/"
} 
];
}
