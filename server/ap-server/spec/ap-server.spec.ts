import request = require("request-promise");
import { closeServer } from '../ap-server';
import {} from 'jasmine';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ap-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista de produtos vazia", () => {
    return request.get(base_url + "produtos").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("só cadastra produtos", () => {
    var options:any = {method: 'POST', uri: (base_url + "produtos"), body:{codigo: "001", nome:"camarao cinza", valor:"33", unid:"kg", categoria:"camaroes"}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({failure: "O produto não pode ser cadastrado"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

  })

})