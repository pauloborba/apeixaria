import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import request = require("request-promise");

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou na página do pedido$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ApGui');
    })

    Given(/^eu visualizo o campo “Nome” com "([^\"]*)"$/, async (nome) => {
        var idcampo = "labelNome"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> nome);
    });

    Given(/^eu visualizo o campo “Telefone” com "([^\"]*)"$/, async (telefone) => {
        var idcampo = "labelTelefone"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> telefone);
    });

    Given(/^eu visualizo o campo “Data pedido” com "([^\"]*)"$/, async (dataPedido) => {
        var idcampo = "labelDataPedido"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> dataPedido);
    });

    Given(/^eu visualizo o campo “Data entrega” com "([^\"]*)"$/, async (dataEntrega) => {
        var idcampo = "labelDataEntrega"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<strin dataEntrega>);
    });

    Given(/^eu visualizo o campo “Local de retirada” com "([^\"]*)"$/, async (localRetirada) => {
        var idcampo = "inputLocalRetirada"
        var campo = document.getElementById("idcampo");
        expect($(input[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> localRetirada);
    });

    Given(/^eu visualizo o campo “Desconto” com "([^\"]*)"$/, async (desconto”) => {
        var idcampo = "labelDesconto"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> desconto);
    });

    Given(/^eu visualizo o campo “Tipo de desconto” com "([^\"]*)"$/, async (TipoDesconto) => {
        var idcampo = "labelTipoDesconto"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> TipoDesconto);
    });

    Given(/^eu visualizo o campo “Condição de pagamento” com "([^\"]*)"$/, async (condicaoPagamento) => {
        var idcampo = "labelCondicaoPagamento"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> condiçãoPagamento);
    });

    Given(/^eu visualizo o campo “Quantidade” com "([^\"]*)"$/, async (quantidade) => {
        var idcampo = "labelQuantidade"
        var campo = document.getElementById("idcampo");
        expect($(“label[id=“ + idcampo + ”]”).getText()).to.eventually.equal(<string> quantidade);

    });

    Given(/^eu visualizo o botão de marcar como pago$/, async () => {
        var idElem = "botaoPago"
        var elem = document.getElementById("idElem");
        expect($(“button[id=“ + idElem+ ”]”).getText()).to.eventually.equal('Pago');
    });

    Given(/^eu visualizo o botão de marcar como entregue$/, async () => {
        var idElem = "botaoEntregue"
        var elem = document.getElementById("idElem");
        expect($(“button[id=“ + idElem+ ”]”).getText()).to.eventually.equal('Entregue');

    });

    When(/^eu clico no botão de marcar como “entregue”$/, async () => {
       await element(by.buttonText('“Entregue”')).click();
    });
    When(/^eu clico no botão de marcar como “pago”$/, async () => {
       await element(by.buttonText('“Pago”')).click();
    });

    Then(/^o pedido estara marcado como entregue e pago$/, async () => {
        var idLabel1 = "labelPago"
        var label1 = document.getElementById("idLabel1");
        expect($(“label[id=“ + idLabel1 + ”]”).isPresent());
        var idLabel2 = "labelEntregue"
        var label2 = document.getElementById("idLabel2");
        expect($(“label[id=“ + idLabel2 + ”]”).isPresent());

    });

})
    