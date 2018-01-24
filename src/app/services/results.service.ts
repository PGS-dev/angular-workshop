import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Firebase
import { AngularFireDatabase} from 'angularfire2/database';

// Modles
import { Result } from '../models/result';

@Injectable()
export class ResultsService {

  constructor(public db: AngularFireDatabase) {
  }

  items = this.db.list('results').valueChanges();

  addResult(result: Result) {
    const itemsRef = this.db.list('results');
    itemsRef.push(result);
  }

}
