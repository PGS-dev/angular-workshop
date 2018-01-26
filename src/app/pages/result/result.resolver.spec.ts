import { TestBed, inject } from '@angular/core/testing';

import { ResultResolver } from './result.resolver';

describe('ResultResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultResolver]
    });
  });

  it('should be created', inject([ResultResolver], (service: ResultResolver) => {
    expect(service).toBeTruthy();
  }));
});
