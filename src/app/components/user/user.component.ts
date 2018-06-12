import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import UserModel from "../../common/models/user/user-model";

@Component({
  selector: 'aw3-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: UserModel;

  constructor(
    private route: ActivatedRoute
  ) {
    this.user = this.route.snapshot.data.user;
  }

  ngOnInit() {
  }
}
