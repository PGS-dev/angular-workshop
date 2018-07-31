import {Action} from "@ngrx/store";
import {IUserEditDiffState} from "./user-edit";

export enum UserEditActionTypes {
  UserEdit = 'userEdit',
  UserEditDiff = '[UserEdit] UserEditDiffAction'
}

export class UserEditActionDiff implements Action {
  readonly type = UserEditActionTypes.UserEditDiff;

  constructor (
    public payload: IUserEditDiffState
  ) {}
}

// Union type for all creators. To add more use UserEditActionDiff | 2nd | 3rd class and so on.
export type UserActions = UserEditActionDiff;
