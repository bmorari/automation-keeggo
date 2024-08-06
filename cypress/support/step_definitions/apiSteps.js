import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const searchEndpoint = '/catalog/api/v1/products/search'
// const updateImageEndpoint = '/catalog/api/v1/product/image'
// let userId, source, color, newImageId, response

Given('que eu procure pelo termo {string}', (term) => {
  cy.request({
    method: 'GET',
    url: `${searchEndpoint}?name=${term}`,
  }).as('searchResponse')
})

Then('eu devo ver uma lista com itens contendo {string}', (term) => {
  cy.get('@searchResponse').then((response) => {
    expect(response.body).to.be.an('array')

    response.body.forEach(item => {
      expect(item).to.have.property('products')
      expect(item.products).to.be.an('array')
      expect(item.products).to.not.be.empty
    })
  })
})

Then('o status de resposta deve ser 200', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.status).to.eq(200)
  })
})

// Given('que eu tenha userId, source e color para um produto', () => {
//   userId = ''
//   source = ''
//   color = ''
//   newImageId = ''
// })

// When('eu mandar uma requisição PUT pra dar update na imagem', () => {
//   cy.request({
//     method: 'PUT',
//     url: `${updateImageEndpoint}/${userId}/${source}/${color}`,
//     body: {
//       imageId: newImageId
//     },
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((res) => {
//     response = res
//   })
// })

// Then('o produto deve atualizar corretamente', () => {
//   expect(response.body).to.have.property('imageId', newImageId)
// })

// Then('o status da requisição deve ser 200', () => {
//   expect(response.status).to.eq(200)
// })

// Then('o response deve ter o novo id', () => {
//   expect(response.body).to.have.property('imageId', newImageId)
// })