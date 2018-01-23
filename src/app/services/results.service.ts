import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Firebase
import { AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class ResultsService {

  constructor(public db: AngularFireDatabase) {
  }

  items = this.db.list('results').valueChanges();

}
