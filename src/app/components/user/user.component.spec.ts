import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserComponent} from './user.component';
import {ActivatedRoute} from "@angular/router";
import {MockActivatedRoute} from "../../common/mocks/router";
import UserModelFactory from "../../common/models/user/user-model.factory";
import {MockUserModelFactory} from "../../common/models/user/mocks/mock-user-model.factory";
import UserModel from '../../common/models/user/user-model';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockUserModelFactory: MockUserModelFactory;
  let activatedRouterMock: MockActivatedRoute;
  const USER_MOCK = new UserModel({
    id: 0,
    name: 'John Doe'
  });

  beforeEach(async(() => {
    mockUserModelFactory = new MockUserModelFactory(USER_MOCK);
    activatedRouterMock = new MockActivatedRoute(USER_MOCK, 'user');

    TestBed
      .configureTestingModule({
        declarations: [UserComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouterMock },
          { provide: UserModelFactory, useValue: mockUserModelFactory }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should create new user instance via its user factory', () => {
    // Verify that:
    // - user creation was called with user factory,
    // - snapshot equals correct data,
    // - new instance of user was applied to public member user.
    expect(mockUserModelFactory.createSpy).toHaveBeenCalled();
    expect(activatedRouterMock.snapshot.data.user).toEqual(USER_MOCK);
    expect(component.user).toEqual(USER_MOCK);

    const compiledComponent = fixture.debugElement.nativeElement;

    // Verify that name was applied to H1 HTML element.
    expect(compiledComponent.querySelector('h1').innerHTML).toBe(USER_MOCK.name);
  });
});
