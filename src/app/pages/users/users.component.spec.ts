import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "./users.service";
import {UsersServiceMock} from "./mocks/users.service";
import {ActivatedRouteMock} from "../../common/mocks/router";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersServiceMock: UsersServiceMock;
  let activatedRouterMock: ActivatedRouteMock;

  beforeEach(async(() => {
    usersServiceMock = new UsersServiceMock();
    activatedRouterMock = new ActivatedRouteMock();

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
});
