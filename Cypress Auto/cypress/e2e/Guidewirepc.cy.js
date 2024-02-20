

describe('Gwlog', () => {

it('login', () => {
   cy.visit('http://18.118.226.122:8180/pc/PolicyCenter.do')
   cy.title().should('eq', "[DEV mode - 10.2.1.1711] Guidewire PolicyCenter")

   cy.xpath("//input[@name='Login-LoginScreen-LoginDV-username']").type('su')

   cy.xpath("//input[@name='Login-LoginScreen-LoginDV-password']").type('gw')

   cy.xpath("//div[@class='gw-action--inner gw-hasDivider']").click()
   cy.title().should('eq', "[DEV mode - 10.2.1.1711] Guidewire PolicyCenter (Super User) My Summary")
   
   cy.xpath("//body/form[@id='gw-root-form']/div[@id='gw-body']/div[@id='gw-west-center']/div[@id='gw-west-panel']/div[@id='gw-west-panel--top-section']/div[@id='Desktop-DesktopMenuActions']/div[1]").click()
   cy.xpath("//div[@id='Desktop-DesktopMenuActions-DesktopMenuActions_Create-DesktopMenuActions_NewAccount']//div[@aria-label='New Account'][normalize-space()='New Account']").click()
   cy.title().should('eq',"[DEV mode - 10.2.1.1711] Guidewire PolicyCenter (Super User) Enter Account Information")
                                                                 
   cy.xpath("//input[@name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName']").type('Kolo')
   cy.xpath("//input[@name='NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName']").type('Muani')
   cy.xpath("//div[@id='NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search']").click()
                                                            
   cy.xpath("//div[@aria-label='Create New Account']").click()
   cy.xpath("//div[@id='NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person']//div[@role='menuitem']").click()

   cy.title().should('eq',"[DEV mode - 10.2.1.1711] Guidewire PolicyCenter (Super User) Create account")

   cy.xpath("//input[@name='CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1']").type('7g Rainbow Colony')

   cy.xpath("//input[@name='CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City']").type('Foster City')
   cy.xpath("//div[@id='CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon']//span[@aria-label='autofill']").click()
   cy.xpath("//select[@name='CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType']")
})

})