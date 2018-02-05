import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Models
import { Result } from '../models/result';

@Injectable()
export class ResultsService {

  resultsRef: AngularFireList<any>;
  results: Observable<any[]>;
  item: any;

  constructor(public db: AngularFireDatabase) {
    this.resultsRef = db.list('results');
    this.results = this.resultsRef.snapshotChanges()
                        .map(changes => {
                          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                        });
  }

  addResult(result: Result) {
    this.resultsRef.push(result);
  }

  updateResult(key: string, result: Result) {
    this.resultsRef.update(key, result);
  }

  removeResult(key: string) {
    this.resultsRef.remove(key);
  }

  filterData(results, searchTerm) {
    return results.filter( data => {
      return data['name'].toLowerCase().indexOf(searchTerm) > -1;
    });
  }
}
