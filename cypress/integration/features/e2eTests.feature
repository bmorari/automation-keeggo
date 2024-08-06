Feature: Advantage Online Shopping - e2e

  Scenario: Realizar a busca de um produto
    Given que estou na página inicial
    When eu busco pelo produto "HP STREAM - 11-D020NR LAPTOP"
    Then eu devo ver o produto na busca

  Scenario: Incluir produtos no carrinho
    Given que estou na página inicial
    When eu busco pelo produto "HP STREAM - 11-D020NR LAPTOP"
    And adiciono o item no carrinho
    Then eu devo ver os produtos adicionados no carrinho quando acessa-lo

  Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Given que estou na página inicial
    When eu busco pelo produto "HP STREAM - 11-D020NR LAPTOP"
    And adiciono o item no carrinho
    And eu faço login no site
    Then vejo os produtos na página de pagamento