import { TestBed, inject } from '@angular/core/testing';

import { NasaAPODService } from './nasa-apod.service';

describe('NasaAPODService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NasaAPODService]
    });
  });

  it('should be created', inject([NasaAPODService], (service: NasaAPODService) => {
    expect(service).toBeTruthy();
  }));
});
