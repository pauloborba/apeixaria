import {Produto} from './produto';
import {Pedido} from './pedido';

export class RegistroProduto{
		produto: Produto;
		lucro: decimal;
		lucroDiario: decimal;
		lucroSemanal: decimal;
		lucroMensal: decimal;
		bruto: decimal;
		brutoDiario: decimal;
		brutoSemanal: decimal; 
		brutoMensal: decimal;
		peso: decimal;
		pesoDiario: decimal; 
		pesoSemanal: decimal;
		pesoMensal: decimal;

	constructor(){
		this.clean();
	}

	clean() = void{
		this.produto = new Produto();
		this.lucro = 0
		this.lucroDiario = 0 
		this.lucroSemanal = 0 
		this.lucroMensal = 0 
		this.bruto = 0
		this.brutoDiario = 0 
		this.brutoSemanal = 0 
		this.brutoMensal = 0
		this.peso = 0
		this.pesoDiario = 0 
		this.pesoSemanal = 0 
		this.pesoMensal = 0
	}

	clone(): RegistroProduto {
		var registroproduto: RegistroProduto = new RegistroProduto();
		produto:copyFrom(this);
		return item;
	}

	copyFrom(from: RegistroProduto): void {
		this.copyProdutoFrom(from.produto); 
		this.lucro = from.lucro;
		this.lucroDiario = from.lucroDiario;
		this.lucroSemanal = from.lucroSemanal;
		this.lucroMensal = from.lucroMensal;
		this.bruto = from.bruto;
		this.brutoDiario = from.brutoDiario;
		this.brutoSemanal = from.brutoSemanal;
		this.brutoMensal = from.brutoMensal;
		this.peso = from.peso;
		this.pesoDiario = from.pesoDiario;
		this.pesoSemanal = from.pesoSemanal;
		this.pesoMensal = from.pesoMensal;
	}

	copyProdutoFrom(from: Produto): void{
		this.produto = new Produto();
		this.produto = from;
	}
}

