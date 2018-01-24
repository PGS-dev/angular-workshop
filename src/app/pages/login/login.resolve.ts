import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { AuthenticationService } from '../../services/authentication.service';


@Injectable()
export class LoginResolve implements Resolve<any> {

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  resolve(): Observable<any> {
    return this.authenticationService.authState$.first();

  }
}
