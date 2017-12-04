Feature:
As usuario do sistema
I want to visualizar todos os pedidos já feitos por cada cliente no sistema
So that possa ter o controle dos clientes e seus pedidos

Scenario: Marcando um pedido como cancelado no histórico do cliente
Given estou na página de Histórico de cliente
Given vejo um cliente com os campos Nome e CPF ou CNPJ preenchidos com “Camilla” e “12345678910”
Given o pedido “001” do cliente “Camilla” de CPF ou CNPJ “12345678910” está cadastrado no sistema
When o pedido “001” do cliente “Camilla” de CPF ou CNPJ “12345678910” for cancelado
Then vejo a tag “Cancelado” no pedido “001”
Then vejo que os outros pedidos existentes do cliente “Camilla” de CPF ou CNPJ “12345678910” não foram afetados

Scenario: Marcando um pedido como entregue no histórico do cliente
Given estou na página de Histórico de cliente
Given vejo um cliente com os campos Nome e CPF ou CNPJ preenchidos com “Pedro” e “12345678911”
Given o pedido “021” do cliente “Pedro” de CPF ou CNPJ “12345678911” está cadastrado no sistema
When o pedido “021” do cliente “Pedro” de CPF ou CNPJ “12345678911” for marcado como entregue
Then vejo a tag “Entregue” no pedido “021”
Then vejo que os outros pedidos existentes do cliente “Pedro” de CPF ou CNPJ “12345678911” não foram afetados

Scenario: Marcando um pedido como pago no histórico do cliente
Given estou na página de Histórico de cliente
Given vejo um cliente com os campos Nome e CPF ou CNPJ preenchidos com “Carlos” e “12345678912”
Given o pedido “007” do cliente “Carlos” de CPF ou CNPJ “12345678912” está cadastrado no sistema
When o pedido “007” do cliente “Carlos” de CPF ou CNPJ “12345678912” for marcado como pago
Then vejo a tag “Pago” no pedido “007”
Then vejo que os outros pedidos existentes do cliente “Carlos” de CPF ou CNPJ “12345678912” não foram afetados