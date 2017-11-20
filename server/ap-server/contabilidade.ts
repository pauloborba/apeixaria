import { Registro } from './registroproduto';

export class CadastroDeRegistros {
  registros: Registro[] = [];
  ganhoDiario: decimal;
  ganhoSemanal: decimal;
  ganhoMensal: decimal

  ganhoDiario=0;
  ganhoSemanal=0;
  ganhoMensal=0;

  criar(registro: Registro): Registro {
    var result = null;
    result = new Registro();
    result.copyFrom(registro);
    this.registros.push(result);
    return result;
    /** Aqui virá contabilização toda vez que criado*/
  }

  atualizar(registro: Registro): Registro {
    var result: Registro = this.registros.find(a => a.cpf == registro.cpf);
    if (result) result.copyFrom(registro);
    return result;
    /** Aqui virá contabilização toda vez que atualizado*/
  }

  getRegistros(): Registro[] {
    return this.registros;
  }

  getRegistro(codigo: string){
  	var result: Registro = this.registros.find(a => a.cpf == registro.cpf);
    return result;
  }

  /** Aqui haverá limpeza de dados*/
}