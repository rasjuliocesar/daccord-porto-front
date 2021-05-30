import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private api = 'http://localhost:8080/genre';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.api  + '/all')
  }

  criar(genre: Genre): Observable<Genre>{
    return this.http.post<Genre>(this.api + '/add', genre)
  }

  lerPorId(id: string): Observable <Genre>{
    const url= `${this.api}/${id}`
    return this.http.get<Genre>(url)
  }

  editar(genre: Genre): Observable<Genre>{
    const url= `${this.api + '/update'}`
    return this.http.put<Genre>(url, genre)
  }

  deletar(id: string): Observable <Genre>{
    const url= `${this.api + '/delete'}/${id}`
    return this.http.delete<Genre>(url)
  }

  contarGeneros(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.api  + '/count/genre')
  }
}
