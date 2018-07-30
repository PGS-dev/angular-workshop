import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import UserModel from "../../common/models/user/user-model";
import {getUserEditDiff} from "../../state/user-edit/user-edit.reducer";
import {IUserEditState} from "../../state/user-edit/user-edit";

@Component({
  selector: 'aw3-user-diff',
  templateUrl: './user-diff.component.html',
  styleUrls: ['./user-diff.component.scss']
})
export class UserDiffComponent implements OnInit {
  public initialUser: UserModel;
  public currentUser: UserModel;

  @Input() uid: string;

  constructor(
    private store: Store<IUserEditState>
  ) {}

  ngOnInit() {
    this.store.select(getUserEditDiff).subscribe((diff) => {
      if (diff.initialData && diff.initialData.id === this.uid) {
        this.initialUser = diff.initialData;
        this.currentUser = diff.currentData;
      }
    });
  }
}
