import { TestBed } from '@angular/core/testing';

import { Lesson4Service } from './lesson4.service';

describe('Lesson4Service', () => {
  let service: Lesson4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lesson4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
