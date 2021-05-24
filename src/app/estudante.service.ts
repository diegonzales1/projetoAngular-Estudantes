import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTE } from './mock-estudantes';
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor() { }

  getEstudantes(): Observable<Estudante[]>{
    const estudantes = of(ESTUDANTE);
    return estudantes;
  }

}
