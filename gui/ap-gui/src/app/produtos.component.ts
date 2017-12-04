import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Produto } from './produto';
import { ListaProdutosComponent } from './listaprodutos.component';
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
   prod: Produto;

   criarProduto(p: Produto): void {
    this.codrepetido = this.jaexisteProduto(p);
    this.campoembranco = this.cadastroincompleto(p);
    if(!this.campoembranco && !this.codrepetido) {
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
        if (p.hasOwnProperty(key)) {
          // verifica, para todos os campos do produto se eles possuem valor válido
          var element = p[key];
          if(element = null || element == undefined || element ==""){
            incompleto = true;
          }
        }
      }
      return incompleto;    
   } 

   jaexisteProduto(p: Produto): boolean{
    for(var i = 0; i < this.produtos.length; i++){
      if(p.codigo == this.produtos[i].codigo){
         return true;
      }
    }
    return false;
 } 

    alterarValor(p: Produto): void {
     this.produtoService.alterar(p)
     .catch(erro => alert(erro));
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
