import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Teste de Despesa', dataVencimento: new Date(2018, 3, 29),
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'DESPESA', descricao: 'Teste de Despesa 2', dataVencimento: new Date(2019, 3, 29),
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'RECEITA', descricao: 'Teste de RECEITA', dataVencimento: new Date(2019, 3, 3),
     dataPagamento: null, valor: 4.55, pessoa: 'Pagador porreta'}
  ];

}
