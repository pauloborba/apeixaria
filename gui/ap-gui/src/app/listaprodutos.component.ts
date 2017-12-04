import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto';
import { ProdutosComponent } from './produtos.component'

 
@Component({
  selector: 'lista-produtos',
  templateUrl: './listaprodutos.component.html',
})
export class ListaProdutosComponent implements OnInit {
  @Input() prod: Produto;
 
  constructor(private produtoComponent: ProdutosComponent) { }

  ngOnInit() {
  }

  alterarValor(produto: Produto){
   this.produtoComponent.alterarValor(produto);
  }

  deletarProduto(produto: Produto){
    this.produtoComponent.deletarProduto(produto);
  }
 
}