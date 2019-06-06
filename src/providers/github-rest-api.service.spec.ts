import { TestBed, inject } from '@angular/core/testing';

import { GithubRestApiService } from './github-rest-api.service';

describe('GithubRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubRestApiService]
    });
  });

  it('should be created', inject([GithubRestApiService], (service: GithubRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
