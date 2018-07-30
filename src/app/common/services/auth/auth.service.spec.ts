import {TestBed, getTestBed} from '@angular/core/testing';

import { AuthService } from './auth.service';
import {AngularFireAuth} from "angularfire2/auth";
import {MockAngularFireAuth} from "../../mocks/mock-angular-fire-auth";
import {auth, UserInfo} from "firebase";
import {of} from "rxjs/index";
import {Store} from "@ngrx/store";
import {MockStore} from "../../mocks/mock-store";
import {IAuthState} from "../../../state/auth/auth";

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;

  const USER_INFO: UserInfo = {
    displayName: 'Jonnathan Doe',
    email: 'john@doe.com',
    phoneNumber: null,
    photoURL: null,
    providerId: 'xxx',
    uid: '123456789'
  };
  let mockAngularFireAuth: MockAngularFireAuth;
  let mockStore: MockStore<IAuthState>;

  beforeEach(() => {
    mockAngularFireAuth = new MockAngularFireAuth(USER_INFO, of(USER_INFO));
    mockStore = new MockStore();

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: Store, useValue: mockStore }
      ]
    });

    injector = getTestBed();
    service = injector.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isLogged() should be truthy when user is available', () => {
    expect(service.isLogged()).toBeTruthy();

    service.isLogged().subscribe(() => {
      expect(mockStore.dispatch).toHaveBeenCalled();
    });
  });

  it('logout() should invoke AngularFireAuth signOut method', () => {
    service.logout();

    expect(mockAngularFireAuth.auth.signOut).toHaveBeenCalled();
  });

  it('loginWithFacebook() should invoke AngularFireAuth signInWithPopup method with Facebook provider passed to it', () => {
    service.loginWithFacebook();

    expect(mockAngularFireAuth.auth.signInWithPopup).toHaveBeenCalledWith(
      new auth.FacebookAuthProvider()
    );
  });

  it('loginWithGithub() should invoke AngularFireAuth signInWithPopup method with Github provider passed to it', () => {
    service.loginWithGithub();

    expect(mockAngularFireAuth.auth.signInWithPopup).toHaveBeenCalledWith(
      new auth.GithubAuthProvider()
    );
  });
});
