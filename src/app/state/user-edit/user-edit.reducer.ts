import * as userActions from "./user-edit-actions";
import {UserActionTypes} from "./user-edit-actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserEditState} from "./user-edit";

const initialState: IUserEditState = {
  diff: {
    initialData: null,
    currentData: null
  }
};
const getUserEditFeatureState = createFeatureSelector<IUserEditState>(UserActionTypes.UserEdit);
export const getUserEditDiff = createSelector(
  getUserEditFeatureState,
  state => <any>state.diff
);

export function userEditReducer(state: IUserEditState = initialState, action: userActions.Diff): IUserEditState {
  switch (action.type) {
    case UserActionTypes.UserEditDiff: {
      return {
        ...state,
        diff: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
