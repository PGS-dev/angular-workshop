import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from './user.service';
import {AngularFirestore} from "angularfire2/firestore";
import {MockAngularFirestore} from "../../common/mocks/mock-angular-firestore";

describe('UserService', () => {
  let injector: TestBed;
  let service: UserService;

  let mockAngularFirestore: MockAngularFirestore;

  beforeEach(() => {
    mockAngularFirestore = new MockAngularFirestore();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        { provide: AngularFirestore, useValue: mockAngularFirestore }
      ]
    });

    injector = getTestBed();
    service = injector.get(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsersAngularFirestoreCollection() should get AngularFirestore query collection', () => {
    const UID_MOCK = 5;

    service.getUserQueryAngularFirestoreCollection(UID_MOCK);

    expect(mockAngularFirestore.collection).toHaveBeenCalledWith('users', jasmine.any(Function));
  });
});
