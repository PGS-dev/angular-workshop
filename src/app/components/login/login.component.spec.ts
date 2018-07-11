import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AngularFireAuth} from "angularfire2/auth";
import {MockAngularFireAuth} from "../../common/mocks/mock-angular-fire-auth";
import {UserInfo} from "firebase";
import {MockAuthService} from "../../common/services/auth/mocks/mock-auth.service";
import {AuthService} from "../../common/services/auth/auth.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockAngularFireAuth: MockAngularFireAuth;
  let mockAuthService: MockAuthService;

  const USER_INFO: UserInfo = {
    displayName: 'Jonnathan Doe',
    email: 'john@doe.com',
    phoneNumber: null,
    photoURL: null,
    providerId: 'xxx',
    uid: '123456789'
  };

  beforeEach(async(() => {
    mockAngularFireAuth = new MockAngularFireAuth(USER_INFO);
    mockAuthService = new MockAuthService();

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
