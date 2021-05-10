import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante'
import { ESTUDANTE } from '../mock-estudantes';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudantes = ESTUDANTE;
  selectedEstudante?: Estudante;

  estudante: Estudante = {
    ra: Math.floor((Math.random() * 100) + 1),
    name: "FULANO FULANES",
    telephone: 1530306254,
    class: "3B",
    motherName: "CICLANA FULANES"
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
