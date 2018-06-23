import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UsersModelFactory from '../../common/models/users/users-model.factory'
import {UsersService} from "./users.service";
import {Observable} from "rxjs/index";
import UsersModel from "../../common/models/users/users-model";

@Component({
  selector: 'aw3-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users$: Observable<UsersModel>;

  constructor(
    private route: ActivatedRoute,
    private usersModelFactory: UsersModelFactory,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }
}
