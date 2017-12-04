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

  alterar(produto: Produto): Produto {
    var result;
    for(let i of this.produtos){
      if (i.codigo == produto.codigo) result = i;
    }
    if(result) result.copyFrom(produto);
    return result;
  }


  getProdutos(): Produto[] {
    return this.produtos;
  }
  
}
