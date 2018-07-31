import { Injectable } from '@angular/core';
import {AsyncSubject, fromEvent, Observable, of, range} from "rxjs/index";
import {filter, map} from "rxjs/internal/operators";
import {endWith} from "rxjs/internal/operators/endWith";
import {Subject} from 'rxjs/internal/Subject';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  constructor(
    private httpClient: HttpClient
  ) {}

  public simpleObservable(): Observable<number> {
    return Observable.create(observer => {
      observer.next(5);
    });
  }

  public simpleObservable2(val): Observable<number> {
    return Observable.create(observer => {
      observer.next(val);
      observer.next(val);
      observer.next(val);

      setTimeout(() => {
        observer.next(val);
        observer.complete();
      }, 1000);
    });
  }

  public fromRange(): Observable<number> {
    return range(0, 10)
      .pipe(
        filter(x => x % 5 === 0)
      );
  }

  public onInputChange(): Observable<string> {
    const input = document.getElementById('my-input');

    return fromEvent(input, 'blur')
      .pipe(
        map(ev => (<HTMLInputElement>ev.target).value)
      );
  }

  public onEmailCorrect(): Observable<string> {
    const input = document.getElementById('my-input');

    return fromEvent(input, 'blur')
      .pipe(
        filter(val => (<HTMLInputElement>val.target).value.includes('@')),
        map(val => (<HTMLInputElement>val.target).value)
      );
  }

  public observableChain(): Subject<any> {
    const subscription = new Subject();

    subscription.subscribe({
      next: (v) => console.log('obsA:', v)
    });

    subscription.subscribe({
      next: (v) => console.log('obsB:', v)
    });

    subscription.next(0);

    return subscription;
  }

  public asyncChain(): AsyncSubject<any> {
    const subscription = new AsyncSubject();

    subscription.subscribe({
      next: (v) => console.log('XobsA:', v)
    });

    subscription.next(0);
    subscription.next(1);
    subscription.next(2);
    subscription.next(10);

    subscription.subscribe({
      next: (v) => console.log('XobsB:', v)
    });

    subscription.complete();

    return subscription;
  }
}
