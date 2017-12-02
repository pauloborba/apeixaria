export class Produto {
  codigo: string;
  nome: string;
  valor: number;
  unid: string;
  categoria: string;
  
  constructor() {
    this.clean();
  }

  clean(): void {
    this.codigo = '';
    this.nome = '';
    this.valor = null;
    this.unid = '';
    this.categoria = '';

  }
  copyFrom(from: Produto): void {
    this.codigo = from.codigo;
    this.nome = from.nome;
    this.valor = from.valor;
    this.unid = from.unid;
    this.categoria = from.categoria;
  }

}