"use strict";
exports.__esModule = true;
var produto_1 = require("../../gui/ap-gui/src/app/produto");
var CadastroDeProdutos = /** @class */ (function () {
    function CadastroDeProdutos() {
        this.produtos = [];
    }
    CadastroDeProdutos.prototype.criar = function (produto) {
        var result = null;
        if (this.codNaoCadastrado(produto.codigo)) {
            result = new produto_1.Produto();
            result.copyFrom(produto);
            this.produtos.push(result);
        }
        return result;
    };
    CadastroDeProdutos.prototype.codNaoCadastrado = function (cod) {
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.codigo == cod)
                return false;
        }
        return true;
        //return !this.produtos.find(p => p.codigo == cod);
    };
    CadastroDeProdutos.prototype.atualizar = function (produto) {
        var result;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.codigo == produto.codigo)
                result = i;
        }
        if (result)
            result.copyFrom(produto);
        return result;
        //var result: Produto = this.produtos.find(p => p.codigo == produto.codigo);
        //if (result) result.copyFrom(produto);
        //return result;
    };
    CadastroDeProdutos.prototype.getProdutos = function () {
        return this.produtos;
    };
    return CadastroDeProdutos;
}());
exports.CadastroDeProdutos = CadastroDeProdutos;
