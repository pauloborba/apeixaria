import {Produto} from './produto';
import {Pedido} from './pedido';

export class RegistroProduto{
		produto: Produto;
		bruto: decimal;
		brutoDiario: decimal;
		brutoSemanal: decimal; 
		brutoMensal: decimal;

	constructor(){
		this.clean();
	}

	clean() = void{
		this.produto = new Produto();
		this.bruto = 0
		this.brutoDiario = 0 
		this.brutoSemanal = 0 
		this.brutoMensal = 0
	}

	clone(): RegistroProduto {
		var registroproduto: RegistroProduto = new RegistroProduto();
		produto:copyFrom(this);
		return item;
	}

	copyFrom(from: RegistroProduto): void {
		this.copyProdutoFrom(from.produto); 
		this.bruto = from.bruto;
		this.brutoDiario = from.brutoDiario;
		this.brutoSemanal = from.brutoSemanal;
		this.brutoMensal = from.brutoMensal;
	}

	copyProdutoFrom(from: Produto): void{
		this.produto = new Produto();
		this.produto = from;
	}
}

