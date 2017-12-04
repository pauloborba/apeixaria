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

Scenario: Cadastro de produto mal sucedido por campo não preenchido
Given estou na página de Produtos
When preencho o campo "codigo" com "102"
When preencho o campo "nome" com "Tilápia"
When seleciono "kg" para o campo "unidade de medida"
When seleciono "peixes" para o campo "categoria"
When finalizo o cadastro
Then o produto com código "102" não aparece na categoria "peixes" na listagem de produtos
Then uma mensagem de erro por campo não preenchido aparecerá na tela

Scenario: Cadastro de produto mal sucedido por código repetido
Given estou na página de Produtos
Given o produto com código "003", nome "Pitu", valor "40", unidade de medida "kg" e categoria "camarões" está cadastrado no sistema
When preencho o campo "codigo" com "003"
When preencho o campo "nome" com "Filé de camarão"
When preencho o campo "valor" com "66"
When seleciono "kg" para o campo "unidade de medida"
When seleciono "camarões" para o campo "categoria"
When finalizo o cadastro
Then o produto com código "003" e nome "Filé de camarão" não aparece na categoria "camarões" na listagem de produtos
Then uma mensagem de erro por código repetido aparecerá na tela

Scenario: A alteração do preço de um produto cadastrado está correta
Given o produto com código "001", nome "Camarão Cinza", valor "33", unidade de medida "kg" e categoria "camarões" está cadastrado no sistema
Given possuo um pedido pendente para o cliente com telefone "123456789" comprando o produto com código "001"
Given estou na página de Produtos
When altero o valor do produto da categoria "camarões" com código "001" para "27"
Then o produto de código "001" da categoria "camarões" possui o valor "27" no sistema
Then o pedido pendente do cliente com telefone "123456789" que contém o produto com o código "001" continua com o valor "33"
Then o histórico até o momento do produto com o código "001", possui o valor "33"
Then o histórico do cliente com o telefone "123456789" continua com o produto de código "001" com o valor "33"