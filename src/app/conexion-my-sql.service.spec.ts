import { TestBed } from '@angular/core/testing';

import { ConexionMySqlService } from './conexion-my-sql.service';

describe('ConexionMySqlService', () => {
  let service: ConexionMySqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionMySqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
