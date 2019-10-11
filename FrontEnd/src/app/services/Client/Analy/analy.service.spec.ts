import { TestBed } from '@angular/core/testing';

import { AnalyService } from './analy.service';

describe('AnalyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyService = TestBed.get(AnalyService);
    expect(service).toBeTruthy();
  });
});
