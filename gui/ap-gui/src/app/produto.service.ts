import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(produto: Produto): Promise<Produto> {
    
  }

  atualizar(produto: Produto): Promise<Produto> {

  }

  getProdutos(): Promise<Produto[]> {
    
  }

  private tratarErro(erro: any): Promise<any> {
    console.error('Acesso mal sucedido ao serviço de produtos', erro);
    return Promise.reject(erro.message || erro);
}
  
}