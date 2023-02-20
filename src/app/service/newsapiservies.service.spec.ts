import { TestBed } from '@angular/core/testing';

import { NewsapiserviesService } from './newsapiservies.service';

describe('NewsapiserviesService', () => {
  let service: NewsapiserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
