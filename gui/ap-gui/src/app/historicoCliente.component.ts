import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { Pedido } from './pedido';

@Component({
	selector: 'historicocliente',
	templateUrl: './historicoCliente.component.html',
	styleUrls: ['./historicoCliente.component.css']
})

export class ListaClientesComponent implements OnInit {
	constructor (private clienteService: ClienteService, private pedidoService: PedidoService) {}

	clientes: Cliente[];
	pedidos: Pedidos[];

	ngOnInit(): void {
		this.clienteService.getClientes()
			.then(clientes => this.clientes = clientes)
			.catch(erro => alert(erro));
		this.pedidoService.getPedidos()
			.then(pedidos => this.pedidos = pedidos)
			.catch(erro => alert(erro));
	}
}