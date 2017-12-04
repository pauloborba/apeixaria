export class Produto {
  codigo: number;
  nome: string;
  valor: number;
  unid: string;
  categoria: string;
  
  constructor() {
    this.clean();
  }

  clean(): void {
    this.codigo = 0;
    this.nome = '';
    this.valor = 0;
    this.unid = '';
    this.categoria = '';

  }

  clone(): Produto {
    const produto: Produto = new Produto();
    produto.copyFrom(this);
    return produto;
  }

  copyFrom(from: Produto): void {
    this.codigo = from.codigo;
    this.nome = from.nome;
    this.valor = from.valor;
    this.unid = from.unid;
    this.categoria = from.categoria;
  }

}