import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Cliente } from './cliente';

@Injectable()
export class ClienteService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(cliente: Cliente): Promise<Cliente> {
    return this.http.post(this.taURL + '/cliente', JSON.stringify(cliente), {headers: this.headers})
    .toPromise()
    .then(res => {
       if (res.json().success) {return cliente; } else {return null; }
    })
    .catch(this.tratarErro);
  }


  getClientes(): Promise<Cliente[]> {
    return this.http.get(this.taURL + '/clientes')
    .toPromise()
    .then(res => res.json() as Cliente[])
    .catch(this.tratarErro);
  }

  private tratarErro(erro: any): Promise<any> {
    console.error('Acesso mal sucedido ao serviço de clientes', erro);
    return Promise.reject(erro.message || erro);
  }
}
