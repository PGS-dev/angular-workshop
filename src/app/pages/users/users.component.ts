import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UserModel from "../../common/models/user/user-model";
import UsersModelFactory from '../../common/models/users/users-model.factory'

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: UserModel[];

  constructor(
    private route: ActivatedRoute,
    private usersModelFactory: UsersModelFactory
  ) {}

  ngOnInit() {
    const usersModel = this.usersModelFactory.create(this.route.snapshot.data.users);

    this.users = usersModel.getUsers();
  }
}
