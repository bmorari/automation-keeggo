import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../pages/HomePage'
import ProductPage from '../../pages/ProductPage'
import CartPage from '../../pages/CartPage'
import PaymentPage from '../../pages/PaymentPage'

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const paymentPage = new PaymentPage()

Given('que estou na página inicial', () => {
  homePage.visit()
})

When('eu busco pelo produto {string}', (product) => {
  homePage.searchProduct(product)
})

Then('eu devo ver o produto na busca', () => {
  homePage.seeTotalItens()
})

When('adiciono o item no carrinho', () => {
  productPage.selectProduct()
  productPage.addToCart()
})

Then('eu devo ver os produtos adicionados no carrinho quando acessa-lo', () => {
  cartPage.openCart()
  cartPage.verifyProductInCart()
})

When('eu faço login no site', () => {
  cartPage.clickCheckOut()
  cartPage.login()
})

Then('vejo os produtos na página de pagamento', () => {
  paymentPage.seeItensPayment()
})