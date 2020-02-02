import { TestBed } from '@angular/core/testing';

import { ExperienceProService } from './experience-pro.service';

describe('ExperienceProService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienceProService = TestBed.get(ExperienceProService);
    expect(service).toBeTruthy();
  });
});
