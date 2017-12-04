import request = require("request-promise");
import { closeServer } from '../ap-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ap-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista de pedidos vazia", () => {
    return request.get(base_url + "pedidos").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("cadastra corretamente pedidos", () => {
    return request.post(base_url + "pedidos", {"json":{"cliente": {"nome": "Paulo"}, "entregue" : false, "pago": false}}).then(body => {
         expect(body).toEqual({success: "O pedido foi cadastrado com sucesso"});
     });
  })

  it("recebe pedido corretamente", () => {
    return request.put(base_url + "pedido", {"json":{"codigo":"1"}}).then(body => expect(body).toBe('[{"codigo":"1", cliente": {"nome": "Paulo"}, "entregue" : false, "pago": false}]')).catch(e => expect(e).toEqual(null));
  })
  

})