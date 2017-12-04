import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameNome = ((elem, nome) => elem.element(by.name('nome')).getText().then(text => text === nome));
let sameCpfCnpj = ((elem, cpf_cnpj) => elem.element(by.name('cpf_cnpj')).getText().then(text => text === cpf_cnpj));
let sameCodigoPedido = ((elem, codigoPedido) => elem.element(by.name('codigoPedido')).getText().then(text => text === codigoPedido));
/*let falseCancelado = ((elem) => elem.element(by.name('cancelado')).getAttribute('class').then(value => value === 'false'));*/
let trueCancelado = ((elem) => elem.element(by.name('cancelado')).getAttribute('class').then(value => value === 'true'));
/*let falseEntregue = ((elem) => elem.element(by.name('entregue')).getAttribute('class').then(value => value === 'false'));*/
let trueEntregue = ((elem) => elem.element(by.name('entregue')).getAttribute('class').then(value => value === 'true'));
/*let falsePago = ((elem) => elem.element(by.name('pago')).getAttribute('class').then(value => value === 'false'));*/
let truePago = ((elem) => elem.element(by.name('pago')).getAttribute('class').then(value => value === 'true'));

defineSupportCode(function({ Given, When, Then }) {
	Given(/^estou na pagina de Historico de cliente$/, async() => {
		await browser.get("http://localhost:4200/");
		await expect(browser.getTitle()).to.eventually.equal('ApGui');
		await $("a[name='listaclientes']").click();
		await $("a[name='historico']").click();		
	})

	Given(/^vejo um cliente com os campos Nome e CPF ou CNPJ preenchidos com "([^\"]*)" e "(\d*)"$/, async(nome, cpf_cnpj) => {
		var all : ElementArrayFinder = element.all(by.name('clientes'));
		await all;
		var same = all.filter(elem => sameNome(elem, nome) && sameCpfCnpj(elem, cpf_cnpj));
		await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})
	
	Given(/^o pedido "(\d*)" do cliente "([^\"]*)" de CPF ou CNPJ "(\d*)" está cadastrado no sistema$/, async(codigoPedido, nome, cpf_cnpj) => {
		var allC : ElementArrayFinder = element.all(by.name('clientes'));
		await allC;
		var allP : ElementArrayFinder = element.all(by.name('pedidos'));
		await allP;
		var sameC = allC.filter(elem => sameNome(elem, nome) && sameCpfCnpj(elem, cpf_cnpj));
		await sameC.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
		var sameP = allC.filter(elem => sameCodigoPedido(elem, codigoPedido));
		await sameP.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})

	When(/^o pedido "(\d*)" do cliente "([^\"]*)" de CPF ou CNPJ "(\d*)" for cancelado$/, async(nome, cpf_cnpj) => {
		var allC : ElementArrayFinder = element.all(by.name('clientes'));
		await allC;
		var allP : ElementArrayFinder = element.all(by.name('pedidos'));
		await allP;
		//
	})

	Then(/^vejo a tag "([^\"]*)" no pedido "(\d*)"$/, async(cancelado, codigoPedido) => {
		var all : ElementArrayFinder = element.all(by.name('pedidos'));
		await all;
		var same = all.filter(elem => trueCancelado(elem) && sameCodigoPedido(elem, codigoPedido));
		await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})

	Then(/^vejo a tag "([^\"]*)" no pedido "(\d*)"$/, async(entregue, codigoPedido) => {
		var all : ElementArrayFinder = element.all(by.name('pedidos'));
		await all;
		var same = all.filter(elem => trueEntregue(elem) && sameCodigoPedido(elem, codigoPedido));
		await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})

	Then(/^vejo a tag "([^\"]*)" no pedido "(\d*)"$/, async(pago, codigoPedido) => {
		var all : ElementArrayFinder = element.all(by.name('pedidos'));
		await all;
		var same = all.filter(elem => truePago(elem) && sameCodigoPedido(elem, codigoPedido));
		await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})

})