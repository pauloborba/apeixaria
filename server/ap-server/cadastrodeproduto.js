"use strict";
exports.__esModule = true;
var produto_1 = require("../../gui/ap-gui/src/app/produto");
var CadastroDeProdutos = /** @class */ (function () {
    function CadastroDeProdutos() {
        this.produtos = [];
    }
    CadastroDeProdutos.prototype.criar = function (produto) {
        var result = null;
        result = new produto_1.Produto();
        result.copyFrom(produto);
        this.produtos.push(result);
        return result;
    };
    CadastroDeProdutos.prototype.alterar = function (produto) {
        var result;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.codigo == produto.codigo)
                result = i;
        }
        if (result)
            result.copyFrom(produto);
        return result;
    };
    CadastroDeProdutos.prototype.deletar = function (codigo) {
        var idx;
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].codigo === codigo) {
                this.produtos.splice(i, 1);
            }
        }
        return this.produtos;
    };
    CadastroDeProdutos.prototype.getProdutos = function () {
        return this.produtos;
    };
    return CadastroDeProdutos;
}());
exports.CadastroDeProdutos = CadastroDeProdutos;
