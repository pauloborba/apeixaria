Feature: As usuário do sistema
		 I want to cadastrar novos pedidos de clientes com nome, telefone, data do pedido, data de entrega, local de retirada, desconto, tipo de desconto, condição de pagamento, produto e quantidade
		 So that eu possa cadastrar os pedidos no sistema e ter um controle dos pedidos atualmente cadastrados no meu sistema para poder controlá-los de maneira correta

Scenario: Pedido com cliente não cadastrado
Given eu estou na página de cadastro de pedido
Given não existe um cliente com o nome “Gustavo Augusto” cadastrado no sistema
When eu preencho o campo “Nome” com “Gustavo Augusto”
When eu verifico se o cliente está cadastrado no sistema
Then eu vejo uma notificação de cliente não cadastrado no sistema
Then eu permaneço na página de cadastro de pedido

Scenario: Produto sendo adicionado corretamente no pedido
Given eu estou na página de cadastro de pedido
When eu preencho o campo “Produto” com “Camarão Cinza”
When eu preencho o campo “Quantidade” com “5”
When eu adiciono o produto e a quantidade na lista
Then eu vejo o produto adicionado na lista de produtos do pedido

Scenario: Limpar lista de produtos do pedido
Given eu estou na página de cadastro de pedido
Given eu vejo o produto “Camarão Cinza” adicionado na lista de produtos do pedido
When eu limpo a lista de produtos do pedido
Then eu vejo a lista vazia

Scenario: Desconto calculado corretamente
Given eu estou na página de cadastro de pedido
When eu preencho o campo “Desconto” com “15”
When eu preencho o campo “Tipo de desconto” com “%”
When eu preencho o campo “Produto” com “Camarão Cinza”
When eu preencho o campo “Quantidade” com “5”
When eu adiciono o produto e a quantidade na lista
Then eu vejo o valor “165” no campo “Subtotal”
Then eu vejo o valor “140.25” no campo “Total”

Scenario: Pedido bem sucedido
Given eu estou na tela de cadastro de pedido
When eu preencho o campo “Nome” com “Juliana Maria”
When eu preencho o campo “Telefone” com “999699978”
When eu preencho o campo “Data pedido” com “07/12/2017”
When eu preencho o campo “Data entrega” com “10/12/2017”
When eu preencho o campo “Local de retirada” com “A peixaria”
When eu preencho o campo “Desconto” com “15”
When eu preencho o campo “Tipo de desconto” com “%”
When eu preencho o campo “Condição de pagamento” com “À vista”
When eu preencho o campo “Produto” com “Camarão Cinza”
When eu preencho o campo “Quantidade” com “5”
When eu adiciono o produto e a quantidade na lista de produtos do pedido
When eu cadastro o pedido
Then eu vejo uma notificação de pedido cadastrado com sucesso
Then eu vejo os campos de preenchimento vazios