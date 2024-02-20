import 'cypress-file-upload';

describe('file upload', () => {
  it('passes', () => {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.wait(3000);
    cy.get('#file-upload').attachFile('file_example_XLS_10.xls');
    cy.wait(2000);
    cy.xpath("//input[@id='file-submit']").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
  })
})