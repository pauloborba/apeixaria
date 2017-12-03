import { Pedido } from '../../gui/ap-gui/src/app/pedido';

export class CadastroDePedidos {
  pedidos: Pedido[] = [];
  indice=1;

  criar(pedido: Pedido): Pedido {
    var result = null;
    result = new Pedido();
    result.copyFrom(pedido);
    result.codigo = this.indice;
    this.indice = this.indice+1;
    this.pedidos.push(result);
    return result;
  }

  atualizar(pedido: Pedido): Pedido {
    var result: Pedido = this.getPedido(pedido)
    if (result) result.copyFrom(pedido);
    return result;
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
  }

  getPedido(pedido: Pedido){
  	var result: Pedido = this.pedidos.find(a => a.codigo == pedido.codigo);
    return result;
  }

}
