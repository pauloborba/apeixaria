

export class Contabilidade{
	lucroDiario: decimal;
	lucroSemanal: decimal;
	lucroMensal: decimal;
	brutoDiario: decimal;
	brutoSemanal: decimal;
	brutoMensal: decimal;
  
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
	}
}