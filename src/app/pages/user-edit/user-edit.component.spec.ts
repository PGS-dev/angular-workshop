import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserEditComponent} from './user-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user/user.service";
import {MockUserService} from "../user/mocks/mock-user.service";
import {ButtonComponent} from "../../components/button/button.component";
import {LoaderComponent} from "../../components/loader/loader.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MockUserModelFactory} from "../../common/models/user/mocks/mock-user-model.factory";
import {UserModelFactory} from "../../common/models/user/user-model.factory";
import UserModel from "../../common/models/user/user-model";
import {ActivatedRoute} from "@angular/router";
import {MockActivatedRoute} from "../../common/mocks/router";
import {Store, StoreModule} from "@ngrx/store";
import {UserDiffComponent} from "../../components/user-diff/user-diff.component";
import {MockStore} from "../../common/mocks/mock-store";
import {IUserEditDiffState} from "../../state/user-edit/user-edit";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

describe('UserEditComponent', () => {
  let component: UserEditComponent;
  let fixture: ComponentFixture<UserEditComponent>;

  const USER_DATA = {
    id: 'ascIUGYEBFV*&ASb',
    name: 'John Doe',
    username: 'jdoe',
    email: 'jdoe@jdoe.com',
    address: {
      street: 'Wejherowska',
      city: 'Wrocław'
    },
    phone: '111222333',
    website: 'www.jdoe.com',
    company: {
      street: 'Wiśniowa',
      name: 'Rocket Space X'
    }
  };
  const USER_MOCK = new UserModel(USER_DATA);

  let mockUserService: MockUserService;
  let mockUserModelFactory: MockUserModelFactory;
  let mockActivatedRoute: ActivatedRoute;
  let mockStore: MockStore<IUserEditDiffState>;

  beforeEach(async(() => {
    mockUserService = new MockUserService(USER_DATA);
    mockUserModelFactory = new MockUserModelFactory(USER_DATA);
    mockActivatedRoute = new MockActivatedRoute({
      params: {
        id: USER_DATA.id
      }
    });
    mockStore = new MockStore();

    TestBed.configureTestingModule({
      declarations: [UserEditComponent, ButtonComponent, LoaderComponent, UserDiffComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserModelFactory, useValue: mockUserModelFactory },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Store, useValue: mockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditComponent);
    component = fixture.componentInstance;

    mockStore.setState({
      initialData: null,
      currentData: null
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit() should assign user data to form', () => {
    fixture.detectChanges();

    mockUserService.getUserQueryAngularFirestoreCollectionSpy().valueChanges().subscribe((user) => {
      expect(user).toEqual(USER_DATA);
      expect(component.user).toEqual(USER_MOCK);
      expect(component.userForm.invalid).toBeFalsy();

      expect(component.userForm.controls.id.value).toEqual(USER_DATA.id);
      expect(component.userForm.controls.name.value).toEqual(USER_DATA.name);
      expect(component.userForm.controls.username.value).toEqual(USER_DATA.username);
      expect(component.userForm.controls.email.value).toEqual(USER_DATA.email);
      expect(component.userForm.controls.addressStreet.value).toEqual(USER_DATA.address.street);
      expect(component.userForm.controls.addressCity.value).toEqual(USER_DATA.address.city);
      expect(component.userForm.controls.phone.value).toEqual(USER_DATA.phone);
      expect(component.userForm.controls.website.value).toEqual(USER_DATA.website);
      expect(component.userForm.controls.companyStreet.value).toEqual(USER_DATA.company.street);
      expect(component.userForm.controls.companyName.value).toEqual(USER_DATA.company.name);
    });
  });

  it('onSubmit() should update user data in DB', () => {
    fixture.detectChanges();

    component.onSubmit();

    expect(mockUserService.editUserInAngularFirestoreCollectionSpy).toHaveBeenCalledWith(USER_MOCK);
  });
});
