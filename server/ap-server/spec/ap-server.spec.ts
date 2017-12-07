import request = require("request-promise");
import { closeServer } from '../ap-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ap-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente os valores da classe contabilidade vazio", () => {
    return request.get(base_url + "pedidos").then(body => expect(body).toBe("")).catch(e => expect(e).toEqual(null));
  })

  it("Apos algum pedido ser entregue os atributos da classe contabilidade mudam", () => {
    return request.post(base_url + "pedidos", {"json":{"cliente": {"nome": "Paulo"}, "entregue" : true, "pago": true}}).then(body => {
         expect(body).toEqual({success: "O pedido foi entregue e se encontra na aba de contabilidade"});
     });
  })

})