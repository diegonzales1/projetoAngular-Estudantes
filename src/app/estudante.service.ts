import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTE } from './mock-estudantes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudanteUrl = 'http://localhost:3000/estudantes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]>{
    return this.http.get<Estudante[]>(this.estudanteUrl)
      .pipe(
        tap(_ => this.log('fetched estudantes')),
        catchError(this.handleError<Estudante[]>('getEstudantes', []))
      );
  }

  getEstudante(id : number): Observable<Estudante> {
    const url = `${this.estudanteUrl}/${id}`;
    return this.http.get<Estudante>(url).pipe(
      tap(_ => this.log(`fetched estudanted id= ${id}`)),
      catchError(this.handleError<Estudante>(`getEstudante id= ${id}`))
    );
  }

  updateEstudante(estudante: Estudante): Observable<any> {
    const url = `${this.estudanteUrl}/${estudante.ra}`;
    return this.http.put(url, estudante, this.httpOptions)
    .pipe(
      tap(_ => this.log(`updated estudante`)),
      catchError(this.handleError<any>('updateEstudante'))
    );
  }

  addEstudante(estudante: Estudante): Observable<Estudante> {
    return this.http.post<Estudante>(this.estudanteUrl, estudante, this.httpOptions).pipe(
      tap((newEstudante: Estudante) => this.log(`added estudante w/ id=${newEstudante.ra}`)
      ), catchError(this.handleError<Estudante>('addEstudante'))
    );
  }

  deleteEstudante(ra: number): Observable<Estudante>{
    const url = `${this.estudanteUrl}/${ra}`;

    return this.http.delete<Estudante>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted estudante ra = ${ra}`)),
      catchError(this.handleError<Estudante>('deleteEstudante'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
    console.log(message)
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }





}
