import { TestBed } from '@angular/core/testing';

import { PerroGuardianGuard } from './perro-guardian.guard';

describe('PerroGuardianGuard', () => {
  let guard: PerroGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PerroGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
