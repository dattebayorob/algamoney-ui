import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent{
  pessoas = [
    {
      nome : 'Fulano', cidade : 'Fortaleza', estado: 'CE', status: 'inativo'
    },
    {
      nome: 'Fulano 2', cidade : 'Recife', estado: 'PB', status: 'ativo'
    },
    {
      nome: 'Fulano 3', cidade : 'Recife', estado: 'PB', status: 'ativo'
    },
    {
      nome: 'Fulano 4', cidade : 'Recife', estado: 'PB', status: 'ativo'
    }
  ];

}
