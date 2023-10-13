import { Component } from '@angular/core';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent {
  appList: any[] = [ {
    "ID": "1",
    "url": './assets/images/1.jpg',
    "title":"55340 DEVELOPING ASP.NET CORE WEB APPLICATIONS",
    "price":"3750",
    "info":"https://www.info-trek.com/courses/developing-asp-net-core-web-applications/"
 },
 {
    "ID": "2",
    "url": './assets/images/2.jpg',
    "title":"AZ-204T00 DEVELOPING SOLUTIONS FOR MICROSOFT AZURE",
    "price":"3750",
    "info":"https://www.info-trek.com/courses/developing-solutions-for-microsoft-azure/"
 } ,
 {
  "ID": "3",
  "url": './assets/images/3.jpg',
  "title":"CERTIFIED APPLICATION SECURITY ENGINEER (CASE).NET",
  "price":"4000",
  "info":"https://www.info-trek.com/courses/application-security-engineer-case-net/"
} ,
{
  "ID": "4",
  "url": './assets/images/4.jpg',
  "title":"BUILDING APPLICATIONS AND SOLUTIONS WITH MICROSOFT 365",
  "price":"3500",
  "info":"https://www.info-trek.com/courses/building-applications-solutions-365-core/"
} 

];
}
