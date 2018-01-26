import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

// firebase
import { AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class LoginResolve implements Resolve<any> {

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  resolve(): Observable<boolean> {
    return this.afAuth.authState.first().map( user => {
      if (!user) {
        return false;
      }
      return true;
    });
  }
}
