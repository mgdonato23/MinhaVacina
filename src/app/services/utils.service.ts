import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public static gerarToken() {
    let token = {
      headers: new HttpHeaders({
        Authorization: environment.tokenUsuario,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }),
    };

    return token;
  }
}
