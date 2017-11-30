import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameNome = ((elem, nome) => elem.element(by.name('nomelist')).getText().then(text => text === nome));
let sameTelefone = ((elem, telefone) => elem.element(by.name('telefonelist')).getText().then(text => text === telefone));
let sameOpcao = ((elem, opcao) => elem.element(by.name('opcaolist')).getText().then(text => text === opcao));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página de Cadastro de Clientes$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('ApGui'); 
        await $("a[name='cadastrocliente']").click();
    });

    Given(/^vejo o campo “([^0-9]*)”$/, async (campo) => { //verifico se o input tb esta presente
        campo = <string> campo;
        const campoLabel = campo.replace(/\s/g, '_') + 'Label';
        const campoInput = campo.replace(/\s/g, '_') + 'Input';
        await expect($("label[id = " + campoLabel + "]").isPresent()).to.eventually.equal(true);
        await expect($("input[id = " + campoInput + "]").isPresent()).to.eventually.equal(true);
    });

    When(/^preencho o campo “([^0-9]*)” com “([^\"]*)”$/, async (campo, conteudo) => {
        campo = <string> campo;        
        const campoInput = campo.replace(/\s/g, '_') + 'Input';
        await $("input[id = " + campoInput + "]").sendKeys(<string> conteudo);
    });

    When(/^seleciono a opção “([^0-9]*)”$/, async (opcao) => {
        opcao = <string> opcao;        
        const opcaoInput = opcao.replace(/\s/g, '_') + 'Input';
        await element(by.id(opcaoInput)).click();
        await expect(element(by.id(opcaoInput)).isSelected()).to.eventually.equal(true);
    });

    When(/^finalizo “([^\"]*)”$/, async (save) => {
        await $("button[id = 'saveButton']").click();
    });

    Then(/^vejo “([^0-9]*)”, “([^\"]*)” e “([^\"]*)” em Listagem de Clientes$/, async (nome, telefone, opcao) => { 
        await $("a[name='clientes']").click();
        const op = <string> opcao;                
        var allclientes : ElementArrayFinder = element.all(by.name('clientelist'));
        await allclientes;
        var same = allclientes.filter(elem => sameNome(elem, nome) && sameTelefone(elem, telefone) && sameOpcao(elem, op));
        await same;
        await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });


    
})

