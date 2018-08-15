import { TestBed, inject } from '@angular/core/testing';

import { MytasksListService } from './mytasks-list.service';

describe('MytasksListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MytasksListService]
    });
  });

  it('should be created', inject([MytasksListService], (service: MytasksListService) => {
    expect(service).toBeTruthy();
  }));
});
