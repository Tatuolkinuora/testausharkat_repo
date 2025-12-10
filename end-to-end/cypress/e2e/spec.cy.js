// Tehvävä 1
/*
describe('My first Test', () => {
  it('Tehtävä 1', () => {
    // Menee suomenkiliselle Wikipedia etusivulle
    cy.visit('https://fi.wikipedia.org/wiki/Wikipedia:Etusivu');
    // Klikkaa hakukuvaketta
    cy.get('.cdx-button.cdx-button--fake-button--enabled')
      .first()
      .click({ force: true });
    // Etsii hakukentän ja hakee "Jamk"
    cy.get('#searchInput').type('Jamk{enter}', { force: true });
    // Tarkistaa, että olemme oikealla sivulla
    cy.url().should('include', 'Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');
    // Rullaa kohtaan "Kampukset" sivun sisällössä
    cy.get('#Kampukset').scrollIntoView();
    // Tarkistaa että "Kampukset" otsikko on näkyvissä
    cy.get('#Kampukset').should('be.visible');
    // Odottaa 5 sekuntia
    cy.wait(5000);
    // Vaihtaa Kielen englanniksi, jonka jälkeen päädymme Jamkin englanninkieliselle sivulle
    cy.get('#p-lang-btn').click();
    cy.get('a[lang="en"]').click();
    // Varmistaa että URL on muuttunut englanninkieliseksi
    cy.url().should(
      'contain',
      'https://en.wikipedia.org/wiki/JAMK_University_of_Applied_Sciences'
    );
  });
});
*/
