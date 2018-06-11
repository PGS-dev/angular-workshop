import { Component, OnInit } from '@angular/core';

import { UsersService } from "./users.service";

import UsersModel from "../../common/models/users/users-model";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: UsersModel;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      (users) => {
        this.users = users;
        console.log(this.users);
      }
    )
  }
}
