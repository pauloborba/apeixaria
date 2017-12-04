import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página de Produtos$/, async () => {
       await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ApGui');
        await $("a[name='produtos']").click();
    })

    Given(/^o produto com código "([^\"]*)", nome "([^\"]*)", valor "([^\"]*)", unidade de medida "([^\"]*)" e categoria "([^\"]*)" está cadastrado no sistema$/, async (cod, nome, valor, unid, cat) => {  
        await $("input[name=codigobox]").sendKeys(<string> cod);
        await $("input[name=nomebox]").sendKeys(<string> nome);
        await $("input[name=valorbox]").sendKeys(<string> valor)
        await $(`select#unidade_de_medidabox option[value="${<string> unid}"]`).click()
        await $(`select#categoriabox option[value="${<string> cat}"]`).click()
        await $("button#Cadastrar").click();
     })

     Given(/^possuo um pedido pendente para o cliente com telefone "([^\"]*)" comprando o produto com código "([^\"]*)"$/, async (tel, cod) => {
        
     })

    When(/^preencho o campo "([^\"]*)" com "([^\"]*)"$/, async (campo, valor) => {
        var c = <string> campo;
        var box = c.replace(/\s/g, '_') + "box";
        await $("input[name=" + box + "]").sendKeys(<string> valor);
    });

    When(/^seleciono "([^\"]*)" para o campo "([^\"]*)"$/, async (item, campo) => {
        var c = <string> campo;
        var box = c.replace(/\s/g, '_') + "box";
        await $(`select#${box} option[value="${<string> item}"]`).click()
    });

    When(/^altero o valor do produto da categoria "([^\"]*)" com código "([^\"]*)" para "([^\"]*)"$/, async (cat, cod, valor) => {
        var c = <string> cat;
        cat = c.replace(/\s/g, '_') + "box";
        return setTimeout(async () => expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod} td[name='valorlist']`)).sendKeys(<string> valor)), 0)
    });

    When(/^finalizo o cadastro$/, async () => {
       await $("button#Cadastrar").click();
    });

    When(/^deleto o produto da categoria "([^\"]*)" com código "([^\"]*)"$/, async (cat, cod) => {
     
    });

    Then(/^o produto com código "([^\"]*)" agora aparece na categoria "([^\"]*)" na listagem de produtos$/, async (cod, cat) => {
        return setTimeout(async () => expect( await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true, 0)
    });
      
    Then(/^o produto com código "([^\"]*)" não aparece na categoria "([^\"]*)" na listagem de produtos$/, async (cod, cat) => {
        expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.false;
    });

    Then(/^o produto com código "([^\"]*)" e nome "([^\"]*)" não aparece na categoria "([^\"]*)" na listagem de produtos$/, async (cod, nome, cat) => {
        return setTimeout(async () => expect((await element(by.css(`table#${cat}-table tbody tr#id-${cod} td[name='nomelist']`)).getText()) != nome).to.be.true, 0)
    });

    Then(/^o produto de código "([^\"]*)" da categoria "([^\"]*)" possui o valor "([^\"]*)" no sistema$/, async (cod, cat, valor) => {
        var c = <string> cat;
        cat = c.replace(/\s/g, '_') + "box";
        return setTimeout(async () => expect((await element(by.css(`table#${cat}-table tbody tr#id-${cod} td[name='valorlist']`)).getText()) == valor).to.be.true, 0)
    });

    Then(/^uma mensagem de erro por campo não preenchido aparecerá na tela$/, async () => {
        expect(await element(by.id('campoembranco')).isPresent()).to.be.true;
    });

    Then(/^uma mensagem de erro por código repetido aparecerá na tela$/, async () => {
        return setTimeout(async () => expect( await element(by.css(`codrepetido`)).isPresent()).to.be.true, 0)
    });

    Then(/^o pedido pendente do cliente com telefone "([^\"]*)" que contém o produto com o código "([^\"]*)" continua com o valor "([^\"]*)"$/, async (tel, cod, val) => {
        
    });

    Then(/^o histórico até o momento do produto com o código "([^\"]*)", possui o valor "([^\"]*)"$/, async (cod, val) => {
        
    });

    Then(/^o histórico do cliente com o telefone "([^\"]*)" continua com o produto de código "([^\"]*)" com o valor "([^\"]*)"$/, async (tel, cod, val) => {
        
    });

    Then(/^o pedido pendente do cliente com telefone "([^\"]*)" que possui o produto de código "([^\"]*)" não sofre alteração$/, async (tel, cod) => {
        
    });

    Then(/^o histórico do produto com o código "([^\"]*)" não sofreram alteração$/, async (cod) => {
        
    });

    Then(/^o histórico do cliente com telefone "([^\"]*)" não sofreram alteração$/, async (tel) => {

    });
})