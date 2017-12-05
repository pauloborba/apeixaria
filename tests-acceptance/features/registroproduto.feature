Feature: As Usuário do sistema
		 I want to Ter uma lista de todos os produtos cadastrados
		 So that Eu posso ter controle quantitativo dos produtos entregues na minha loja e do faturamento por produto

Scenario: Pedido ao ser entregue aparece no histórico de produtos.
Given Estou na página de “Pedidos pendentes”
Given O peso total do produto "salmão" é “150” Kg.
Given O valor do lucro dos produto "salmão" é R$ "7000" 
Given O pedido "1" cadastrado ao cliente "joao" com "12" unidades de "salmão" possui um valor bruto de R$ "1200" e recebeu um desconto de "10" %
When Eu selecionar a opção “entregue”
When Eu selecionar a opção “Histórico de produtos”.
Then Eu verei o campo Peso do salmões com o valor “162” Kg
Then Eu verei o campo Lucro do salmões o valor R$ “8080”

Scenario: Somatório do peso de cada produto é calculado corretamente
Given Estou na página de “Histórico de produtos”.
Given O pedido “001” foi “12 Kg” de “Salmão”.
Given O pedido “002” foi “10Kg” de “Salmão”
Given O pedido “003” foi “5Kg” de “Salmão”
When Eu selecionar a opção “Salmão”
Then Eu verei no campo Peso total do produto “Salmão”  o valor “27Kg”

Scenario: Valor do desconto total de cada produto é calculado corretamente
Given Estou na página de “Histórico de Produtos”
Given O “salmão” custa “R$ 50,00" o Kg
Given O pedido "1" cadastrado ao cliente "joao" com "12" unidades de "salmão" possui um valor bruto de R$ "1200" e recebeu um desconto de "10" %
Given O pedido "2" cadastrado ao cliente "maria" com "5" unidades de "salmão" possui um valor bruto de R$ "500" e recebeu um desconto de "15" %
Given O pedido "3" cadastrado ao cliente "jose" com "2" unidades de "salmão" possui um valor bruto de R$ "200"
Then Eu verei no campo Lucro do produto “Salmão” o valor R$ “1255,00”

