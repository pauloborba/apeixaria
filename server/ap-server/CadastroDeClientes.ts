import { Cliente } from '../../gui/ap-gui/src/app/cliente';

export class CadastroDeClientes {
  clientes: Cliente[] = [];

  criar(cliente: Cliente): Cliente {
    var result = null;
    if (this.cpf_cnpjNaoCadastrado(cliente.cpf_cnpj)) {
      result = new Cliente();
      result.copyFrom(cliente);
      this.clientes.push(result);
    }
    return result;
  }

  cpf_cnpjNaoCadastrado(cpf_cnpj: string): boolean {
     return !this.clientes.find(a => a.cpf_cnpj == cpf_cnpj);
  }

  atualizar(cliente: Cliente): Cliente {
    
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }
}
