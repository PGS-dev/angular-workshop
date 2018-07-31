import * as authActions from "./auth-actions";
import {AuthActionTypes} from "./auth-actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAuthState} from "./auth";

const initialState: IAuthState = {
  authenticated: false
};
const getAuthFeatureState = createFeatureSelector<IAuthState>(AuthActionTypes.Auth);
export const getAuthSelector = createSelector(
  getAuthFeatureState,
  state => state
);

export function authReducer(state: IAuthState = initialState, action: authActions.AuthAction): IAuthState {
  switch (action.type) {
    case AuthActionTypes.Auth: {
      return {
        ...state,
        authenticated: action.payload.authenticated
      };
    }

    default: {
      return state;
    }
  }
}
