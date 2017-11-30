import express = require('express');
import bodyParser = require("body-parser");

import {Cliente} from '../../gui/ap-gui/src/app/cliente';
import {CadastroDeClientes} from './cadastrodeclientes';

var app = express();

var cadastro: CadastroDeClientes = new CadastroDeClientes();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/clientes', function (req, res) {
  res.send(JSON.stringify(cadastro.getClientes()));
})

app.post('/cliente', function (req: express.Request, res: express.Response) {
  var cliente: Cliente = <Cliente> req.body;
  cliente = cadastro.criar(cliente);
  if (cliente) {
    res.send({"success": "O cliente foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O cliente não pode ser cadastrado"});
  }
})



var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }