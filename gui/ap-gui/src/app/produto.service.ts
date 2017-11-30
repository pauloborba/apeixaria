import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(produto: Produto): Promise<Produto> {
    return this.http.post(this.apURL + "/produtos",JSON.stringify(produto), {headers: this.headers})
    .toPromise()
    .then(res => {
       if (res.json().success) {return produto;} else {return null;}
    })
    .catch(this.tratarErro);

  }
  getProdutos(): Promise<Produto[]> {
    return this.http.get(this.apURL + "/produtos")
    .toPromise()
    .then(res => res.json() as Produto[])
    .catch(this.tratarErro);
  }
  
  private tratarErro(erro: any): Promise<any> {
    console.error('Acesso mal sucedido ao serviço de produtos', erro);
    return Promise.reject(erro.message || erro);
}
  
}