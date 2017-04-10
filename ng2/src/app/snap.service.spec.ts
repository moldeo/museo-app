import { TestBed, inject } from '@angular/core/testing';

import { SnapService } from './snap.service';

describe('SnapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnapService]
    });
  });

  it('should ...', inject([SnapService], (service: SnapService) => {
    expect(service).toBeTruthy();
  }));
});
