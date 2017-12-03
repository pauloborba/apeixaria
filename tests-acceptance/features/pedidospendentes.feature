Feature:
As usuario do sistema
I want to ver os pedidos pendentes e marca-los como entregues, pagos ou cancela-los
So that eles permaneceram como pendentes ou serao enviados para historicos correspondentes aos seus determinados estados.

Scenario: Marcando um pedido apenas como entregue
Given eu tenho o pedido "1" cadastrado ao cliente "Paulo" com data de pedido "01/02/2012" e data de entrega "01/02/2030"
And eu estou na pagina de pedidos pendentes
And eu vejo o pedido "1" cadastrado ao cliente "Paulo" na lista de pendentes
And o pedido "1" nao esta marcado como pago
And o pedido "1" nao esta marcado como entregue
When eu marcar o pedido "1" como entregue
Then eu vejo o pedido "1" na lista de pedidos pendentes

Scenario: Marcando um pedido como pago sendo ele já entregue
Given eu estou na pagina de pedidos pendentes
And eu vejo o pedido "1" cadastrado ao cliente "Paulo" na lista de pendentes
And o pedido "1" nao esta marcado como pago
And o pedido "1" esta marcado como entregue
When eu marcar o pedido "1" como pago
Then eu nao vejo o pedido "1" na lista de pedidos pendentes
And eu vejo o pedido "1" no historico
And o pedido "1" estara marcado como entregue e pago com "Sim"

Scenario: Marcando um pedido apenas como pago e entregue
Given eu tenho o pedido "2" cadastrado ao cliente "Maria" com data de pedido "01/02/2012" e data de entrega "01/02/2030"
And eu estou na pagina de pedidos pendentes
And eu vejo o pedido "2" cadastrado ao cliente "Maria" na lista de pendentes
And o pedido "2" nao esta marcado como pago
And o pedido "2" nao esta marcado como entregue
When eu marcar o pedido "2" como pago
When eu marcar o pedido "2" como entregue
Then eu nao vejo o pedido "2" na lista de pedidos pendentes
And eu vejo o pedido "2" no historico
And o pedido "2" estara marcado como entregue e pago com "Sim"

Scenario: Pedido atrasado
Given eu tenho o pedido "3" cadastrado ao cliente "Ricardo" com data de pedido "01/02/2012" e data de entrega "01/02/2012"
And eu estou na pagina de pedidos pendentes
And eu vejo o pedido "3" cadastrado ao cliente "Ricardo" na lista de pendentes
And o pedido "3" nao esta marcado como pago
And o pedido "3" nao esta marcado como entregue
Then eu vejo o pedido "3" na lista de pedidos pendentes com atraso

Scenario: Entregando pedido atrasado
Given eu estou na pagina de pedidos pendentes
And eu vejo o pedido "3" cadastrado ao cliente "Ricardo" na lista de pendentes
And o pedido "3" nao esta marcado como pago
And o pedido "3" nao esta marcado como entregue
When eu marcar o pedido "3" como entregue
Then eu vejo o pedido "3" na lista de pedidos pendentes sem atraso

Scenario: Cancelando pedido
Given eu estou na pagina de pedidos pendentes
And eu vejo o pedido "3" cadastrado ao cliente "Ricardo" na lista de pendentes
When eu cancelar o pedido "3"
Then eu nao vejo o pedido "3" na lista de pedidos pendentes
And eu vejo o pedido "3" no historico
And o pedido "3" estara marcado como cancelado com "Sim"

Scenario: Restaurando pedido
Given eu estou na pagina de pedidos pendentes
And eu vejo o pedido "3" cadastrado ao cliente "Ricardo" no historico
When eu restaurar o pedido "3"
Then eu vejo o pedido "3" na lista de pedidos pendentes
And eu nao vejo o pedido "3" no historico
And o pedido "3" nao esta mais marcado como pago
And o pedido "3" nao esta mais marcado como entregue

Scenario: Visualização pedido
Given eu tenho o pedido "4" cadastrado ao cliente "Joyce" com "2" unidades de "Camarão" que custa "20" reais
And eu vejo o pedido "4" cadastrado ao cliente "Joyce" no historico
When eu clicar para visualizar o pedido "4"
Then eu não vejo a lista de pedidos pendentes