import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'algamoney-ui';

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Teste de Despesa', dataVencimento: '29/03/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'DESPESA', descricao: 'Teste de Despesa 2', dataVencimento: '02/04/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Cobrador'},
    {tipo: 'RECEITA', descricao: 'Teste de RECEITA', dataVencimento: '29/03/2018',
     dataPagamento: null, valor: 4.55, pessoa: 'Pagador porreta'}
  ];
}
