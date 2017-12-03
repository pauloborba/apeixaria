import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameNome = ((elem, nome) => elem.element(by.name('nomelist')).getText().then(text => text === nome));
let sameTelefone = ((elem, telefone) => elem.element(by.name('telefonelist')).getText().then(text => text === telefone));
let sameOpcao = ((elem, opcao) => elem.element(by.name('opcaolist')).getText().then(text => text === opcao));
let pAND = ((p,q) => p.then(pb => q.then(qb => pb && qb)));

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
        await $("input[id = " + campoInput + "]").clear();
        //await expect($("input[id = " + campoInput + "]").getText()).to.eventually.equal('');        
        await $("input[id = " + campoInput + "]").sendKeys(<string> conteudo);
    });

    When(/^seleciono a opção “([^0-9]*)”$/, async (opcao) => {
        opcao = <string> opcao;        
        const opcaoInput = opcao.replace(/\s/g, '_') + 'Input';
        await element(by.id(opcaoInput)).click();
        await expect(element(by.id(opcaoInput)).isSelected()).to.eventually.equal(true);
    });

    When(/^finalizo o cadastro$/, async () => {
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

    Then(/^não vejo “([^0-9]*)”, “([^\"]*)” e “([^\"]*)” em Listagem de Clientes$/, async (nome, telefone, opcao) => { 
        await $("a[name='clientes']").click();
        const op = <string> opcao;                
        var allclientes : ElementArrayFinder = element.all(by.name('clientelist'));
        await allclientes;
        var same = allclientes.filter(elem => pAND(sameNome(elem, nome), pAND(sameTelefone(elem, telefone), sameOpcao(elem, op))));        
        await same;
        await same.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Then(/^um aviso de campo “([^0-9]*)” é exibido$/, async(avisoCampo) => {
        const nomeAviso = 'campo' + avisoCampo;
        await expect(element(by.name(nomeAviso)).isPresent()).to.eventually.equal(true);
    });

    Then(/^vejo o campo “([^0-9]*)” destacado$/, async(campo) => {
        campo = <string> campo;                
        const campoLabel = campo.replace(/\s/g, '_') + 'Label';
        await expect($("label[id = " + campoLabel + "]").getCssValue('color')).to.eventually.equal('rgba(255, 0, 0, 1)');
    });

    Given(/^o campo “([^0-9]*)” está preenchido com “([^\"]*)”$/, async (campo, conteudo) => { //verifico se o input tb esta presente
        campo = <string> campo;        
        const campoLabel = campo.replace(/\s/g, '_') + 'Label';
        const campoInput = campo.replace(/\s/g, '_') + 'Input';
        await expect(($("label[id = " + campoLabel + "]")).isPresent()).to.eventually.equal(true);
        await expect(($("input[id = " + campoInput + "]")).isPresent()).to.eventually.equal(true);
        await $("input[id = " + campoInput + "]").sendKeys(<string> conteudo);        
        await expect($("input[id = " + campoInput + "]").getAttribute('value')).to.eventually.equal(<string> conteudo);
    });

    Given(/^a opção “([^0-9]*)” está selecionada$/, async (opcao) => { 
        opcao = <string> opcao;        
        const opcaoInput = opcao.replace(/\s/g, '_') + 'Input';
        await element(by.id(opcaoInput)).click();
        await expect(element(by.id(opcaoInput)).isSelected()).to.eventually.equal(true);
    });

    When(/^finalizo a alteração$/, async () => {
        await $("button[id = 'attButton']").click();
    });

    Then(/^o cliente é atualizado no sistema com “([^0-9]*)” igual a “([^\"]*)”$/, async(campo, conteudo) => {
        await $("a[name='clientes']").click();        
        const c = <string> campo;  
        conteudo = <string> conteudo;              
        var allclientes : ElementArrayFinder = element.all(by.name('clientelist'));
        await allclientes;
        let same = ((elem, conteudo) => elem.element(by.name(c.replace(/\s/g, '') + 'list')).getText().then(text => text === conteudo)); 
        await same;       
        var sameCliente = allclientes.filter(elem => same(elem, conteudo));
        await sameCliente;
        await sameCliente.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^um aviso de cliente “([^0-9]*)” é exibido$/, async(avisoCliente) => {
        avisoCliente = <string> avisoCliente;                        
        const nomeAviso = 'cliente' + avisoCliente.replace(/\s/g, '_');
        await expect(element(by.name(nomeAviso)).isPresent()).to.eventually.equal(true);
    });


    
})

