import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://localhost:8080/user';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<User[]>{
    return this.http.get<User[]>(this.api  + '/all')
  }

  criar(user: User): Observable<User>{
    return this.http.post<User>(this.api + '/add', user)
  }

  lerPorId(id: string): Observable <User>{
    const url= `${this.api}/${id}`
    return this.http.get<User>(url)
  }

  editar(user: User): Observable<User>{
    const url= `${this.api + '/update'}`
    return this.http.put<User>(url, user)
  }

  deletar(id: string): Observable <User>{
    const url= `${this.api + '/delete'}/${id}`
    return this.http.delete<User>(url)
  }
}
