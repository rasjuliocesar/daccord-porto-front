import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autenticacao } from '../models/autenticacao.model';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  autenticar(autenticacao: Autenticacao) {
    return this.http.post(this.url, autenticacao);
  }
}
