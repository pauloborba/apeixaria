import { Component, OnInit } from '@angular/core'; 
import { NgModule } from '@angular/core';
 
import { Contabilidade } from './contabilidade';
import { ContabilidadeService } from './contabilidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './contabilidade.component.html',
  styleUrls: ['./contabilidade.component.css']
})

export class ContabilidadeComponent implements OnInit {
	constructor(private contabilidadeService: ContabilidadeService) {}
	contabilidade: Contabilidade = new Contabilidade();
	lucro: decimal = 0;
	bruto: decimal = 0;

	contabilidadePedido(pedido: Pedido){ //ver isto
		var listaDeCompra = pedido.Lista; 
		for (let i in listaDeCompra){
			var itemDeCompra = listaDeCompra[i];
			var produto = itemDeCompra.produto;
			var preco = produto.Valor;
			var quantidade = itemDeCompra.quantidade;
			var desconto = pedido.Desconto;
			var bruto = preco * quantidade;
			var lucro = (bruto/100) * desconto;
			incrementarValor(lucro, bruto);
		}
		this.contabilidadeService.atualizar(this.contabilidade);
	}
	
	diario(): void {
		this.lucro = this.contabilidade.lucroDiario;
		this.bruto = this.contabilidade.brutoDiario;
  	}

  	semanal(): void {
		this.lucro = this.contabilidade.lucroSemanal;
		this.bruto = this.contabilidade.brutoSemanal;
  	}

  	mensal(): void {
		this.lucro = this.contabilidade.lucroMensal;
		this.bruto = this.contabilidade.brutoMensal;
  	}

	incrementarValor(lucro: decimal, bruto: decimal){ //V1
		contabilidade.lucroDiario +=  lucro;
		contabilidade.lucroSemanal += lucro;
		contabilidade.lucroMensal += lucro;
		contabilidade.brutoDiario += bruto;
		contabilidade.brutoSemanal += bruto;
		contabilidade.brutoMensal += bruto;
	}

	ngOnInit(): void {
	    console.log();
	    this.contabilidadeService.getContabilidade();
	        .then(cont => this.contabilidade = cont);
	        .catch(erro => alert(erro));
    }

    onMove(): void {
    }
}

