import { TestBed } from '@angular/core/testing';

import { TokenCompletionService } from './token-completion.service';

describe('TokenCompletionService', () => {
  let service: TokenCompletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenCompletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
