var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var cucumber_1 = require('cucumber');
var protractor_1 = require('protractor');
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var sleep = (function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); });
cucumber_1.defineSupportCode(function (_a) {
    var _this = this;
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    Given(/^estou na página de Produtos$/, function () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('A Peixaria');
        yield protractor_1.$("a[name='Produtos']").click();
    });
    Given(/^vejo os campos "([^\"]*)", "([^\"]*)", "([^\"]*)", "([^\"]*)” e "([^\"]*)" $/, function (codigo, nome, valor, unid, categoria) {
        var campos = [codigo.trim() + "box", nome.trim() + "box", valor.trim() + "box", unid.trim() + "box", categoria.trim() + "box"];
        for (var i = 0; i < campos.length; i++) {
            yield expect((protractor_1.$("input[id = campo[i]]")).isPresent()).toBe(true);
        }
    });
    When(/^preencho o campo "([^\"]*)" com "([^\"]*)"$/, function (campo, valor) {
        var box = campo.trim() + "box";
        yield protractor_1.$("input[name=box]").sendKeys(valor);
    });
    When(/^seleciono "([^\"]*)" para o campo "([^\"]*)"$/, function (unid, campo) {
        _this.selectOption = function (campo, unid) {
            var selectList, desiredOption;
            selectList = protractor_1.element(protractor_1.by.id(campo));
            selectList.all(protractor.By.tagName('option'))
                .then(function (options) {
                options.some(function (option) {
                    option.getText().then(function (text) {
                        if (unid.toLowerCase() === text.toLowerCase()) {
                            desiredOption = option;
                            return true;
                        }
                        return true;
                    });
                });
            })
                .then(function () {
                if (desiredOption) {
                    desiredOption.click();
                }
            });
        };
    });
    When(/^finalizo o cadastro$/, function () {
        yield protractor_1.$("a[id='Cadastrar']").click();
    });
    /*
        Then(/^o produto com código "([^\]*)" agora aparece na categoria "([^\]*)" na listagem de pedidos$/, async (cod, cat) => {
            var cod_prod : ElementArrayFinder = element.all(by.name('codigolist'));
            await cod_prod;
            var mesmocod = cod_prod.filter(elem => mesmocod(elem,cod));
            await mesmocod;
            await mesmocod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        });
    
        Then(/^o produto com código "([^\]*)" não aparece na categoria "([^\]*)" na listagem de pedidos $/, async (cod, cat) => {
            var cod_prod : ElementArrayFinder = element.all(by.name('codigolist'));
            await cod_prod;
            var mesmocod = cod_prod.filter(elem => mesmocod(elem,cod));
            await mesmocod;
            await mesmocod.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
        });
    
        Then(/^uma mensagem de erro por código repetido aparecerá na tela $/, async () => {
            await expect(element(by.binding('cod_error')).isPresent()).toBe(true);
        });
    
        Then(/^uma mensagem de erro por campo não preenchido aparecerá na tela $/, async () => {
            await expect(element(by.binding('blank_error')).isPresent()).toBe(true);
        });
    
        Then(/^a célula de "([^\]*)" é destacada$/, async (campo) => {
            var box= campo.trim() + "box";
            await expect (foo.getAttribute('name')).toEqual(box).getCssValue('color').toBe('#db0202')
        });
        */
});
