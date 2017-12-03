Feature: Cadastro de clientes
As a usuário do sistema
I want to cadastrar meus clientes
So that possa ter os dados dos clientes, bem como poder relacioná-los aos seus pedidos

Scenario: Cadastro bem sucedido
Given estou na página de Cadastro de Clientes
Given vejo o campo “nome”
Given vejo o campo “CPF ou CNPJ”
Given vejo o campo “data de nascimento”
Given vejo o campo “rua”
Given vejo o campo “numero”
Given vejo o campo “bairro”
Given vejo o campo “cidade”
Given vejo o campo “ponto de referencia”
Given vejo o campo “telefone”
Given vejo o campo “e-mail”
When preencho o campo “nome” com “Juliana Maria”
When preencho o campo “CPF ou CNPJ” com “12345678910”
When preencho o campo “data de nascimento” com “25/12/1990”
When preencho o campo “rua” com “Avenida Conselheiro Aguiar”
When preencho o campo “numero” com “1089”
When preencho o campo “bairro” com “Boa Viagem”
When preencho o campo “cidade” com “Recife”
When preencho o campo “ponto de referencia” com “Próximo ao restaurante Tapa de Cuadril”
When preencho o campo “telefone” com “81999699978”
When preencho o campo “e-mail” com “julianamaria@hotmail.com”
When seleciono a opção “consumidor final”
When finalizo o cadastro
Then vejo “Juliana Maria”, “81999699978” e “Consumidor final” em Listagem de Clientes 

Scenario: Cadastro mal sucedido
Given estou na página de Cadastro de Clientes
Given vejo o campo “nome”
Given vejo o campo “CPF ou CNPJ”
Given vejo o campo “data de nascimento”
Given vejo o campo “rua”
Given vejo o campo “numero”
Given vejo o campo “bairro”
Given vejo o campo “cidade”
Given vejo o campo “ponto de referencia”
Given vejo o campo “telefone”
Given vejo o campo “e-mail”
When preencho o campo “nome” com “Juli Mary”
When preencho o campo “CPF ou CNPJ” com “12345678910”
When preencho o campo “data de nascimento” com “25/12/1990”
When preencho o campo “rua” com “Avenida Conselheiro Aguiar”
When preencho o campo “numero” com “1089”
When preencho o campo “bairro” com “Boa Viagem”
When preencho o campo “cidade” com “Recife”
When preencho o campo “ponto de referencia” com “Próximo ao restaurante Tapa de Cuadril”
When seleciono a opção “consumidor final”
When finalizo o cadastro
Then um aviso de campo “Obrigatorio” é exibido
Then vejo o campo “telefone” destacado 
Then não vejo “Juli Mary”, “81999699977” e “Consumidor final” em Listagem de Clientes 

Scenario: Verificando campos de cadastro
Given estou na página de Cadastro de Clientes
Given vejo o campo “nome”
Given vejo o campo “CPF ou CNPJ”
Given vejo o campo “data de nascimento”
Given vejo o campo “rua”
Given vejo o campo “numero”
Given vejo o campo “bairro”
Given vejo o campo “cidade”
Given vejo o campo “ponto de referencia”
Given vejo o campo “telefone”
Given vejo o campo “e-mail”
When preencho o campo “nome” com “Clara”
When preencho o campo “CPF ou CNPJ” com “oi”
When preencho o campo “data de nascimento” com “25/12/1990”
When preencho o campo “rua” com “Avenida Conselheiro Aguiar”
When preencho o campo “numero” com “1089”
When preencho o campo “bairro” com “Boa Viagem”
When preencho o campo “cidade” com “Recife”
When preencho o campo “ponto de referencia” com “Próximo ao restaurante Tapa de Cuadril”
When preencho o campo “telefone” com “81989699978”
When preencho o campo “e-mail” com “julianamaria@hotmail.com”
When seleciono a opção “consumidor final”
When finalizo o cadastro
Then um aviso de campo “Invalido” é exibido
Then vejo o campo “CPF ou CNPJ” destacado 
Then não vejo “Clara”, “81989699978” e “Consumidor final” em Listagem de Clientes 


Scenario: Alteração bem sucedida no Cadastro de Clientes
Given estou na página de Cadastro de Clientes
Given o campo “nome” está preenchido com “Juliana Maria”
Given o campo “CPF ou CNPJ” está preenchido com “12345678910”
Given o campo “data de nascimento” está preenchido com “25/12/1990”
Given o campo “rua” está preenchido com “Avenida Conselheiro Aguiar”
Given o campo “numero” está preenchido com “1089”
Given o campo “bairro” está preenchido com “Boa Viagem”
Given o campo “cidade” está preenchido com “Recife”
Given o campo “ponto de referencia” está preenchido com “Próximo ao restaurante Tapa de Cuadril”
Given o campo “telefone” está preenchido com “81999699978”
Given o campo “e-mail” está preenchido com “julianamaria@hotmail.com”
Given a opção “consumidor final” está selecionada
When preencho o campo “nome” com “Julia Maria”
When finalizo a alteração
Then um aviso de cliente “Atualizado” é exibido
Then o cliente é atualizado no sistema com “nome” igual a “Julia Maria”

