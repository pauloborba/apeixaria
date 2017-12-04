"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto() {
        this.clean();
    }
    Produto.prototype.clean = function () {
        this.codigo = '';
        this.nome = '';
        this.valor = null;
        this.unid = '';
        this.categoria = '';
    };
    Produto.prototype.copyFrom = function (from) {
        this.codigo = from.codigo;
        this.nome = from.nome;
        this.valor = from.valor;
        this.unid = from.unid;
        this.categoria = from.categoria;
    };
    return Produto;
}());
exports.Produto = Produto;
