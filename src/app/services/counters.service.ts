import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Counters } from '../models/counters.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountersService {
  private api = 'http://localhost:8080/counters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'text' as 'json',
    }),
  };

  httpOptionsPlain = {
    headers: new HttpHeaders({
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    }),
    responseType: 'text',
  };

  constructor(
    private http: HttpClient,
    //private messageService: MessageService
  ) {}

  getCounters(): Observable<Counters[]> {
    const id = '/Bp1IsLTDVtUfa4fAfC7C';
    console.log(this.api +id);
    return this.http.get<Counters[]>(this.api + id).pipe(
      tap((_) => this.log('Counters Recuperados')),
      catchError(this.handleError<Counters[]>('getCounters', []))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      //this.messageService.add(`ClienteService: ${message}`);
    }
}
