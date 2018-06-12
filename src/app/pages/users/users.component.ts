import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UsersModel from "../../common/models/users/users-model";
import UserModel from "../../common/models/user/user-model";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: UserModel[];

  constructor(
    private route: ActivatedRoute
  ) {
    const usersModel  = new UsersModel(this.route.snapshot.data.users);

    this.users = usersModel.getUsers();
  }

  ngOnInit() {}
}
