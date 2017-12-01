import { CadastroDeProdutos } from '../cadastrodeproduto';
import { Produto } from '../../../gui/ap-gui/src/app/produto';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getProdutos().length).toBe(0);
  })

  it("cadastra produtos corretamente", () => {
    var prod: Produto = new Produto();
    prod.codigo = '001'
    prod.nome = "camarao cinza";
    prod.valor = '33';
    prod.unid = "kg";
    prod.categoria = "camarões"
    cadastro.criar(prod);

    expect(cadastro.getProdutos().length).toBe(1);
    prod = cadastro.getProdutos()[0];
    expect(prod.codigo).toBe("001");
    expect(prod.nome).toBe("camao cinza");
    expect(prod.valor).toBe("33");
    expect(prod.unid).toBe("kg");
    expect(prod.categoria).toBe("camaroes");
  })
  it("não aceita produtos com campo em branco", () => {
    var prod: Produto = new Produto();
    prod.codigo = "001"
    prod.nome = "camarao cinza";
    prod.unid = "kg";
    prod.categoria = "camarões"
    cadastro.criar(prod);
    expect(cadastro.getProdutos().length).toBe(0);
  })

  it("não aceita produtos com código duplicado", () => {
    var prod: Produto = new Produto();
    prod.codigo = "001"
    prod.nome = "camarao cinza";
    prod.valor = "33";
    prod.unid = "kg";
    prod.categoria = "camarões"
    cadastro.criar(prod);

    prod = new Produto();
    prod.codigo = "001"
    prod.nome = "file camarao";
    prod.valor = "66";
    prod.unid = "kg";
    prod.categoria = "camarões"
    cadastro.criar(prod);

    expect(cadastro.getProdutos().length).toBe(1);
  })




})