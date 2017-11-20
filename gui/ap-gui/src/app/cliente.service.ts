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
    //post
  }

  atualizar(cliente: Cliente): Promise<Cliente> {
    //put
  }

  getClientes(): Promise<Cliente[]> {
    //get
  }

  private tratarErro(erro: any): Promise<any> {
    console.error('Acesso mal sucedido ao serviço de clientes', erro);
    return Promise.reject(erro.message || erro);
  }
}
