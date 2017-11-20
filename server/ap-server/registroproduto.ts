import { Produto } from '../../gui/ap-gui/src/app/produto';

export class RegistroProduto{
  produto: Produto;
  quantVendDiaria: decimal;
  quantVendSemanal: decimal;
  quantVendMensal: decimal;
  ganhoDiario: decimal;
  ganhoSemanal: decimal;
  ganhoMensal: decimal;
  ganhoSemDescDiario: decimal;
  ganhoSemDescSemanal: decimal;
  ganhoSemDescMensal: decimal;

  constructor() {
    this.clean();
  }

  clean(): void {
    produto= new Produto();
  	quantVendDiaria= 0;
 	quantVendSemanal= 0;
  	quantVendMensal= 0;
  	ganhoDiario= 0;
  	ganhoSemanal= 0;
  	ganhoMensal= 0;
  	ganhoSemDescDiario= 0;
  	ganhoSemDescSemanal= 0;
  	ganhoSemDescMensal= 0;
  }

  
}