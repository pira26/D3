import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {
      userName: 'test'
    };
    this.userService.updateUserName(this.user.userName);
  }

  updateUserNameObs(userName: string): void {
    this.userService.updateUserName(userName);
  }

}
