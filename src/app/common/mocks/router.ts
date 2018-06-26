import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';

export class MockActivatedRoute extends ActivatedRoute {
  params: Observable<Params>;
  snapshot: any = { data : {}};

  constructor(parameters?: { [key: string]: any; }, dataFieldName?: string) {
    super();

    this.params = of(parameters);

    if (dataFieldName) {
      this.snapshot.data[dataFieldName] = parameters;
    }
  }
}

export class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
