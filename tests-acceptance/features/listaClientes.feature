Feature:
As usuario do sistema
I want to visualizar todos os clientes cadastrados no sistema
So that eu possa acessar e alteras as informações dos clientes cadastrados, como também visualizar o histórico de pedidos de cada cliente. 

Scenario: Solicitação de alteração de dados do cliente
Given estou na pagina de Lista de clientes
Given vejo um cliente com os campos Nome, Telefone, Consumidor final e Lojista preenchidos com “Camilla”, “999998585”, Sim e Não
Given vejo um cliente com os campos Nome, Telefone, Consumidor final e Lojista preenchidos com “Atena”, “999984185”, Sim e Não
Given vejo um cliente com os campos Nome, Telefone, Consumidor final e Lojista preenchidos com “Restaurante Chinatown”, “21210502”, Não e Sim
When seleciono a opção de editar dados do cliente com os campos Nome, Telefone, Consumidor final e Lojista preenchidos com “Restaurante Chinatown”, “21210502”, Não e Sim
Then estou na página de Cadastro de cliente