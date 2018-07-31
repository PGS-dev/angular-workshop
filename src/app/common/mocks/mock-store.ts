import {BehaviorSubject, Observable} from 'rxjs';
import Spy = jasmine.Spy;
import {SpyObject} from "./helpers";
import {Store} from "@ngrx/store";

export class MockStore<T> extends SpyObject {
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);
  public dispatch: Spy;

  constructor() {
    super(Store);

    this.dispatch = this.spy('dispatch');
  }

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }
}
