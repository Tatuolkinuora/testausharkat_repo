import { assert, describe, test, expect } from 'vitest';
const ravintola = require('../ravintola/ravintola');



describe('Ravintolasovelluksen testaus', () => {
  // tehtävä 1.1 ravintolan laskun laskemisen testaus
  test('pitäisi palauttaa oikea summa laskulle', () => {
    expect(ravintola.laskeLasku(true, true, false)).toBe(14);
  });
  // tehtävä 1.2 Testaa, että palautaTaulukonSatunnainenArvo funktio palauttaa arvon,
  //  joka löytyy joistakin Ravintolan taulukoista (alkuroat, paaruoat, jalkiruoat tai juomat).
  test('palautaTaulukonSatunnainenArvo palauttaa arvon  yhdestä ravintolan taulukosta', () => {
   const testiArvoTaulukosta = ravintola.palautaTaulukonSatunnainenArvo(ravintola.juomat);

   const taulukkoTestattavaksi = ravintola.juomat;
   assert.include(taulukkoTestattavaksi, testiArvoTaulukosta, 'Taulukko ei sisällä arvoa');
  });
  // tehtävä 1.3 Testaa, että syoRavintolassa funktio palauttaa oikean tyyppisen arvon.
  
});

