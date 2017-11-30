import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import {Produto} from './produto';
import {ProdutoService} from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private produtoService: ProdutoService) {}

  produto: Produto = new Produto();
  produtos: Produto[];
  codDuplicado: boolean = false;

  criarProduto(p: Produto): void{
    if(this.produtoService.criar(p)){
      this.produtos.push(p);
      this.produto = new Produto();
    } else {
      this.codDuplicado = true;
    }
  }

  onMove(): void {
    this.codDuplicado = false;
  }

}
