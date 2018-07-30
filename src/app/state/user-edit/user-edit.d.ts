import UserModel from "../../common/models/user/user-model";

export interface IUserEditState {
  diff: IUserEditDiffState;
}

export interface IUserEditDiffState {
  initialData: UserModel | null;
  currentData: UserModel | null;
}
