import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pedidos',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {
   constructor(private pedidoService: PedidoService, private route: ActivatedRoute) {}


   pedido: Pedido= new Pedido();

   ngOnInit(): void {
   var get:Pedido= new Pedido();
    this.route.params.subscribe(params => get.codigo=params['pedidoID']);
    this.pedidoService.getPedido(get)
         .then(pedido => this.pedido = pedido)
         .catch(erro => alert(erro));
    }

}