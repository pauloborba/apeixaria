"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let mesmocod = ((elem, cod) => elem.element(protractor_1.by.name('codlist')).getText().then(text => text === cod));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^estou na página de Produtos$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('ApGui');
        yield protractor_1.$("a[name='produtos']").click();
    }));
    When(/^preencho o campo "([^\"]*)" com "([^\"]*)"$/, (campo, valor) => __awaiter(this, void 0, void 0, function* () {
        var c = campo;
        var box = c.replace(/\s/g, '_') + "box";
        yield protractor_1.$("input[name=" + box + "]").sendKeys(valor);
    }));
    When(/^seleciono "([^\"]*)" para o campo "([^\"]*)"$/, (item, campo) => __awaiter(this, void 0, void 0, function* () {
        var c = campo;
        var box = c.replace(/\s/g, '_') + "box";
        yield protractor_1.$(`select#${box} option[value="${item}"]`).click();
    }));
    When(/^finalizo o cadastro$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("button#Cadastrar").click();
    }));
    Then(/^o produto com código "([^\"]*)" agora aparece na categoria "([^\"]*)" na listagem de produtos$/, (cod, cat) => __awaiter(this, void 0, void 0, function* () {
        expect(yield protractor_1.element(protractor_1.by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true;
    }));
    Then(/^o produto com código "([^\"]*)" não aparece na categoria "([^\"]*)" na listagem de produtos$/, (cod, cat) => __awaiter(this, void 0, void 0, function* () {
        expect(yield protractor_1.element(protractor_1.by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.false;
    }));
    Then(/^uma mensagem de erro por campo não preenchido aparecerá na tela$/, () => __awaiter(this, void 0, void 0, function* () {
        expect(yield protractor_1.element(protractor_1.by.binding('campoembranco')).isPresent()).to.be.true;
    }));
});
