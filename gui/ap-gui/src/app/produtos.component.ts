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
   
   produto: Produto = new Produto();
   produtos: Produto[] = new Array();
   codrepetido: boolean = false;
   campoembranco: boolean = false;
   prodcadastrado: boolean = false;

   criarProduto(p: Produto): void {
    this.codrepetido = false;
    this.campoembranco = this.cadastroincompleto(p);
    if(!(this.campoembranco || this.codrepetido)) {
      this.produtoService.criar(p).then(prod =>{ 
         this.produtos.push(p);
         this.produto = new Produto();         
        })
       }
     }

    cadastroincompleto(p: Produto): boolean {
      var campo = null;
      var incompleto = false;
      for (var key in p) {
        // verifica, para todos os campos do produto se eles possuem valor válido
        if (p.hasOwnProperty(key)) {
          var element = p[key];
          if(element = null || element == undefined || element ==""){
            incompleto = true;
          }
        }
      }
      return incompleto;    
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
