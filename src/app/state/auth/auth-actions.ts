import {Action} from "@ngrx/store";
import {IAuthState} from "./auth";

export enum AuthActionTypes {
  Auth = '[Login] AuthAction'
}

export class AuthAction implements Action {
  readonly type = AuthActionTypes.Auth;

  constructor (
    public payload: IAuthState
  ) {}
}

export type AuthActions = AuthAction;
