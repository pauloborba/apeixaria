import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let mesmocod = ((elem, cod) => elem.element(by.name('codlist')).getText().then(text => text === cod));


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página de Contabilidade $/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ApGui');
        await $("a[name='Contabilidade']").click();
    })

    Given(/^o pedido "(\d*)" cadastrado ao cliente "([^\"]*)" com "(\d*)" unidades de "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (code, client, quant, produto,preco) => {
        var valor: number= (Number(preco)*Number(quant));
        var options:any = {method: 'POST', uri: ("http://localhost:3000/pedidos"), body:{"cliente": {"nome": client}, "entregue" : true, "pago": true, "lista":[{"produto":{"codigo":"1", "nome":produto, "valor":preco},"quantidade":quant,"valor":valor}]}, json: true};
        request(options);
        request.post("localhost:3000/pedidos");
    });

    Given(/^o pedido "(\d*)" cadastrado ao cliente "([^\"]*)" com "(\d*)" unidades de "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (code, client, quant, produto,preco) => {
        var valor: number= (Number(preco)*Number(quant));
        var options:any = {method: 'POST', uri: ("http://localhost:3000/pedidos"), body:{"cliente": {"nome": client}, "entregue" : true, "pago": true, "lista":[{"produto":{"codigo":"2", "nome":produto, "valor":preco},"quantidade":quant,"valor":valor}]}, json: true};
        request(options);
        request.post("localhost:3000/pedidos");
    });

    Given(/^o pedido "(\d*)" cadastrado ao cliente "([^\"]*)" com "(\d*)" unidades de "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (code, client, quant, produto,preco) => {
        var valor: number= (Number(preco)*Number(quant));
        var options:any = {method: 'POST', uri: ("http://localhost:3000/pedidos"), body:{"cliente": {"nome": client}, "entregue" : true, "pago": true, "lista":[{"produto":{"codigo":"3", "nome":produto, "valor":preco},"quantidade":quant,"valor":valor}]}, json: true};
        request(options);
        request.post("localhost:3000/pedidos");
    });

    Then(/^ Eu verei no campo bruto o valor R$ "([^\"]*)" $/, async (valor) => {
        //verificar o campo de bruto
    });

}) 