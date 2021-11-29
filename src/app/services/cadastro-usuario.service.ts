import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario-model';

const URL_API = '';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {
  constructor(private httpClient: HttpClient) {}

  getUss(): Observable<UsuarioModel[]> {
    return this.httpClient.get<UsuarioModel[]>(URL_API);
  }

  postUsuarios(usuario: UsuarioModel) {
    return this.httpClient.post(URL_API, usuario);
  }
}
