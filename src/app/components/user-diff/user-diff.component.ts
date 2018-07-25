import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as UserActions from "../../actions/user-actions";
import UserModel from "../../common/models/user/user-model";

@Component({
  selector: 'aw3-user-diff',
  templateUrl: './user-diff.component.html',
  styleUrls: ['./user-diff.component.scss']
})
export class UserDiffComponent implements OnInit {
  @Input() uid: string;

  public initialUser: UserModel;
  public currentUser: UserModel;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.store.select('userEdit').subscribe((userState) => {
      if (userState.initialData && userState.initialData.id === this.uid) {
        this.initialUser = userState.initialData;
        this.currentUser = userState.currentData;
      }
    });
  }
}
