Feature:
As usuário do sistema
I want to visualizar os pedidos cadastrados com nome, telefone, data do pedido, data de entrega, local de retirada, desconto, tipo de desconto, condição de pagamento, uma lista de produtos, quantidade, total e o status do pedido.
So that eu posso me informar sobre os dados do pedido.

Scenario: Marcar pedido como pago e entregue
Given eu estou na página do pedido
And	eu visualizo o campo “Nome” com “Gustavo Augusto”
And	eu visualizo o campo “Telefone” com “998765432”
And	eu visualizo o campo “Data pedido” com “07/11/2017”
And	eu visualizo o campo “Data entrega” com “10/11/2017”
And	eu visualizo o campo “Local de retirada” com “A peixaria”
And	eu visualizo o campo “Desconto” com “15”
And	eu visualizo o campo “Tipo de desconto” com “%”
And	eu visualizo o campo “Condição de pagamento” com “À vista”
And	eu visualizo o campo “Quantidade” com “5”
And	eu visualizo o campo uma lista com todos os produtos cadastrados
And	eu visualizo o botão de marcar como “pago”
And	eu visualizo o botão de marcar como “entregue”
And	eu visualizo o botão de marcar como “cancelado”
When	eu clico no botão de marcar como “pago”
And	eu clico no botão de marcar como “entregue”
Then 	o pedido recebe a label de “pago”
And   	o pedido recebe a label de “entregue”

Scenario: Alterar local de retirada
Given eu estou na página do pedido
And	eu visualizo o campo “Nome” com “Gustavo Augusto”
And	eu visualizo o campo “Telefone” com “998765432”
And	eu visualizo o campo “Data pedido” com “07/11/2017”
And	eu visualizo o campo “Data entrega” com “10/11/2017”
And	eu visualizo o campo “Local de retirada” com “A peixaria”
And	eu visualizo o campo “Desconto” com “15”
And	eu visualizo o campo “Tipo de desconto” com “%”
And	eu visualizo o campo “Condição de pagamento” com “À vista”
And	eu visualizo o campo “Quantidade” com “5”
And	eu visualizo o campo uma lista com todos os produtos cadastrados
And	eu visualizo o botão de marcar como “pago”
And	eu visualizo o botão de marcar como “entregue”
And	eu visualizo o botão de marcar como “cancelado”
When	eu edito o campo “local de retirada” com “Rua bione, 220”
Then 	o local de retirada é alterado para “Rua bione, 220”

Scenario: Marcar pedido como cancelado
Given eu estou na página do pedido
And	eu visualizo o campo “Nome” com “Gustavo Augusto”
And	eu visualizo o campo “Telefone” com “998765432”
And	eu visualizo o campo “Data pedido” com “07/11/2017”
And	eu visualizo o campo “Data entrega” com “10/11/2017”
And	eu visualizo o campo “Local de retirada” com “A peixaria”
And	eu visualizo o campo “Desconto” com “15”
And	eu visualizo o campo “Tipo de desconto” com “%”
And	eu visualizo o campo “Condição de pagamento” com “À vista”
And	eu visualizo o campo “Quantidade” com “5”
And	eu visualizo o campo uma lista com todos os produtos cadastrados
And	eu visualizo o botão de marcar como “pago”
And	eu visualizo o botão de marcar como “entregue”
And	eu visualizo o botão de marcar como “cancelado”
When	eu clico no botão de marcar como “cancelar”
Then 	o pedido recebe a label de “cancelar”