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

