import { CadastroDePedidos } from '../CadastroDePedidos';
import { Pedido } from '../../../gui/ap-gui/src/app/pedido';
import { Cliente } from '../../../gui/ap-gui/src/app/cliente';
import { Produto } from '../../../gui/ap-gui/src/app/produto';
import { ItemDeCompra } from '../../../gui/ap-gui/src/app/itemdecompra';

describe("O cadastro de pedidos", () => {
  var cadastro: CadastroDePedidos;

  beforeEach(() => cadastro = new CadastroDePedidos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getPedidos().length).toBe(0);
  })

  it("cadastra pedidos corretamente", () => {
    var client: Cliente= new Cliente();
    client.nome="Paulo";
    client.telefone="(81)98825";
    var pedido: Pedido = new Pedido();
    pedido.cliente = client;
    pedido.dataPedido = "31/07/1998";
    pedido.dataEntrega = "31/07/1998" ;
    pedido.condicaoPagamento = "À vista";
    pedido.localRetirada = "Rua Professor Gabriel, 181";
    pedido.cancelado = false;
    pedido.entregue = false;
    pedido.pago = false;
    var product: Produto = new Produto();
    product.codigo=  100;
    product.nome= "Camarão";
    product.valor=12;
    var item: ItemDeCompra = new ItemDeCompra();
    item.produto= product;
    item.quantidade= 1;
    pedido.lista.push(item);
    pedido.valorTotal = (pedido.lista[0].quantidade*pedido.lista[0].produto.valor);
    cadastro.criar(pedido);

    expect(cadastro.getPedidos().length).toBe(1);
    pedido = cadastro.getPedidos()[0];
    expect(pedido.cliente.nome).toBe("Paulo");
    expect(pedido.codigo).toBe(1);
    expect(pedido.cliente.telefone).toBe("(81)98825");
    expect(pedido.dataEntrega).toBe("31/07/1998");
    expect(pedido.cancelado).toBe(false);
    expect(pedido.entregue).toBe(false);
    expect(pedido.pago).toBe(false);
    expect(pedido.valorTotal).toBe(12);

    pedido.localRetirada = "Rua Bione, 220";
    pedido = cadastro.atualizarPedido(pedido);

    expect(pedido.localRetirada).toBe("Rua Bione, 220");

  })
})