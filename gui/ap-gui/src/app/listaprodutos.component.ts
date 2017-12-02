import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto';
 
@Component({
  selector: 'lista-produtos',
  templateUrl: './listaprodutos.component.html',
})
export class ListaProdutosComponent implements OnInit {
  @Input() prod: Produto;
 
  constructor() { }
 
  ngOnInit() {
  }
 
}