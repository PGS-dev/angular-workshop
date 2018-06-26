import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {Subscription} from "rxjs/index";
import UsersModel from "../../common/models/users/users-model";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy { // Describe your class with OnDestroy interface.
  public users: UsersModel;
  public sub: Subscription;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.sub = this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  ngOnDestroy() { // Unsubscribe on every component destroy event.
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
