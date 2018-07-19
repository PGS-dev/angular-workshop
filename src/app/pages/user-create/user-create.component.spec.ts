import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { UserCreateComponent } from './user-create.component';
import { ButtonComponent } from "../../components/button/button.component";
import { UserService } from "../user/user.service";
import { MockUserService } from "../user/mocks/mock-user.service";
import UserModelFactory from "../../common/models/user/user-model.factory";
import {MockUserModelFactory} from "../../common/models/user/mocks/mock-user-model.factory";
import UserModel from "../../common/models/user/user-model";

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

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
    website: 'ww.jdoe.com',
    company: {
      street: 'Wiśniowa',
      name: 'Rocket Space X'
    }
  };
  const USER_MOCK = new UserModel(USER_DATA);

  let mockUserService: MockUserService;
  let mockUserModelFactory: MockUserModelFactory;

  beforeEach(async(() => {
    mockUserService = new MockUserService({});
    mockUserModelFactory = new MockUserModelFactory(USER_DATA);

    TestBed.configureTestingModule({
      declarations: [UserCreateComponent, ButtonComponent],
      imports: [ReactiveFormsModule, RouterModule],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserModelFactory, useValue: mockUserModelFactory }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('ngOnInit() should create an empty form', () => {
    fixture.detectChanges();

    expect(component.userForm.controls.id.value).toBeNull();
    expect(component.userForm.controls.name.value).toBe('');
    expect(component.userForm.controls.username.value).toBe('');
    expect(component.userForm.controls.email.value).toBe('');
    expect(component.userForm.controls.addressStreet.value).toBe('');
    expect(component.userForm.controls.addressCity.value).toBe('');
    expect(component.userForm.controls.phone.value).toBe('');
    expect(component.userForm.controls.website.value).toBe('');
    expect(component.userForm.controls.companyStreet.value).toBe('');
    expect(component.userForm.controls.companyName.value).toBe('');

    expect(component.userForm.invalid).toBeTruthy();
    expect(mockUserService.saveUserInAngularFirestoreCollectionSpy).not.toHaveBeenCalled();
  });

  it('onSubmit() should save user in DB when form is valid', () => {
    fixture.detectChanges();

    component.userForm.setValue({
      'id': USER_DATA.id,
      'name': USER_DATA.name,
      'username': USER_DATA.username,
      'email': USER_DATA.email,
      'addressStreet': USER_DATA.address.street,
      'addressCity': USER_DATA.address.city,
      'phone': USER_DATA.phone,
      'website': USER_DATA.website,
      'companyStreet': USER_DATA.company.street,
      'companyName': USER_DATA.company.name
    });

    expect(component.userForm.invalid).toBeFalsy();

    component.onSubmit();

    expect(mockUserService.saveUserInAngularFirestoreCollectionSpy).toHaveBeenCalledWith(USER_MOCK);
  });
});
