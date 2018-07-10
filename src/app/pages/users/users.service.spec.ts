import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {UsersService} from './users.service';

xdescribe('UsersService', () => {
  let injector: TestBed;
  let usersService: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    injector = getTestBed();
    usersService = injector.get(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('getUsersAngularFirestoreCollection() should retrieve list of users', () => {
    const EXPECTED_DATA = [
      { id: 0 },
      { id: 1 }
    ];

    usersService.getUsersAngularFirestoreCollection().subscribe((users: any) => {
      expect(users).toEqual(EXPECTED_DATA);
      expect(users.length).toBe(2);
    });

    const EXPECTED_URL = 'https://jsonplaceholder.typicode.com/users';
    const EXPECTED_REQUEST = httpTestingController.expectOne(EXPECTED_URL);

    expect(EXPECTED_REQUEST.request.method).toBe('GET');
    expect(EXPECTED_REQUEST.request.url).toBe(EXPECTED_URL);

    EXPECTED_REQUEST.flush(EXPECTED_DATA);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
