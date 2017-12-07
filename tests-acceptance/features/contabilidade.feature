Feature: As Usuário do sistema
		 I want to Ter um quantitativo de valor para as vendas
		 So that Eu posso ter uma noção do valor total faturado e do valor total sem os descontos aplicados

Scenario: Valor bruto é calculado corretamente
Given Estou na página de “Contabilidade”
Given O pedido "1" cadastrado ao cliente "joao" com "10" unidades de "salmão" possui um valor bruto de R$ "1000"
Given O pedido "2" cadastrado ao cliente "maria" com "5" unidades de "bacalhau" possui um valor bruto de R$ "200"
Given O pedido "3" cadastrado ao cliente "jose" com "50" unidades de "camarão" possui um valor bruto de R$ "500"
Then Eu verei no campo "bruto” o valor R$ "1700,00”

