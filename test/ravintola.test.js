import { assert, describe, test, expect } from 'vitest';
const ravintola = require('../ravintola/ravintola');

describe('Ravintolasovelluksen testaus', () => {
  // tehtävä 1.1 - Päivitetty: laskeLasku ei enää ole käytössä vanhojen hintojen kanssa
  // Testaa sen sijaan että generoiPaikat luo oikean kokoisen taulukon
  test('generoiPaikat luo 15 paikan taulukon', () => {
    ravintola.generoiPaikat();
    expect(ravintola.paikat.length).toBe(15);
    expect(ravintola.paikat.every((paikka) => paikka === false)).toBe(true);
  });
  // tehtävä 1.2 - Päivitetty: taulukot sisältävät nyt objekteja
  test('palautaTaulukonSatunnainenArvo palauttaa objektin yhdestä ravintolan taulukosta', () => {
    const testiArvoTaulukosta = ravintola.palautaTaulukonSatunnainenArvo(
      ravintola.juomat
    );

    const taulukkoTestattavaksi = ravintola.juomat;
    expect(taulukkoTestattavaksi).toContainEqual(testiArvoTaulukosta);
    expect(testiArvoTaulukosta).toHaveProperty('ruoka');
    expect(testiArvoTaulukosta).toHaveProperty('hinta');
  });
  // tehtävä 1.3 - Päivitetty: funktio palauttaa taulukon, ei boolean-arvoa
  test('syoRavintolassa palauttaa taulukon', () => {
    const palautettuArvo = ravintola.syoRavintolassa(5);
    expect(Array.isArray(palautettuArvo)).toBe(true);
    expect(palautettuArvo.length).toBe(5);
  });

  // Testitapaus 1: Kutsu syoRavintolassa funktiota argumentilla,
  // joka on pienempi tai yhtäsuuri kuin paikkojen määrä
  test('syoRavintolassa toimii kun asiakkaita on pienempi tai yhtäsuuri määrä kuin paikkoja', () => {
    ravintola.generoiPaikat(); // Varmistetaan että paikat on alustettu
    const asiakkaidenMaara = 10; // Pienempi kuin 15
    const tulos = ravintola.syoRavintolassa(asiakkaidenMaara);

    expect(Array.isArray(tulos)).toBe(true);
    expect(tulos.length).toBe(asiakkaidenMaara);

    // Tarkistetaan että jokainen tilaus on objekti, jolla on summa ja ruoat
    tulos.forEach((tilaus) => {
      expect(tilaus).toHaveProperty('summa');
      expect(tilaus).toHaveProperty('ruoat');
      expect(typeof tilaus.summa).toBe('number');
      expect(Array.isArray(tilaus.ruoat)).toBe(true);
    });
  });
  // Testitapaus 2: Kutsu syoRavintolassa funktiota ensin argumentilla 10,
  // ja sen jälkeen argumentilla 6. Toinen kutsu ei onnistu koska paikkoja ei ole tarpeeksi.
  test('syoRavintolassa palauttaa undefined kun paikkoja ei ole tarpeeksi', () => {
    ravintola.generoiPaikat(); // Alustetaan paikat (15 paikkaa)

    // Ensimmäinen kutsu: 10 asiakasta (onnistuu)
    const tulos1 = ravintola.syoRavintolassa(10);
    expect(Array.isArray(tulos1)).toBe(true);
    expect(tulos1.length).toBe(10);

    // Toinen kutsu: 6 asiakasta (ei onnistu, koska vain 5 paikkaa jäljellä)
    const tulos2 = ravintola.syoRavintolassa(6);
    expect(tulos2).toBeUndefined();
  });
  // Testitapaus 3: Tarkista, että laskeLasku-funktio toimii oikein
  test('laskeLasku laskee oikean summan eri yhdistelmillä', () => {
    // Testi 1: Vain pääruoka (6)
    expect(ravintola.laskeLasku(false, false, false)).toBe(6);

    // Testi 2: Pääruoka + alkuruoka (6 + 4 = 10)
    expect(ravintola.laskeLasku(true, false, false)).toBe(10);

    // Testi 3: Pääruoka + jälkiruoka (6 + 4 = 10)
    expect(ravintola.laskeLasku(false, true, false)).toBe(10);

    // Testi 4: Pääruoka + juoma (6 + 3 = 9)
    expect(ravintola.laskeLasku(false, false, true)).toBe(9);

    // Testi 5: Kaikki (6 + 4 + 4 + 3 = 17)
    expect(ravintola.laskeLasku(true, true, true)).toBe(17);

    // Testi 6: Alkuruoka + jälkiruoka (6 + 4 + 4 = 14)
    expect(ravintola.laskeLasku(true, true, false)).toBe(14);
  });
});
