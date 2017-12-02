import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
   constructor(private pedidoService: PedidoService) {}

   pedidos: Pedido[];

   atualizarPedido(pedido: Pedido): void {
      if(pedido.entregue&&pedido.pago){
        //alerta sobre marcar isso
      }
      this.pedidoService.atualizar(pedido)
         .catch(erro => alert(erro));
   }

   filterPendentes(){
    return this.pedidos.filter(x => !x.entregue || !x.pago);
   }

   filterHistorico(){
    return this.pedidos.filter(x => (x.entregue && x.pago) || x.cancelado);
   }

   verificarAtraso(entrega: string){
      var numbers = entrega.split("/");
      var date = new Date(Number(numbers[2]), Number(numbers[1])-1, Number(numbers[0]),23,59,59);
      if(date.getTime()<Date.now()){
        return true;
      }
      else{
        return false;
      }
   }

   ngOnInit(): void {
      this.pedidoService.getPedidos()
         .then(pedidos => this.pedidos = pedidos)
         .catch(erro => alert(erro));
   }

}