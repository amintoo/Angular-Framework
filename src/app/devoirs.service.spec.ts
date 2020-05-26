import { TestBed } from '@angular/core/testing';

import { DevoirsService } from './devoirs.service';

describe('DevoirsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevoirsService = TestBed.get(DevoirsService);
    expect(service).toBeTruthy();
  });
});
