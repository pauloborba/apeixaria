import express = require('express');
import bodyParser = require("body-parser");

import {Pedido} from '../../gui/ap-gui/src/app/pedido';
import {CadastroDePedidos} from './cadastrodepedidos';

var app = express();

var cadastro: CadastroDePedidos = new CadastroDePedidos();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

/** Aqui virá as requisições que serão feitas ao servidor*/

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }