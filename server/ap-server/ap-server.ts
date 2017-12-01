import express = require('express');
import bodyParser = require("body-parser");

import {Produto} from '../../gui/ap-gui/src/app/produto';
import {CadastroDeProdutos} from './cadastrodeproduto';

var app = express();

var cadastro: CadastroDeProdutos = new CadastroDeProdutos();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/produtos', function (req, res) {
  res.send(JSON.stringify(cadastro.getProdutos()));
})

app.post('/produtos', function (req: express.Request, res: express.Response) {
  var prod: Produto = <Produto> req.body; 
  prod = cadastro.criar(prod);
  if (prod) {
    res.send({"success": "O produto foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O prod não pode ser cadastrado"});
  }
})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }
