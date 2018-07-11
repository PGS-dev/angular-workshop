import { SpyObject } from '../../../mocks/helpers';
import Spy = jasmine.Spy;
import {AuthService} from "../auth.service";

export class MockAuthService extends SpyObject {
  public isLoggedSpy: Spy;
  public logoutSpy: Spy;
  public loginWithFacebookSpy: Spy;
  public loginWithGithubSpy: Spy;

  constructor () {
    super(AuthService);

    this.isLoggedSpy = this.spy('isLogged');
    this.logoutSpy = this.spy('logout');
    this.loginWithFacebookSpy = this.spy('loginWithFacebook');
    this.loginWithGithubSpy = this.spy('loginWithGithub');
  }
}
