import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "./users.service";
import {MockUsersService} from "./mocks/mock-users.service";
import {MockActivatedRoute} from "../../common/mocks/router";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersServiceMock: MockUsersService;
  let activatedRouterMock: MockActivatedRoute;

  beforeEach(async(() => {
    usersServiceMock = new MockUsersService();
    activatedRouterMock = new MockActivatedRoute();

    TestBed
      .configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [UsersComponent],
        providers: [
          { provide: UsersService, useValue: usersServiceMock },
          { provide: ActivatedRoute, useValue: activatedRouterMock }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should call service for the list of users', () => {
    const USERS_MOCK = [
      { id: 0, name: 'John Doe' },
      { id: 1, name: 'Catherine Jones' }
    ];

    usersServiceMock.setResponse(USERS_MOCK);
    fixture.detectChanges();

    // Verify that service was called to fetch data.
    expect(usersServiceMock.getUsersSpy).toHaveBeenCalled();

    // Verify that subscriber returns correct data.
    usersServiceMock.getUsersSpy().subscribe((users) => {
      expect(users).toEqual(USERS_MOCK);
    });
  });
});
