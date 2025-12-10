describe('My first Test', () => {
  it('clicking "type" shows the right headings', () => {
    // Menee suomenkiliselle Wikipedia etusivulle
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');
    // Etsii hakukentän, kirjoittaa siihen "Jamk" ja hakee
    cy.get('#searchInput').type('Jamk{enter}', { force: true });
    // Tarkistaa, että olemme oikealla sivulla
    cy.url().should('include', 'Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');
    // Rullaa kohtaan "Kampukset" sivun sisällössä
    cy.get('#Kampukset').scrollIntoView();
    // Tai vaihtoehtoisesti etsi h2-otsikko
    cy.contains('h2', 'Kampukset').scrollIntoView();
  });
});
