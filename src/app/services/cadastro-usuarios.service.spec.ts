import { TestBed } from '@angular/core/testing';

import { CadastroUsuariosService } from './cadastro-usuarios.service';

describe('CadastroUsuariosService', () => {
  let service: CadastroUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
