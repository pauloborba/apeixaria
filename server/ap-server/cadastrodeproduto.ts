import { Produto } from '../../gui/ap-gui/src/app/produto';

export class CadastroDeProdutos {
  produtos: Produto[] = [];

  criar(produto: Produto): Produto {
    var result = null;
    result = new Produto();
    result.copyFrom(produto);
    this.produtos.push(result);
    return result;
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
