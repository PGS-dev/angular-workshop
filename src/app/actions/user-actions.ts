import {Action} from "@ngrx/store";
import {UserModule} from "../pages/user/user.module";

export const USER_EDIT_UPDATE = '[UserEdit] Update';

export class Update implements Action {
  readonly type = USER_EDIT_UPDATE;

  constructor (
    public payload: UserModule
  ) {}
}

export type Actions = Update;
