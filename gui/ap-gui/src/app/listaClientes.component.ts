import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './listaClientes.component.html',
  styleUrls: ['./listaClientes.component.css']
})
export class ListaClientesComponent implements OnInit {
   constructor(private clienteService: ClienteService) {}

   //cliente: Cliente = new Cliente();
   clientes: Cliente[];



   ngOnInit(): void {
     this.clienteService.getClientes()
         .then(cs => this.clientes = cs)
         .catch(erro => alert(erro));
   }

}
