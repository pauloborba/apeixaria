import { CadastroDeClientes } from '../CadastroDeClientes';
import { Cliente } from '../../../gui/ap-gui/src/app/cliente';
import { Endereco } from '../../../gui/ap-gui/src/app/endereco';

describe("O cadastro de clientes", () => {
  var cadastro: CadastroDeClientes;

  beforeEach(() => cadastro = new CadastroDeClientes())

  it("é inicialmente vazio", () => {
    expect(cadastro.getClientes().length).toBe(0);
  })

  it("cadastra clientes corretamente", () => {
    var cliente: Cliente = new Cliente();
    cliente.nome = "Julia";
    cliente.cpf_cnpj = "10110110199";
    cliente.data_nascimento = "10/10/00";
    cliente.telefone = "81999567865";
    cliente.consumidor_final = true;
    cliente.lojista = false;
    var enderecoC: Endereco = new Endereco();
    enderecoC.bairro = "Boa Viagem";
    enderecoC.numero = "28";
    enderecoC.ponto_referencia = "Proximo ao colégio Motivo";
    enderecoC.rua = "Rua Tenente Joao";
    cliente.endereco = enderecoC;
    cadastro.criar(cliente);

    expect(cadastro.getClientes().length).toBe(1);
    cliente = cadastro.getClientes()[0];
    expect(cliente.nome).toBe("Julia");
    expect(cliente.cpf_cnpj).toBe("10110110199");
    expect(cliente.data_nascimento).toBe("10/10/00");
    expect(cliente.telefone).toBe("81999567865");
    expect(cliente.consumidor_final).toBe(true);
    expect(cliente.lojista).toBe(false);
    expect(cliente.endereco.bairro).toBe("Boa Viagem");
    expect(cliente.endereco.numero).toBe("28");
    expect(cliente.endereco.ponto_referencia).toBe("Proximo ao colégio Motivo");
    expect(cliente.endereco.rua).toBe("Rua Tenente Joao");
    
  })


})