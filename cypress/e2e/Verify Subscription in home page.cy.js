
//1. Launch browser
describe('Verify Subscription in home page', () => {
  it('Verify', () => {cy.visit('http://automationexercise.com')

    cy.login()
    //3. Verify that home page is visible successfully
    cy.contains('Features Items').should('be.visible')


    //4. Scroll down to footer
    cy.scrollTo('bottom')

    //5. Verify text 'SUBSCRIPTION'
    cy.contains("Subscription").should("be.visible")
    //6. Enter email address in input and click arrow button
    cy.get('#susbscribe_email').click().type('anushka111@gmail.com').should("have.value","anushka111@gmail.com")
    cy.get('#subscribe > .fa').click()
    //7. Verify success message 'You have been successfully subscribed!' is visible
    cy.contains("You have been successfully subscribed!").should("be.visible")
  })
  
    it('cart and payment', () => {cy.visit('http://automationexercise.com')
      cy.login()
   // 4. Click 'Products' button
   cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    //5. Hover over first product and click 'Add to cart'
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
   // 6. Click 'Continue Shopping' button
   cy.get('.modal-footer > .btn').click()

   //7. Hover over second product and click 'Add to cart'
   cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
   
   // 8. Click 'View Cart' button
   cy.get('u').contains("View Cart").click()

    //9. Verify both products are added to Cart
    cy.get('#product-1 > .cart_description > h4 > a').contains('Blue Top').should('be.visible')
    cy.get('#product-2 > .cart_description > h4 > a').contains('Men Tshirt').should('be.visible')
    //10. Verify their prices, quantity and total 
    cy.get('#product-1 > .cart_quantity > .disabled').contains('1').should('be.visible')
    cy.get('#product-1 > .cart_total > .cart_total_price').contains('500').should('be.visible')
    cy.get('#product-2 > .cart_quantity > .disabled').contains('1').should('be.visible')
    cy.get('#product-2 > .cart_total > .cart_total_price').contains('400').should('be.visible')
    

  
    //10. Click Proceed To Checkout
    cy.get('.col-sm-6 > .btn').contains('Proceed To Checkout').click()
    //11. Verify Address Details and Review Your Order
    cy.contains('tsinamdzghvrishvili').should('be.visible')
    cy.get('h4 > b').contains('Total Amount').should('be.visible')
    cy.get(':nth-child(4) > .cart_total_price').contains('900').should('be.visible')
    //12. Enter description in comment text area and click 'Place Order'
    cy.get('.form-control').type('ჩემი შეკვეთა')
    cy.get(':nth-child(7) > .btn').click()
    //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get('[data-qa="name-on-card"]').type('Ana Artilakva')
    cy.get('[data-qa="card-number"]').type('12345678')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('08')
    cy.get('[data-qa="expiry-year"]').type(2043)
    //14. Click 'Pay and Confirm Order' button
    cy.get('[data-qa="pay-button"]').click()
    //15. Verify success message 'Your order has been placed successfully!'
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')

  })
})