import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Firebase
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

// Modles
import { Result } from '../models/result';

@Injectable()
export class ResultsService {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.itemsRef = db.list('results');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }


  addResult(result: Result) {
    this.itemsRef.push(result);
  }

  updateresult(key: string, result: Result) {
    this.itemsRef.update(key, result);
  }

  removeResult(key: string) {
    this.itemsRef.remove(key);
  }

}
