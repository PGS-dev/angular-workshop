import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/index";
import {UsersModelFactory} from "../../common/models/users/users-model.factory";
import UserModel from "../../common/models/user/user-model";
import {UsersService} from "./users.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy { // Describe your class with OnDestroy interface.
  public users: UserModel[];
  public sub: Subscription;
  public subJSON: Promise<any>;

  constructor(
    private usersModelFactory: UsersModelFactory,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.sub = this.usersService.getUsersAngularFirestoreCollection().valueChanges().subscribe((users) => {
      this.users = this.usersModelFactory.create(users).getUsers();
    });
    // this.subJSON = this.usersService.getMockUsersJSONFromAssets().then((users) => {
    //   users.json().then((users) => {
    //     this.users = this.usersModelFactory.create(users).getUsers();
    //   });
    // });
  }

  ngOnDestroy() { // Unsubscribe on every component destroy event.
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }
}
