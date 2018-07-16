import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {RouterTestingModule} from "@angular/router/testing";
import UserModel from "../../common/models/user/user-model";
import {MockUsersModelFactory} from "../../common/models/users/mocks/mock-users-model.factory";
import UsersModelFactory from "../../common/models/users/users-model.factory";
import {MockUsersService} from "./mocks/mock-users.service";
import {UsersService} from "./users.service";
import {LoaderComponent} from "../../components/loader/loader.component";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUsersModelFactory: MockUsersModelFactory;
  let mockUsersService: MockUsersService;
  const USERS_DATA = [
    { id: 0, name: 'John Doe' },
    { id: 1, name: 'Catherine Jones' }
  ];
  const USERS_MOCK = [
    new UserModel(USERS_DATA[0]),
    new UserModel(USERS_DATA[1])
  ];

  beforeEach(async(() => {
    mockUsersModelFactory = new MockUsersModelFactory(USERS_DATA);
    mockUsersService = new MockUsersService(USERS_DATA);

    TestBed
      .configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [UsersComponent, LoaderComponent],
        providers: [
          { provide: UsersService, useValue: mockUsersService },
          { provide: UsersModelFactory, useValue: mockUsersModelFactory }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('ngOnInit() should call service to get AngularFirestoreCollection', () => {
    fixture.detectChanges();

    expect(mockUsersService.getUsersAngularFirestoreCollectionSpy).toHaveBeenCalled();
  });

  it('ngOnInit() should call factory to create users instance and ' +
    'assign it to users public member', () => {
    fixture.detectChanges();

    mockUsersService.getUsersAngularFirestoreCollectionSpy().valueChanges().subscribe((users) => {
      expect(users).toEqual(USERS_DATA);
      expect(component.users).toEqual(USERS_MOCK);
    });
  });
});
