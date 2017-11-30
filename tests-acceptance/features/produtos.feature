Feature: As usuário do sistema
		 I want to cadastrar novos produtos com código, nome preço e categoria
		 So that eu possa ter um controle e conhecimento dos produtos atualmente vendidos na minha loja, separados por categoria e poder controlá-los de maneira correta

Scenario: Cadastro de produto bem sucedido
Given estou na página de Produtos
When preencho o campo "codigo" com "001"
When preencho o campo "nome" com "Camarão Cinza"
When preencho o campo "valor" com "33"
When seleciono "kg" para o campo "unidade de medida"
When seleciono "camarões" para o campo "categoria"
When finalizo o cadastro
Then o produto com código "001" agora aparece na categoria "camarões" na listagem de produtos
