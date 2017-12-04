import { Component, OnInit } from '@angular/core'
import { Pedido } from './pedido';
import { ItemDeCompra } from './itemdecompra';
import { NgModule } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';
import { PedidoService } from './pedido.service';

}

@Component({
  selector: 'app-root',
  templateUrl: './cadastropedido.component.html',
  styleUrls: ['./cadastropedido.component.css']
})

export class cadastroPedidoComponent {

	constructor(private produtoService: ProdutoService) {}
	constructor(private clienteService: ClienteService) {}
	constructor(private pedidoService: PedidoService) {}

	pedido: Pedido = new Pedido();
	nome: string = "";
	telefone: string = "";
	clienteNaoCadastrado: boolean = false;
	nomeProduto: string = "";
	quantidade: number = 0;
	produtos: Produto[] = [];

	verificar(nome: string): void {
		var clientes: Cliente[] = [];
		this.clienteService.getClientes();
        	.then(as => clientes = as)
        	.catch(erro => alert(erro));
		var cliente: Cliente = null;
		cliente = clientes.find(a => a.nome == nome);
		if (cliente == null) {
			this.clienteNaoCadastrado = true;
		} else {
			this.clienteNaoCadastrado = false;
		}
	}

	adicionar(nomeProduto: string, quantidade: number): void {
		this.produtoService.getProdutos();
        	.then(as => this.produtos = as)
        	.catch(erro => alert(erro));
		var produto: Produto = null;
		produto = this.produtos.find(a => a.nome == nomeProduto);
		var itemdecompra: ItemDeCompra = new ItemDeCompra();
	    itemdecompra.setProduto(produto);
	    itemdecompra.setQuantidade(quantidade);
	    this.pedido.lista.push(itemdecompra);
	    this.nomeProduto = "";
	    this.quantidade = 0;
	}

	limpar(): void {
		this.pedido.lista = [];
	}

}