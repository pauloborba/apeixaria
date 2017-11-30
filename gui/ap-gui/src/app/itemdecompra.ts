/*
Import { Produto } from ‘./cliente’;

export class ItemDeCompra {
	produto: Produto;
	quantidade: number;
	unidade: string;

	constructor() {
		this.clean();
	}

	clean(): void {
		this.produto = new Produto();
		this.quantidade = 0;
		this.unidade = "";
	}

	clone(): ItemDeCompra {
		var item: ItemDeCompra = new ItemDeCompra();
 		item.copyFrom(this);
 		return item;
 	}
 	
 	copyFrom(from: ItemDeCompra): void {
 		this.produto = from.produto;
 		this.quantidade = from.quantidade;
 		this.unidade = from.unidade;
 	}

	getProduto(): Produto {
		return this.produto;
	}

	getQuantidade(): quantidade {
		return this.quantidade;
	}

	getUnidade(): unidade {
		return this.unidade;
	}

	setProduto(produto: Produto) {
		this.produto = produto;
	}

	setQuantidade(quantidade: number) {
		this.quantidade = quantidade;
	}

	setUnidade(unidade: string) {
		this.unidade = unidade;
	}
	
}
*/