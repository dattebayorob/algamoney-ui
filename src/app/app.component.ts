import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Profissao {
  id: number;
  nome: string;
}
class Usuario {
  nome: string;
  email: string;
  profissaoId: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'algamoney-ui';
  usuario = {};
  profissoes = [
    { id: 1, nome: 'Engenheiro' }, { id: 2, nome: 'Teco'}, {id: 3, nome: 'Programador'}
  ];
  save(form: NgForm){
    console.log(this.usuario);
    console.log(form.value);
    console.log(this.usuario);
  }
}
