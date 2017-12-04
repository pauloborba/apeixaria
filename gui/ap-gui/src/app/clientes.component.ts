import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
   constructor(private clienteService: ClienteService) {}

   cliente: Cliente = new Cliente();
   clientes: Cliente[];
   cpf_cnpjduplicado: boolean = false;
   atualizado: boolean = false;
   cancelAlt: boolean = false;
   completo: boolean = true;
   invalido: boolean = false;

   verificaCampos(c: Cliente): void {
    this.completo = true;
    this.invalido = false;

    this.verify(c.nome, 'nomeLabel');
    this.verify(c.telefone, 'telefoneLabel');
    this.verify(c.endereco.rua, 'ruaLabel');
    this.verify(c.endereco.numero, 'numeroLabel');
    this.verify(c.endereco.cidade, 'cidadeLabel');
    this.verify(c.cpf_cnpj, 'CPF_ou_CNPJLabel');
    this.campoInvalido(c.cpf_cnpj, 'CPF_ou_CNPJLabel');
    this.campoInvalido(c.telefone, 'telefoneLabel');
    this.campoInvalido(c.endereco.numero, 'numeroLabel');

    if (c.lojista === c.consumidor_final) {
      this.completo = false;
      this.pintaVermelho('consumidor_finalLabel');
      this.pintaVermelho('lojistaLabel');
    } else {
      this.pintaAzul('consumidor_finalLabel');
      this.pintaAzul('lojistaLabel');
    }

   }

   verify(c: string, s: string): void {
    if (this.nullorEmpty(c)) {
      this.completo = false;
      this.pintaVermelho(s);
    } else {
      this.pintaAzul(s);
    }
   }

   nullorEmpty(s: string): boolean {
    if (s === '' || s === null) {return true; }
   }

   pintaVermelho(s: string): void {
    document.getElementById(s).style.color = 'red';
   }
   pintaAzul(s: string): void {
    document.getElementById(s).style.color = '#0f82c1';
  }

   isNumber(n: string): boolean {
    return !isNaN(parseFloat(n)) && /^\d+$/.test(n);
   }

   campoInvalido(c: string, s: string): void {
    if (!this.isNumber(c)) {
      this.invalido = true;
      this.pintaVermelho(s);
    } else {
      this.pintaAzul(s);
    }
   }

   criarCliente(c: Cliente): void {
     this.cancelAlt = false;
     this.completo = true;
     this.invalido = false;
     this.atualizado = false;
     this.verificaCampos(c);
     if (this.completo && !this.invalido) {
        this.clienteService.criar(c)
        .then(ab => {
           if (ab) {
              this.clientes.push(ab);
              this.cliente = new Cliente();
           } else {
              this.cpf_cnpjduplicado = true;
           }
        })
        .catch(erro => alert(erro));
     }
   }

   atualizarCliente(c: Cliente) {
    this.cancelAlt = false;
    this.completo = true;
    this.invalido = false;
    this.atualizado = false;
    this.verificaCampos(c);
    if (this.completo && !this.invalido) {
     this.clienteService.atualizar(c)
     .then(ab => {
       if (ab) {
         this.atualizado = true;
       }
     })
     .catch(erro => alert(erro));
    }
   }

   cancelarAlteracao(c: Cliente): void {
    this.cancelAlt = true;
    this.completo = true;
    this.invalido = false;
    this.atualizado = false;
    c.clean();
  }

   ngOnInit(): void {
     this.clienteService.getClientes()
         .then(cs => this.clientes = cs)
         .catch(erro => alert(erro));
   }

}
