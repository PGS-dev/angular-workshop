import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {RouterTestingModule} from "@angular/router/testing";
import UsersModelFactory from "../../common/models/users/users-model.factory";
import {ActivatedRoute} from "@angular/router";
import UserModel from "../../common/models/user/user-model";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersDataMock: UserModel[] = [
    new UserModel({ id: 0 }),
    new UserModel({ id: 1 }),
  ];
  let usersModelFactory: UsersModelFactory;
  let spyOnCreate: jasmine.Spy;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [UsersComponent]
      })
      .overrideComponent(UsersComponent, {
        set: {
          providers: [
            {
              provide: ActivatedRoute, useValue: {
                snapshot: {
                  data: {
                    users: usersDataMock
                  }
                }
              }
            },
            // {
            //   provide: UsersModelFactory, useValue: {
            //     create: () => usersDataMock
            //   }
            // }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // usersModelFactory = fixture.debugElement.injector.get(UsersModelFactory);
    // spyOnCreate = spyOn(usersModelFactory, 'create').and.returnValue(usersDataMock);

    expect(component).toBeTruthy();
    expect(component.users).toEqual(usersDataMock);
  });
});
