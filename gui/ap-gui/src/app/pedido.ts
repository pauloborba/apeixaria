
import { Cliente } from './cliente';
import { ItemDeCompra } from './itemdecompra';

export class Pedido {
  cliente: Cliente;
  lista: ItemDeCompra[];
  valorTotal: decimal;
  desconto: decimal;
  tipoDesconto: string;
  dataPedido: Date;
  dataEntrega: Date;
  condicaoPagamento: string;
  localRetirada: string;
  cancelado: boolean;
  entregue: boolean;
  pago: boolean;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.cliente= new Cliente();
    this.lista = [];
    this.valorTotal = 0;
    this.desconto =0;
    tipoDesconto = "";
    dataPedido = new Date();
    dataEntrega = new Date();
    condicaoPagamento = "";
    localRetirada = "";
    cancelado = false;
    entregue = false;
    pago = false;
  }

  clone(): Pedido {
    var pedido: Pedido = new Pedido();
    pedido.copyFrom(this);
    return pedido;
  }

  copyFrom(from: Pedido): void {
    this.cliente = from.cliente;
    this.valorTotal = from.valorTotal;
    this.desconto=from.desconto;
    this.tipoDesconto=from.tipoDesconto;
    this.dataPedido=from.dataPedido;
    this.dataEntrega=from.dataEntrega;
    this.condicaoPagamento=from.condicaoPagamento;
    this.localRetirada=this.localRetirada;
    this.cancelado=from.cancelado;
    this.entregue=from.entregue;
    this.pago=from.pago;
    this.copyListaFrom(from.lista);
  }

  copyListaFrom(from: ItemDeCompra[]): void {
    this.lista = [];
    for i in from {
      this.lista[i] = from[i];
    }
  }
}
