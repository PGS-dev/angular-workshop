import {Action} from "@ngrx/store";
import {IUserEditDiffState} from "./user-edit";

export enum UserActionTypes {
  UserEdit = 'userEdit',
  UserEditDiff = '[UserEdit] Diff'
}

export class Diff implements Action {
  readonly type = UserActionTypes.UserEditDiff;

  constructor (
    public payload: IUserEditDiffState
  ) {}
}

export type UserActions = Diff; // Union type for all creators. To add more use Diff | 2nd | 3rd class and so on.
