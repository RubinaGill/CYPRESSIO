describe('to contact TFO company',  {browser:'chrome'}, () => {
    it('should navigate to contact Us page on desktop mode', () => {
        cy.clickLink("Contact Us");
        cy.title().should('eq', 'Contact us | The Family Office');
        cy.location('pathname').should('eq', '/en/contact-us');
    });
    it('should navigate to contact Us page on tablet mode',() => {
        cy.log("changing screen view to tablet mode")
        cy.viewport(800, 660);
        cy.get("#hs_cos_wrapper_trigger").click();
        cy.get("#hs_cos_wrapper_hd_mb_btn_").click();
        cy.title().should('eq', 'Contact us | The Family Office');
    });
    it('should enter contact details for requesting call on desktop mode', () => {
        cy.contains("Contact Us").click();
        cy.get("#firstname").type('test first name', { force: true });
        cy.get("#lastname").type('test last name', { force: true });
    });
    it.skip('should enter contact details in UpperCase for requesting call', () => {
        cy.contains("Contact Us").click();
        cy.get("#firstname").type('{shift+t} last name', { force: true });
        cy.get("#lastname").type('test last name', { force: true });
    });
    it.only('should select nationality',() => {
        cy.contains("Contact Us").click();
        cy.get('#nationality').select('Albanian');
    });
    it('is not written yet')
});