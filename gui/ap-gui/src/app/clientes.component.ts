import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
   constructor(private clienteService: ClienteService) {}

   cliente: Cliente = new Cliente();
   clientes: Cliente[];
   cpf_cnpjduplicado: boolean = false;
   atualizado: boolean = false;
   cancelAlt: boolean = false;
   completo: boolean = true;
   invalido: boolean = false;

   verificaCampos(c: Cliente): void {
    this.completo = true;
    if (c.nome === '' || c.nome === null) {
      this.completo = false;
      document.getElementById('nomeInput').style.backgroundColor = 'red';
    }
    if (c.telefone === '' ||  c.telefone === null) {
      this.completo = false;
      document.getElementById('telefoneInput').style.backgroundColor = 'red';
    }
    if (c.endereco.rua === '' || c.endereco.rua === null) {
      this.completo = false;
      document.getElementById('ruaInput').style.backgroundColor = 'red';
    }
    if (c.endereco.numero === '' ||  c.endereco.numero === null) {
      this.completo = false;
      document.getElementById('numeroInput').style.backgroundColor = 'red';
    }
    if (c.endereco.cidade === '' || c.endereco.cidade === null) {
      this.completo = false;
      document.getElementById('cidadeInput').style.backgroundColor = 'red';
    }
    if (c.cpf_cnpj === '' ||  c.cpf_cnpj === null) {
      this.completo = false;
      document.getElementById('CPF_ou_CNPJInput').style.backgroundColor = 'red';
    }
    if (c.lojista === c.consumidor_final) {
      this.completo = false;
      document.getElementById('consumidor_final').style.backgroundColor = 'red';
      document.getElementById('lojista').style.backgroundColor = 'red';
    }

   }


   criarCliente(c: Cliente): void {
     this.completo = true;
     this.verificaCampos(c);
     if (this.completo) {
      this.clienteService.criar(c)
      .then(ab => {
         if (ab) {
            this.clientes.push(ab);
            this.cliente = new Cliente();
         } else {
            this.cpf_cnpjduplicado = true;
         }
      })
      .catch(erro => alert(erro));
     }
   }

   ngOnInit(): void {
     this.clienteService.getClientes()
         .then(cs => this.clientes = cs)
         .catch(erro => alert(erro));
   }

}
