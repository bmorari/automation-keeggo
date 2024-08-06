Feature: API Testes - Advantage Online Shopping

  Scenario: Procurar por um produto
    Given que eu procure pelo termo "laptop"
    Then eu devo ver uma lista com itens contendo "laptop"
    And o status de resposta deve ser 200

  # Scenario: Update em uma imagem de produto e validar
  #   Given que eu tenha userId, source e color para um produto
  #   When eu mandar uma requisição PUT pra dar update na imagem
  #   Then o produto deve atualizar corretamente
  #   And o status da requisição deve ser 200
  #   And o response deve ter o novo id