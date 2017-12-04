import { Produto } from './produto';

export class ItemDeCompra {
	produto: Produto;
	quantidade: number;
	valor: number;

	constructor() {
		this.clean();
	}

	clean(): void {
		this.produto = new Produto();
		this.quantidade = 0;
		this.valor = 0;
	}

	clone(): ItemDeCompra {
		var item: ItemDeCompra = new ItemDeCompra();
 		item.copyFrom(this);
 		return item;
 	}
 	
 	copyFrom(from: ItemDeCompra): void {
 		this.produto = from.produto;
 		this.quantidade = from.quantidade;
 		this.valor = from.valor;
 	}

	getProduto(): Produto {
		return this.produto;
	}

	getQuantidade(): number {
		return this.quantidade;
	}

	getValor(): number {
		return this.valor;
	}

	setProduto(produto: Produto) {
		this.produto = produto;
	}

	setQuantidade(quantidade: number) {
		this.quantidade = quantidade;
	}

	setValor(valor: number) {
		this.valor = valor;
	}
	
}