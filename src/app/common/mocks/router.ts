import {ActivatedRoute} from '@angular/router';

export class MockActivatedRoute extends ActivatedRoute {
  snapshot: any;

  constructor(snapshot?: any) {
    super();

    if (snapshot) {
      this.snapshot = snapshot;
    }
  }
}
