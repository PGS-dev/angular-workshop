import * as userActions from "./user-edit-actions";
import {UserEditActionTypes} from "./user-edit-actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserEditState} from "./user-edit";

const initialState: IUserEditState = {
  diff: {
    initialData: null,
    currentData: null
  }
};
const getUserEditFeatureState = createFeatureSelector<IUserEditState>(UserEditActionTypes.UserEdit);
export const getUserEditDiffSelector = createSelector(
  getUserEditFeatureState,
  state => state.diff
);

export function userEditReducer(state: IUserEditState = initialState, action: userActions.UserEditActionDiff): IUserEditState {
  switch (action.type) {
    case UserEditActionTypes.UserEditDiff: {
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
