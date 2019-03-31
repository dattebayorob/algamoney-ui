import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Teste de Despesa', dataVencimento: '29/03/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'DESPESA', descricao: 'Teste de Despesa 2', dataVencimento: '02/04/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'RECEITA', descricao: 'Teste de RECEITA', dataVencimento: '29/03/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Pagador porreta'}
  ];

}
