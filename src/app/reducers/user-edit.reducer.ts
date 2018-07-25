import * as UserActions from "../actions/user-actions";
import UserModel from "../common/models/user/user-model";

export interface UserEditState {
  initialData: UserModel | null;
  currentData: UserModel | null;
}

const initialState: UserEditState = {
  initialData: null,
  currentData: null
};

export function userEditReducer(state: UserEditState = initialState, action: any): UserEditState {
  switch (action.type) {
    case UserActions.USER_EDIT_UPDATE: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
