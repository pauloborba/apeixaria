

export class Contabilidade{
	brutoDiario: decimal;
	brutoSemanal: decimal;
	brutoMensal: decimal;
  
	constructor(){
		this.clean();
	}

	clean(): void {
		this.brutoDiario = 0;
		this.brutoSemanal = 0;
		this.brutoMensal = 0;
	}

	clone (): Contabilidade {
		var contabilidade: Contabilidade = new Contabilidade();
		contabilidade.copyFrom(this);
		return contabilidade;
	}

	copyFrom(from: Contabilidade){
		this.brutoDiario = from.brutoDiario;
		this.brutoSemanal = from.brutoSemanal;
		this.brutoMensal = from.brutoMensal;
	}
}