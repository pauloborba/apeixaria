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

    this.verify(c.nome, 'nomeInput');
    this.verify(c.telefone, 'telefoneInput');
    this.verify(c.endereco.rua, 'ruaInput');
    this.verify(c.endereco.numero, 'numeroInput');
    this.verify(c.endereco.cidade, 'cidadeInput');
    this.verify(c.cpf_cnpj, 'CPF_ou_CNPJInput');

    if (c.lojista === c.consumidor_final) {
      document.getElementById('consumidor_finalLabel').style.color = 'red';
      document.getElementById('lojistaLabel').style.color = 'red';
    }

   }

   verify(c: string, s: string): void {
    if (this.nullorEmpty(c)) {
      this.pintaCampo(s);
    } else {
      document.getElementById(s).style.backgroundColor = 'white';
    }
   }

   nullorEmpty(s: string): boolean {
    if (s === '' || s === null) {return true; }
   }

   pintaCampo(s: string): void {
    this.completo = false;
    document.getElementById(s).style.backgroundColor = 'red';
   }


   criarCliente(c: Cliente): void {
     this.completo = true;
     this.verificaCampos(c);
     if (this.completo) {
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

   ngOnInit(): void {
     this.clienteService.getClientes()
         .then(cs => this.clientes = cs)
         .catch(erro => alert(erro));
   }

}
