import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";
import {AngularFireAuth} from 'angularfire2/auth';
import {Store} from "@ngrx/store";
import {IAuthState} from '../../state/auth/auth';
import * as authActions from "../../state/auth/auth-actions";

@Component({
  selector: 'aw3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthService,
    private store: Store<IAuthState>
  ) {}

  public loginWithFacebook(): void {
    this.authService.loginWithFacebook().then(() => {
      this.saveUserStateInStore(true);
    });
  }

  public loginWithGithub(): void {
    this.authService.loginWithGithub().then(() => {
      this.saveUserStateInStore(true);
    });
  }

  public logout(): void {
    this.authService.logout().then(() => {
      this.saveUserStateInStore(false);
    });
  }

  saveUserStateInStore (isAuthenticated: boolean) {
    this.store.dispatch(new authActions.AuthAction({
      authenticated: isAuthenticated
    }));
  }

  ngOnInit() {}
}
