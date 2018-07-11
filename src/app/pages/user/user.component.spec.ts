import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {ActivatedRoute} from "@angular/router";
import {MockActivatedRoute} from "../../common/mocks/router";
import UserModelFactory from "../../common/models/user/user-model.factory";
import {MockUserModelFactory} from "../../common/models/user/mocks/mock-user-model.factory";
import UserModel from '../../common/models/user/user-model';
import {MockUserService} from "./mocks/mock-user.service";
import {UserService} from "./user.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserModelFactory: MockUserModelFactory;
  let mockUserService: MockUserService;
  let mockActivatedRouter: MockActivatedRoute;
  const USER_DATA = {
    id: 1,
    name: 'John Doe',
    company: {},
    address: {}
  };
  const USER_MOCK = new UserModel(USER_DATA);

  beforeEach(async(() => {
    mockUserModelFactory = new MockUserModelFactory(USER_DATA);
    mockUserService = new MockUserService(USER_DATA);
    mockActivatedRouter = new MockActivatedRoute({
      params: {
        id: USER_DATA.id
      }
    });

    TestBed
      .configureTestingModule({
        declarations: [UserComponent],
        providers: [
          { provide: ActivatedRoute, useValue: mockActivatedRouter},
          { provide: UserModelFactory, useValue: mockUserModelFactory },
          { provide: UserService, useValue: mockUserService }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('ngOnInit() should call service to get AngularFirestoreCollection', () => {
    fixture.detectChanges();

    expect(mockUserService.getUserQueryAngularFirestoreCollectionSpy).toHaveBeenCalledWith(
      USER_DATA.id
    );
  });

  it('ngOnInit() should call factory to create user instance and ' +
    'assign it to user public member', () => {
    fixture.detectChanges();

    mockUserService.getUserQueryAngularFirestoreCollectionSpy().valueChanges().subscribe((user) => {
      expect(user).toEqual(USER_DATA);
      expect(component.user).toEqual(USER_MOCK);
    });
  });
});
