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

// Tehtävä 2
/*
// menee sivustolle https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/
describe('My first Test', () => {
  it('Tehtävä 1', () => {
    // Menee https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/
    cy.visit('https://tiko.jamk.fi/~imjar/fronttiper/esimteht/pizza_anim/');
    // Täyttää Nimi-kentän tiedot, ja tarkistaa että ne ovat oikein
    cy.get('#nimi').type('Matti Meikäläinen');
    cy.get('#nimi').should('have.value', 'Matti Meikäläinen');
    // Täyttää Puhelin-kentän tiedot, ja tarkistaa että ne ovat oikein
    cy.get('#puhelin').type('0401234567');
    cy.get('#puhelin').should('have.value', '0401234567');
    //Täyttää Sähköposti-kentän tiedot, ja tarkistaa että ne ovat oikein
    cy.get('#sposti').type('matti.meikalainen@example.com');
    cy.get('#sposti').should('have.value', 'matti.meikalainen@example.com');
    // Valitsee halutun koon (esim. Normaali)
    cy.get('select#koko').select('Normaali');
    // Valitsee halutun pohjan (esim. Ruis)
    cy.get('#Ruis').check();
    // Valitsee halutut täytteet (Salami, Kebab ja Ananas)
    cy.get('#Salami').check();
    cy.get('#Kebab').check();
    cy.get('#Ananas').check();
    // Tarkistaa, että “Maksa tilaus”-nappulan yläpuolella oleva hinta-elementissä on oikea loppusumma
    cy.contains('Hinta: 12.00 e').should('be.visible');
  });
});
*/
