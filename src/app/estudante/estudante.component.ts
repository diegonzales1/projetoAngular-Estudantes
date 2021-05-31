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

  constructor(private estudanteService: EstudanteService, private messagesService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }

  add(ra: number, name: string, telephone: number, motherName: string): void{
    name = name.trim();
    motherName = motherName.trim();

    if(!name)
     return;

    if(!motherName)
    return;
     
    this.estudanteService.addEstudante({ra, name, telephone, motherName } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      })
 }

 delete(estudante: Estudante): void {
   this.estudantes = this.estudantes.filter(est => est !== estudante);
   this.estudanteService.deleteEstudante(estudante.ra).subscribe();
 }
}
