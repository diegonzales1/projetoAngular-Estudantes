import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudantes: Estudante[] = [];

  selectedEstudante?: Estudante;

  constructor(private estudanteService: EstudanteService, private messagesService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
    this.messagesService.add(`EstudanteComponent: Selected estudante id=${estudante.ra}`);
  }



}
