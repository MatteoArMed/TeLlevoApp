import { TestBed } from '@angular/core/testing';

import { MetodosSqliteService } from './metodos-sqlite.service';

describe('MetodosSqliteService', () => {
  let service: MetodosSqliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosSqliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});