import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
   constructor(private produtoService: ProdutoService) {}
   
   campos: string[] = ["codigobox", "nomebox", "valorbox", "unidade_de_medidabox", "categoriabox"]; 
   propriedades: string[] = ["codigo", "nome", "valor","unidade_de_medida", "categoria"];
   produto: Produto = new Produto();
   produtos: Produto[] = new Array();
   codrepetido: boolean = false;
   campoembranco: boolean = false;
   prodcadastrado: boolean = false;

   criarProduto(p: Produto): void {
    this.codrepetido = false
    this.campoembranco = false
    if(!(this.campoembranco || this.codrepetido)) {
      this.produtoService.criar(p).then(prod =>{ 
         this.produtos.push(p);
         this.produto = new Produto();         
        })
       }
     }

  
   ngOnInit(): void {
    console.log();
    this.produtoService.getProdutos()
        .then(prods => this.produtos = prods)
        .catch(erro => alert(erro));
  }
  onMove(): void {
  }


}
