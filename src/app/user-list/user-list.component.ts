import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../iuser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  protected title = 'app';
  users$!: IUser[];
  
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }

}
