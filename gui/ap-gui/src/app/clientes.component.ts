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
   campoObrigatorio: boolean = false;
   clienteAtualizado: boolean = false;
   clienteNaoAtualizado: boolean = false;
   clienteJaExistente: boolean = false;
   completo: boolean = true;


   criarCliente(c: Cliente): void {
     this.completo = true;
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
