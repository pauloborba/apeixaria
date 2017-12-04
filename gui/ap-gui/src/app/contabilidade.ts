import {RegistroProduto} from './registroproduto';

export class Contabilidade{
	lucroDiario: decimal;
	lucroSemanal: decimal;
	lucroMensal: decimal;
	brutoDiario: decimal;
	brutoSemanal: decimal;
	brutoMensal: decimal;
	ArrayProduto: RegistroProduto[];
  
	constructor(){
		this.clean();
	}

	clean(): void {
		this.lucroDiario = 0; 
		this.lucroSemanal = 0;	
		this.lucroMensal = 0;
		this.brutoDiario = 0;
		this.brutoSemanal = 0;
		this.brutoMensal = 0;
		this.ArrayProduto = [];
	}

	clone (): Contabilidade {
		var contabilidade: Contabilidade = new Contabilidade();
		contabilidade.copyFrom(this);
		return contabilidade;
	}

	copyFrom(from: Contabilidade){
		this.lucroDiario = from.lucroDiario;
		this.lucroSemanal = from.lucroSemanal;
		this.lucroMensal = from.lucroMensal;
		this.brutoDiario = from.brutoDiario;
		this.brutoSemanal = from.brutoSemanal;
		this.brutoMensal = from.brutoMensal;
		this.copyArrayProdutoFrom(from.ArrayProduto);
	}

	copyArrayProdutoFrom(from: RegistroProduto[]): void {
		this.ArrayProduto = [];
		for i in from {
			this.ArrayProduto[i] = from[i];
		}
	}
}