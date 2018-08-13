import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {RouterTestingModule} from "@angular/router/testing";
import UserModel from "../../common/models/user/user-model";
import {MockUsersModelFactory} from "../../common/models/users/mocks/mock-users-model.factory";
import {UsersModelFactory} from "../../common/models/users/users-model.factory";
import {MockUsersService} from "./mocks/mock-users.service";
import {UsersService} from "./users.service";
import {LoaderComponent} from "../../components/loader/loader.component";
import {Store} from "@ngrx/store";
import {MockStore} from "../../common/mocks/mock-store";
import {IAuthState} from "../../state/auth/auth";
import {AuthService} from "../../common/services/auth/auth.service";
import {MockAuthService} from "../../common/services/auth/mocks/mock-auth.service";
import {MatProgressSpinnerModule, MatTableModule} from "@angular/material";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockAuthService: MockAuthService;
  let mockUsersModelFactory: MockUsersModelFactory;
  let mockUsersService: MockUsersService;
  let mockStore: MockStore<IAuthState>;
  const USERS_DATA = [
    { id: 0, name: 'John Doe' },
    { id: 1, name: 'Catherine Jones' }
  ];
  const USERS_MOCK = [
    new UserModel(USERS_DATA[0]),
    new UserModel(USERS_DATA[1])
  ];

  beforeEach(async(() => {
    mockAuthService = new MockAuthService();
    mockUsersModelFactory = new MockUsersModelFactory(USERS_DATA);
    mockUsersService = new MockUsersService(USERS_DATA);
    mockStore = new MockStore();

    TestBed
      .configureTestingModule({
        imports: [RouterTestingModule, MatProgressSpinnerModule, MatTableModule],
        declarations: [UsersComponent, LoaderComponent],
        providers: [
          { provide: AuthService, useValue: mockAuthService },
          { provide: UsersService, useValue: mockUsersService },
          { provide: UsersModelFactory, useValue: mockUsersModelFactory },
          { provide: Store, useValue: mockStore }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;

    mockStore.setState({
      authenticated: true
    });
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('ngOnInit() should call service to get AngularFirestoreCollection', () => {
    mockStore.select().subscribe(() => {
      fixture.detectChanges();

      expect(mockUsersService.getUsersAngularFirestoreCollectionSpy).toHaveBeenCalled();
    });
  });

  it('ngOnInit() should call factory to create users instance and ' +
    'assign it to users public member', () => {
    mockStore.select().subscribe(() => {
      mockUsersService.getUsersAngularFirestoreCollectionSpy().valueChanges().subscribe((users) => {
        fixture.detectChanges();

        expect(users).toEqual(USERS_DATA);
        expect(component.users).toEqual(USERS_MOCK);
      });
    });
  });
});
