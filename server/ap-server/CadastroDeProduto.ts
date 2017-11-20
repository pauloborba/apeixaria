import { Produto } from '../../gui/ap-gui/src/app/produto';

export class CadastroDeProdutos {
  produtos: Produto[] = [];

  criar(produto: Produto): Produto {
    var result = null;
    return result;
  }

  codNaoCadastrado(cod: number): boolean {
     return false;
  }
  remover(produto: Produto): void{
      
  }

  atualizar(produto: Produto): Produto {
    var result = null;
    return result;
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}