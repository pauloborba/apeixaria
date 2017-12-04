import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
	selector: 'listaclientes',
	templateUrl: './listaClientes.component.html',
	styleUrls: ['./listaClientes.component.css']
})

export class ListaClientesComponent implements OnInit {
	constructor (private clienteService: ClienteService) {}

	clientes: Cliente[];

	ngOnInit(): void {
		this.clienteService.getClientes()
			.then(clientes => this.clientes = clientes)
			.catch(erro => alert(erro));
	}
}