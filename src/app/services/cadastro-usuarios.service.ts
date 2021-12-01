import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOkObjectResult } from '../models/requisicao.interface';
import { UsuarioModel } from '../models/usuario-model';

const URL_API = '';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuariosService {
  constructor(private httpClient: HttpClient) {}

  getCadastros(): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(URL_API);
  }

  putCadastros(body: UsuarioModel): Observable<IOkObjectResult<string>> {
    return this.httpClient.put<IOkObjectResult<string>>(URL_API, body);
  }

  postCadastros(body: UsuarioModel): Observable<IOkObjectResult<string>> {
    return this.httpClient.post<IOkObjectResult<string>>(URL_API, body);
  }

  deleteCadastro(item: UsuarioModel): Observable<IOkObjectResult<string>> {
    return this.httpClient.delete<IOkObjectResult<string>>(
      URL_API + `/${item.IDUsuario}`
    );
  }
}
