describe('to contact TFO company', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('#hs-eu-confirmation-button').click();
        cy.get('#hs-eu-confirmation-button', { timeout: 7 * 1000 }).should('not.be.visible');
    });
    it.only('should navigate to contact Us page on desktop mode', () => {
        cy.clickLink("Contact Us");
        cy.title().should('eq', 'Contact us | The Family Office');
        cy.location('pathname').should('eq', '/en/contact-us');
    });
    it('should navigate to contact Us page on tablet mode', () => {
        cy.log("changing screen view to tablet mode")
        cy.viewport(800, 660);
        cy.get("#hs_cos_wrapper_trigger").click();
        cy.get("#hs_cos_wrapper_hd_mb_btn_").click();
        cy.title().should('eq', 'Contact us | The Family Office');
    });
    it('should enter contact details for requesting call on desktop mode', () => {
        cy.contains("Contact Us").click();
        cy.get("#firstname").type('test first name', { force: true });
        cy.debug();
        cy.get("#lastname").type('test last name', { force: true });
    });
    it('should enter contact details in UpperCase for requesting call on desktop mode', () => {
        cy.contains("Contact Us").click();
        cy.get("#firstname").type('{shift+t} last name', { force: true });
        cy.debug();
        cy.get("#lastname").type('test last name', { force: true });
    });
});