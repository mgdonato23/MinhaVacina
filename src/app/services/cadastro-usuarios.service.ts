import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuario-model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuariosService {
  rota: string = 'usuario';
  url: string = `${environment.apiURL}${this.rota}`;
  constructor(private httpClient: HttpClient) {}

  getCadastros(): Observable<UsuarioModel> {
    let url = environment.apiURL + this.rota;
    return this.httpClient.get<UsuarioModel>(url, UtilsService.gerarToken());
  }

  getCadastrosById(id: number): Observable<UsuarioModel> {
    let url = environment.apiURL + this.rota + id;
    return this.httpClient.get<UsuarioModel>(url, UtilsService.gerarToken());
  }

  updateCadastro(body: UsuarioModel): Observable<void> {
    let url = `${environment.apiURL}${this.rota}/${body.id}`;
    return this.httpClient.put<void>(url, body);
  }

  postCadastro(body: UsuarioModel): Observable<UsuarioModel> {
    let url = environment.apiURL + this.rota;
    return this.httpClient.post<UsuarioModel>(
      url,
      body,
      UtilsService.gerarToken()
    );
  }

  deleteCadastro(idUsuario: UsuarioModel): Observable<UsuarioModel> {
    let url = `${environment.apiURL}${this.rota}/${idUsuario}`;
    return this.httpClient.delete<UsuarioModel>(url, UtilsService.gerarToken());
  }
}
