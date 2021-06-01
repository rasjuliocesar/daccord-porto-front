import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../models/song.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private api = 'http://localhost:8080/song';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Song[]>{
    return this.http.get<Song[]>(this.api  + '/all')
  }

  criar(song: Song): Observable<Song>{
    return this.http.post<Song>(this.api + '/add', song)
  }

  lerPorId(id: string): Observable <Song>{
    const url= `${this.api}/${id}`
    return this.http.get<Song>(url)
  }

  editar(song: Song): Observable<Song>{
    const url= `${this.api + '/update'}`
    return this.http.put<Song>(url, song)
  }

  deletar(id: string): Observable <Song>{
    const url= `${this.api + '/delete'}/${id}`
    return this.http.delete<Song>(url)
  }

  contarMusicas(): Observable<number>{
    return this.http.get<number>(this.api  + '/count/song')
  }

  buscarMusicas(tipo: number, valor: string){
    
  }
}
