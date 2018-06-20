import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {UsersService} from './users.service';
import {HttpClient} from "@angular/common/http";

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
