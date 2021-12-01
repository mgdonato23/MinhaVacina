import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario-model';

const URL_API = 'http://localhost:3000/usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuariosService {
  constructor(private httpClient: HttpClient) {}

  getCadastros(): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(URL_API);
  }

  putCadastro(body: UsuarioModel): Observable<UsuarioModel> {
    return this.httpClient.put<UsuarioModel>(URL_API, body);
  }

  postCadastro(body: UsuarioModel): Observable<UsuarioModel> {
    return this.httpClient.post<UsuarioModel>(URL_API, body.IDUsuario);
  }

  deleteCadastro(idUsuario: UsuarioModel): Observable<UsuarioModel> {
    return this.httpClient.delete<UsuarioModel>(URL_API + `/${idUsuario.IDUsuario}`);
  }
}
