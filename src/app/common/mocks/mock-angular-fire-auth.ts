import {UserInfo} from "firebase";
import {Observable} from "rxjs/index";
import {SpyObject} from "./helpers";
import {AngularFireAuth} from "angularfire2/auth";

export class MockAngularFireAuth extends SpyObject {
  public auth: any;
  public user: Observable<UserInfo | null>;

  constructor(user?: UserInfo) {
    super(AngularFireAuth);

    this.auth = {
      currentUser: user ? user : null,
      signOut: this.spy('signOut'),
      signInWithPopup: this.spy('signInWithPopup')
    };
  }
}
