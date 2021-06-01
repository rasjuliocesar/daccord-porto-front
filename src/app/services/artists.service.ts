import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artists } from '../models/artists.model';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private api = 'http://localhost:8080/artists';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagem(msg: string){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ler(): Observable<Artists[]>{
    return this.http.get<Artists[]>(this.api  + '/all')
  }

  criar(artists: Artists): Observable<Artists>{
    return this.http.post<Artists>(this.api + '/add', artists)
  }

  lerPorId(id: string): Observable <Artists>{
    const url= `${this.api}/${id}`
    return this.http.get<Artists>(url)
  }

  editar(artists: Artists): Observable<Artists>{
    const url= `${this.api + '/update'}`
    return this.http.put<Artists>(url, artists)
  }

  deletar(id: string): Observable <Artists>{
    const url= `${this.api + '/delete'}/${id}`
    return this.http.delete<Artists>(url)
  }

  contarArtistas(): Observable<number>{
    return this.http.get<number>(this.api  + '/count/artist')
  }

  buscarArtistas(tipo: number, valor: string){
    
  }
}
