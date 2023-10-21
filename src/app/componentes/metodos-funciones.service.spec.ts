import { TestBed } from '@angular/core/testing';

import { MetodosFuncionesService } from './metodos-funciones.service';

describe('MetodosFuncionesService', () => {
  let service: MetodosFuncionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosFuncionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
