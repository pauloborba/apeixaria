import { Endereco } from './endereco';

export class Cliente {
    nome: string;
    cpf_cnpj: string;
    data_nascimento: string;
    telefone: string;
    email: string;
    consumidor_final: boolean;
    lojista: boolean;
    endereco: Endereco;

    constructor() {
      this.clean();
    }

    clean(): void {
      this.nome = '';
      this.cpf_cnpj = '';
      this.data_nascimento = '';
      this.telefone = '';
      this.email = '';
      this.consumidor_final = false;
      this.lojista = false;
    }

    copyFrom(from: Cliente): void {
      this.nome = from.nome;
      this.cpf_cnpj = from.cpf_cnpj;
      this.data_nascimento = from.data_nascimento;
      this.telefone = from.telefone;
      this.email = from.email;
      this.consumidor_final = from.consumidor_final;
      this.lojista = from.lojista;
      this.endereco = from.endereco;
    }

}

