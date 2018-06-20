import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute} from "@angular/router";
import {UsersComponent} from "../../pages/users/users.component";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    const userDataMock: Object = { id: 0 };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ UserComponent ]
    })
    .overrideComponent(UserComponent, {
      set: {
        providers: [
          {
            provide: ActivatedRoute, useValue: {
              snapshot: {
                data: {
                  user: userDataMock
                }
              }
            }
          }
        ]
      }
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
});
