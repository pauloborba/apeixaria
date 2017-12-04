import { Contabilidade } from '../../gui/ap-gui/src/app/contabilidade';

export class Contabilidade {
	contabilidade: Contabilidade;

	criar (contabilidade: Contabilidade): Contabilidade {
		var result = null;
		result = new Contabilidade();
		result.copyFrom(contabilidade);
		this.contabilidade = result;
		return result;
	}

	atualizar (contabilidade: Contabilidade): Contabilidade {
		var result: Contabilidade = this.getContabilidade();
		if(result) {
			result.copyFrom(contabilidade);
		}
		return result;
	}

	getContabilidade(): Contabilidade[] {
    	return this.contabilidade;
 	}
}