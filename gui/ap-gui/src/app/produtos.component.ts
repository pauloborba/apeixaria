import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutosComponent implements OnInit {
   constructor(private produtoService: ProdutoService) {}

   produto: Produto = new Produto();
   produtos: Produto[];
   cpfduplicado: boolean = false;

   criarProduto(p: Produto): void {
     
   }
   deletarProduto(p: Produto): void {
    
   }
   alterarProduto(cod: number, novoPreco: number): void {
    
   }
   buscarProduto(cod: number): Produto {
    return null
   }

}