import { Pedido } from '../../gui/ap-gui/src/app/pedido';

export class CadastroDePedidos {
  pedidos: Pedido[] = [];

  criar(pedido: Pedido): Pedido {
    var result = null;
    result = new Pedido();
    result.copyFrom(pedido);
    this.pedidos.push(result);
    return result;
  }

  atualizar(pedido: Pedido): Pedido {
    var result: Pedido = this.pedidos.find(a => a.cpf == pedido.cpf);
    if (result) result.copyFrom(pedido);
    return result;
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
  }

  getPedido(codigo: string){
  	var result: Pedido = this.pedidos.find(a => a.cpf == pedido.cpf);
    return result;
  }

  remover(pedido: Pedido): {
	var removed: Pedido[]= this.pedidos.splice(pedido);
	this.pedidos=removed;
  }
}
