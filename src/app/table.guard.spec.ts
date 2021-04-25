import { TestBed } from '@angular/core/testing';

import { TableGuard } from './table.guard';

describe('TableGuardGuard', () => {
  let guard: TableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
