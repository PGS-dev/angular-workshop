import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDiffComponent} from './user-diff.component';
import {Store} from "@ngrx/store";
import {MockStore} from "../../common/mocks/mock-store";
import {getUserEditDiffSelector} from "../../state/user-edit/user-edit.reducer";
import {IUserEditDiffState} from "../../state/user-edit/user-edit";
import UserModel from "../../common/models/user/user-model";

describe('UserDiffComponent', () => {
  let component: UserDiffComponent;
  let fixture: ComponentFixture<UserDiffComponent>;

  let mockStore: MockStore<IUserEditDiffState>;

  beforeEach(async(() => {
    mockStore = new MockStore();

    TestBed.configureTestingModule({
      declarations: [UserDiffComponent],
      providers: [{
        provide: Store,
        useValue: mockStore
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiffComponent);
    component = fixture.componentInstance;
    component.uid = 'CDsehBVSE5sadv6';
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should read from store and assign initialUser data', () => {
    const USER_MOCK = new UserModel({
      id: 'CDsehBVSE5sadv6',
      name: 'John Doe'
    });
    mockStore.setState({
      initialData: USER_MOCK,
      currentData: null
    });
    mockStore.select().subscribe(() => {
      fixture.detectChanges();
      expect(component.initialUser).toEqual(USER_MOCK);
      expect(component.currentUser).toEqual(null);
    });
  });
});
