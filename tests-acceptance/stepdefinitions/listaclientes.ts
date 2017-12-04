import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameNome = ((elem, nome) => elem.element(by.name('nome')).getText().then(text => text === nome));
let sameTelefone = ((elem, telefone) => elem.element(by.name('telefone')).getText().then(text => text === telefone));
let falseConsumidor_final = ((elem) => elem.element(by.name('consumidor_final')).getAttribute('class').then(value => value === 'false'));
let trueConsumidor_final = ((elem) => elem.element(by.name('consumidor_final')).getAttribute('class').then(value => value === 'true'));
let falseLojista = ((elem) => elem.element(by.name('lojista')).getAttribute('class').then(value => value === 'false'));
let trueLojista = ((elem) => elem.element(by.name('lojista')).getAttribute('class').then(value => value === 'true'));

defineSupportCode(function({ Given, When, Then }) {
	Given(/^estou na pagina de Lista de clientes$/, async() => {
		await browser.get("http://localhost:4200/");
		await expect(browser.getTitle()).to.eventually.equal('ApGui');
		await $("a[name='listaclientes']").click();
	})

	Given(/^vejo um cliente com os campos Nome, Telefone, Consumidor final e Lojista com "([^\"]*)", "(\d*)", Não e Sim$/, async(nome, telefone) => {
		var all : ElementArrayFinder = element.all(by.name('clientes'));
		await all;
		var same = all.filter(elem => sameNome(elem, nome) && sameTelefone(elem, telefone) &&  falseConsumidor_final(elem) && trueLojista(elem));
		await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
	})

	When(/^seleciono a opção de editar dados do cliente com os campos Nome, Telefone, Consumidor final e Lojista preenchidos com "([^\"]*)", "(\d*)", Não e Sim$/, async(nome, telefone) => {
		/*await browser.get("http://localhost:4200/");
		await expect(browser.getTitle()).to.eventually.equal('ApGui');*/
		await $("a[name='editar]").click();
		await browser.get("http://localhost:4200/cadastrocliente");
	})

	Then(/^estou na página de Cadastro de cliente$/, async() => {
		await browser.get("http://localhost:4200/");
		await expect(browser.getTitle()).to.eventually.equal('ApGui');
		await $("a[name='cadastrocliente']").click();
	})
})