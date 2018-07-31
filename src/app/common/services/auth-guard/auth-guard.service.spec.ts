import {TestBed, inject} from '@angular/core/testing';

import {AuthGuardService} from './auth-guard.service';
import {AuthService} from "../auth/auth.service";
import {MockAuthService} from "../auth/mocks/mock-auth.service";

describe('AuthGuardService', () => {
  let mockAuthService: MockAuthService;

  beforeEach(() => {
    mockAuthService = new MockAuthService();

    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AuthService, userValue: mockAuthService }
      ]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
