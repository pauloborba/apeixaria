import { Component, OnInit } from '@angular/core'; 
import { NgModule } from '@angular/core';
 
import { Contabilidade } from './contabilidade';
import { ContabilidadeService } from './contabilidade.service';
import { RegistroProdutoComponent} from '/.registroproduto.component';

@Component({
  selector: 'app-root',
  templateUrl: './contabilidade.component.html',
  styleUrls: ['./contabilidade.component.css']
})

export class ContabilidadeComponent implements OnInit {
	constructor(private contabilidadeService: ContabilidadeService) {}
	contabilidade: Contabilidade = new Contabilidade();
	bruto: decimal = 0;

	contabilidadePedido(pedido: Pedido){ //ver isto
		var listaDeCompra = pedido.Lista; 
		for (let i in listaDeCompra){
			var itemDeCompra = listaDeCompra[i];
			var produto = itemDeCompra.produto;
			var preco = produto.Valor;
			var quantidade = itemDeCompra.quantidade;
			var bruto = preco * quantidade;
			incrementarValor(bruto);
		}
		this.contabilidadeService.atualizar(this.contabilidade);
	}
	
	diario(): void {
		this.bruto = this.contabilidade.brutoDiario;
  	}

  	semanal(): void {
		this.bruto = this.contabilidade.brutoSemanal;
  	}

  	mensal(): void {
		this.bruto = this.contabilidade.brutoMensal;
  	}

	incrementarValor(bruto: decimal){ //V1
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

