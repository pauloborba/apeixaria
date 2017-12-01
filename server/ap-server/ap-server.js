"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cadastrodeproduto_1 = require("./cadastrodeproduto");
var app = express();
exports.app = app;
var cadastro = new cadastrodeproduto_1.CadastroDeProdutos();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/produtos', function (req, res) {
    res.send(JSON.stringify(cadastro.getProdutos()));
});
app.post('/produtos', function (req, res) {
    var prod = req.body;
    prod = cadastro.criar(prod);
    if (prod) {
        res.send({ "success": "O produto foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O prod não pode ser cadastrado" });
    }
});
app.put('/produtos', function (req, res) {
    var prod = req.body;
    prod = cadastro.atualizar(prod);
    if (prod) {
        res.send({ "success": "O produto foi atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "O produto não pode ser atualizado" });
    }
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
