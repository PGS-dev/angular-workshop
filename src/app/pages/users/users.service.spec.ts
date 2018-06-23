import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {UsersService} from './users.service';
import {HttpClient} from "@angular/common/http";
import {async} from "q";

describe('UsersService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should invoke HTTP request for users', () => {
    const usersDataMock = [
      { id: 0 },
      { id: 1 }
    ];
    const urlMock = 'https://jsonplaceholder.typicode.com/users';

    httpClient.get(urlMock)
      .subscribe((data) => {
        expect(data).toEqual(usersDataMock);
      });

    const req = httpTestingController.expectOne(urlMock);

    expect(req.request.method).toEqual('GET');

    req.flush(usersDataMock);

    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});

xdescribe('UsersService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let usersService: UsersService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    usersService = new UsersService(<any> httpClientSpy);
  });

  it('', () => {
    const expectedUsers = [
      { id: 0 },
      { id: 1 }
    ];

    httpClientSpy.get.and.returnValue(async(expectedUsers));

    usersService.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers, 'expected users'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
