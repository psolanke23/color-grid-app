import { TestBed } from '@angular/core/testing';

import { SearchColorService } from './search-color.service';

describe('SearchColorService', () => {
  let service: SearchColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
