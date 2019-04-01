import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-tests',
  templateUrl: './pipes-tests.component.html',
  styleUrls: ['./pipes-tests.component.css']
})
export class PipesTestsComponent{
  nome = 'Qualquer Coisa';
  dataAniversario = new Date(1993, 11, 18);
  preco = 12855.32;
  troco = 0.57392;
}
