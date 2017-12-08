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
	lucro: decimal = 0;
	bruto: decimal = 0;

	contabilidadePedido(pedido: Pedido){ //ver isto
		var listaDeCompra = pedido.Lista; 
		for (let i in listaDeCompra){
			var itemDeCompra = listaDeCompra[i];
			var produto = itemDeCompra.produto;
			var indice = ProcurarProduto(produto);
			var preco = produto.Valor;
			var quantidade = itemDeCompra.quantidade;
			var desconto = pedido.Desconto;
			var bruto = preco * quantidade;
			var lucro = (bruto/100) * desconto;
			incrementarValorProduto(lucro, bruto, quantidade, indice);
			incrementarValor(lucro, bruto);
		}
		this.contabilidadeService.atualizar(this.contabilidade);
	}
	
	diario(): void {
		this.lucro = this.contabilidade.lucroDiario;
		this.bruto = this.contabilidade.brutoDiario;
		for(let i of ArrayProduto){
			i.lucro = i.lucroDiario;
			i.bruto = i.brutoDiario;
			i.peso = i.pesoDiario;
		}
  	}

  	semanal(): void {
		this.lucro = this.contabilidade.lucroSemanal;
		this.bruto = this.contabilidade.brutoSemanal;
		for(let i of ArrayProduto){
			i.lucro = i.lucroSemanal;
			i.bruto = i.brutoSemanal;
			i.peso = i.pesoSemanal;
		}
  	}

  	mensal(): void {
		this.lucro = this.contabilidade.lucroMensal;
		this.bruto = this.contabilidade.brutoMensal;
		for(let i of ArrayProduto){
			i.lucro = i.lucroMensal;
			i.bruto = i.brutoMensal;
			i.peso = i.pesoMensal;
		}
  	}

	incrementarValor(lucro: decimal, bruto: decimal){
		contabilidade.lucroDiario +=  lucro;
		contabilidade.lucroSemanal += lucro;
		contabilidade.lucroMensal += lucro;
		contabilidade.brutoDiario += bruto;
		contabilidade.brutoSemanal += bruto;
		contabilidade.brutoMensal += bruto;
	}

	incrementarValorProduto(lucro: decimal, bruto: decimal, peso: decimal, indice: integer){ 
		var prod: RegistroProduto = this.contabilidade.ArrayProduto[indice];
		prod.lucroDiario +=  lucro;
		prod.lucroSemanal += lucro;
		prod.lucroMensal += lucro;
		prod.brutoDiario += bruto;
		prod.brutoSemanal += bruto;
		prod.brutoMensal += bruto;
		prod.pesoDiario += peso;
		prod.pesoSemanal += peso;
		prod.pesoMensal += peso;
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

