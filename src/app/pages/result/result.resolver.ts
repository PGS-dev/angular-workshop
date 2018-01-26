import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

// firebase
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ResultResolver implements Resolve<any> {

  constructor(
    public angularFireDatabase: AngularFireDatabase
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.angularFireDatabase.object('/results/' + id).valueChanges().first();
  }
}
