import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UsersService} from './users.service';
import {AngularFirestore} from "angularfire2/firestore";
import {MockAngularFirestore} from "../../common/mocks/mock-angular-firestore";

describe('UsersService', () => {
  let injector: TestBed;
  let service: UsersService;

  let mockAngularFirestore: MockAngularFirestore;

  beforeEach(() => {
    mockAngularFirestore = new MockAngularFirestore();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
        { provide: AngularFirestore, useValue: mockAngularFirestore }
      ]
    });

    injector = getTestBed();
    service = injector.get(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsersAngularFirestoreCollection() should get AngularFirestore query collection', () => {
    service.getUsersAngularFirestoreCollection();

    expect(mockAngularFirestore.collection).toHaveBeenCalledWith('users');
  });
});
