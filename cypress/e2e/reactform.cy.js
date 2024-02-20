describe('form', () => {
  it('passes', () => {
    cy.visit('http://192.168.1.113/:3000/:')
    cy.title().should('eq','React')
    cy.xpath("//input[@placeholder='S.No']").type('8')
    cy.xpath("//input[@placeholder='Sex']").type('Male')
    cy.xpath("//input[@placeholder='First Name']").type('Siva')
    cy.xpath("//input[@placeholder='Last Name']").type('Bharathi')
    cy.xpath("//input[@placeholder='Mobile Number']").type('1234567890')
    cy.xpath("//input[@placeholder='Age']").type('20')
    cy.xpath("//input[@placeholder='Email']").type('Siva123')
    cy.xpath("//input[@placeholder='Password']").type('Siva@123')
    cy.xpath("//button[@type='submit']").click()

  })
})
// describe('form1', () => {
//   it('passes', () => {
//     cy.visit('http://192.168.1.113:3000/')
//     cy.title().should('eq','React App')
//     cy.xpath("//input[@type='text']").type('Dinesh')
//     cy.xpath("//input[@type='email']").type('abc@gmail.com')
//     cy.xpath("//input[@value='male']").click()
//     cy.xpath("//input[@type='date']")
//     cy.get("#date").click()
//     cy.xpath("//input[@type='date']").type('')
//     cy.xpath("//input[@placeholder='First Name']").type('Siva')
//     cy.xpath("//input[@placeholder='Last Name']").type('Bharathi')
//     cy.xpath("//input[@placeholder='Mobile Number']").type('1234567890')
//     cy.xpath("//input[@placeholder='Age']").type('20')
//     cy.xpath("//input[@placeholder='Email']").type('Siva123')
//     cy.xpath("//input[@placeholder='Password']").type('Siva@123')
//     cy.xpath("//button[@type='submit']").click()

//   })
// })

