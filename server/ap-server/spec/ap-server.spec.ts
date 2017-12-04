import request = require("request-promise");
import { closeServer } from '../ap-server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
  var server:any;

  beforeAll(() => {server = require('../ap-server')});

  afterAll(() => {server.closeServer()});

  it("inicialmente retorna uma lista de clientes vazia", () => {
    return request.get(base_url + "clientes").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

})