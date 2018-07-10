import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'aw3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  public loginWithFacebook(): void {
    this.authService.loginWithFacebook();
  }

  public loginWithGithub(): void {
    this.authService.loginWithGithub();
  }

  public logout(): void {
    this.authService.logout();
  }

  ngOnInit() {}
}
