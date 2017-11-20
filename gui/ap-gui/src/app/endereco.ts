export class Endereco {
    rua: string;
    numero: string;
    cidade: string;
    bairro: string;
    ponto_referencia: string;

    constructor() {
      this.clean();
    }

    clean(): void {
      this.rua = '';
      this.numero = '';
      this.cidade = '';
      this.bairro = '';
      this.ponto_referencia = '';
    }

    copyFrom(from: Endereco): void {
      this.rua = from.rua;
      this.numero = from.numero;
      this.cidade = from.cidade;
      this.bairro = from.bairro;
      this.ponto_referencia = from.ponto_referencia;
    }

}

