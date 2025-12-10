/*
TIKO RAVINTOLA
OHJELMAKOODI
*/

const Ravintola = function () {
  this.alkuruoat = [
    { ruoka: 'Tomaattikeitto', hinta: 5 },
    { ruoka: 'Leipä', hinta: 3 },
    { ruoka: 'Vihersalaatti', hinta: 4 },
    { ruoka: 'Salsa', hinta: 4 },
  ];
  this.paaruoat = [
    { ruoka: 'Kalakeitto', hinta: 8 },
    { ruoka: 'Makaroonilaatikko', hinta: 6 },
    { ruoka: 'Kasvispihvi', hinta: 7 },
    { ruoka: 'Kanasalaatti', hinta: 9 },
  ];
  this.jalkiruoat = [
    { ruoka: 'Hedelmäsalaatti', hinta: 4 },
    { ruoka: 'Jäätelö', hinta: 5 },
    { ruoka: 'Pulla', hinta: 3 },
    { ruoka: 'Donitsi', hinta: 3 },
  ];
  this.juomat = [
    { ruoka: 'Tee', hinta: 2 },
    { ruoka: 'Kahvi', hinta: 3 },
    { ruoka: 'Maito', hinta: 2 },
    { ruoka: 'Mehu', hinta: 3 },
  ];
  this.alkuruokaHinta = 4;
  this.paaruokaHinta = 6;
  this.jalkiruokaHinta = 4;
  this.juomaHinta = 3;
  this.paikkojenMaara = 15;
  this.paikat; // Tähän muuttujaan paikkojen taulukko
};

/**
 * Palauttaa satunnaisen boolean arvon
 * @return {boolean} Randomized boolean
 */
function generoiBoolean() {
  return Math.random() < 0.5;
}

/**
 * Jos 'asiakkaidenMaara' on pienempi tai yhtäsuuri kuin 'paikkojenMaara', luo taulukon 'tilaukset'
 * johon tallennetaan yksittäisen asiakkaan tilaus. tilaaAteria-funktiolle annetaan satunnaiset boolean arvot
 * argumentteina.
 *
 * Palauttaa päätteeksi 'tilaukset' taulukon.
 * @param {number} asiakkaidenMaara
 * @return {object} object array
 */
Ravintola.prototype.syoRavintolassa = function (asiakkaidenMaara) {
  const onTilaa = this.tarkistaPaikkojenMaara(asiakkaidenMaara);
  if (!onTilaa) {
    return;
  }

  // Varataan paikat ennen tilausten käsittelyä
  const varausOnnistui = this.varaaPaikat(asiakkaidenMaara);
  if (!varausOnnistui) {
    console.log('Paikkoja ei voitu varata.');
    return;
  }

  const tilaukset = [];

  for (let i = 0; i < asiakkaidenMaara; i++) {
    console.log('-------------------------------------------------------');
    console.log(
      'Tarjoillaan asiakasta numero ' + (i + 1) + '. Mitä teille saisi olla?'
    );
    tilaukset.push(
      this.tilaaAteria(generoiBoolean(), generoiBoolean(), generoiBoolean())
    );
    console.log('Asiakkaalle tarjoiltu. Hyvää ruokahalua!');
  }
  console.log('-------------------------------------------------------');
  console.log('Kaikille asiakkaille tarjoiltu!');

  return tilaukset;
};

/**
 * Tarkistaa, että 'asiakkaidenMaara' on suurempi kuin 0, mutta pienempi tai yhtäsuuri kuin 'paikkojenMaara'.
 *
 * Kirjoittaa konsoliin tulosteen tilanteesta, ja palauttaa onnistumisen boolean arvona.
 *
 * Jos 'asiakkaidenMaara' ei ole numero, heittää TypeErrorin.
 * @param {number} asiakkaidenMaara
 * @return {boolean} Onnistuminen
 */
Ravintola.prototype.tarkistaPaikkojenMaara = function (asiakkaidenMaara) {
  if (typeof asiakkaidenMaara !== 'number') {
    throw new TypeError();
  }
  if (asiakkaidenMaara <= 0) {
    console.log(
      'Ikävä kyllä emme voi tarjoilla ' + asiakkaidenMaara + ' asiakkaalle.'
    );
    return false;
  } else if (asiakkaidenMaara <= this.paikkojenMaara) {
    console.log(
      'Tilaa on ' + asiakkaidenMaara + ' asiakkaalle. Tervetuloa ravintolaamme!'
    );
    return true;
  } else {
    console.log(
      'Ikävä kyllä ravintolaamme ei mahdu ' + asiakkaidenMaara + ' asiakasta.'
    );
    return false;
  }
};

/**
 * Luo Ravintolan paikat-muuttujaan uuden taulukon, jonka koko määräytyy paikkojenMaara-muuttujan mukaisesti,
 * ja täyttää taulukon boolean arvolla false.
 */
Ravintola.prototype.generoiPaikat = function () {
  this.paikat = new Array(this.paikkojenMaara).fill(false);
};

/**
 * Varaa paikkoja ravintolasta.
 * Tarkistaa että paikat-taulukko on olemassa, laskee vapaat paikat ja varaa ne jos mahdollista.
 * Jos varauksenMaara:lle ei ole annettu arvoa, asettaa arvoksi 1.
 * Palauttaa true jos varaus onnistui, muuten false.
 *
 * @param {number} varauksenMaara - Varattavien paikkojen määrä (oletus: 1)
 * @return {boolean} Onnistuiko varaus
 */
Ravintola.prototype.varaaPaikat = function (varauksenMaara) {
  if (!Array.isArray(this.paikat)) {
    this.generoiPaikat();
  }
  if (varauksenMaara === undefined) {
    varauksenMaara = 1;
  }
  const vapaitaPaikkoja = this.paikat.filter(
    (paikka) => paikka === false
  ).length;
  if (vapaitaPaikkoja < varauksenMaara) {
    return false;
  }
  let varattu = 0;
  for (let i = 0; i < this.paikat.length && varattu < varauksenMaara; i++) {
    if (this.paikat[i] === false) {
      this.paikat[i] = true;
      varattu++;
    }
  }
  return true;
};

/**
 * Ottaa parametreina 3 boolean arvoa, joiden avulla määritellään mitä ruokia asiakas tilaa.
 * Jos parametrit eivät ole tyyppiä boolean, heitetään TypeError.
 *
 * Tilaukset tallennetaan 'ruoat' taulukkoon boolean parametrien mukaisesti.
 *
 * Lopuksi kutsutaan 'laskeLasku' funktiota, jolla lasketaan tilauksen lasku.
 *
 * Palauttaa objektin, joka sisältää numeron ja string-taulukon
 *
 * @param {boolean} ottaaAlkuruoan
 * @param {boolean} ottaaJalkiruoan
 * @param {boolean} ottaaJuoman
 * @return {object} object - number, string[]
 */
Ravintola.prototype.tilaaAteria = function (
  ottaaAlkuruoan,
  ottaaJalkiruoan,
  ottaaJuoman
) {
  if (
    typeof ottaaAlkuruoan !== 'boolean' ||
    typeof ottaaJalkiruoan !== 'boolean' ||
    typeof ottaaJuoman !== 'boolean'
  ) {
    throw new TypeError();
  }

  const ruoat = [];
  let summa = 0;
  let ruokaObjekti;

  if (ottaaAlkuruoan) {
    ruokaObjekti = this.palautaTaulukonSatunnainenArvo(this.alkuruoat);
    console.log('Ottaisin alkuruoaksi: ' + ruokaObjekti.ruoka);
    ruoat.push(ruokaObjekti.ruoka);
    summa += ruokaObjekti.hinta;
  }

  ruokaObjekti = this.palautaTaulukonSatunnainenArvo(this.paaruoat);
  console.log('Ottaisin pääruoaksi: ' + ruokaObjekti.ruoka);
  ruoat.push(ruokaObjekti.ruoka);
  summa += ruokaObjekti.hinta;

  if (ottaaJalkiruoan) {
    ruokaObjekti = this.palautaTaulukonSatunnainenArvo(this.jalkiruoat);
    console.log('Ottaisin jälkiruoaksi: ' + ruokaObjekti.ruoka);
    ruoat.push(ruokaObjekti.ruoka);
    summa += ruokaObjekti.hinta;
  }

  if (ottaaJuoman) {
    ruokaObjekti = this.palautaTaulukonSatunnainenArvo(this.juomat);
    console.log('Ottaisin juomaksi: ' + ruokaObjekti.ruoka);
    ruoat.push(ruokaObjekti.ruoka);
    summa += ruokaObjekti.hinta;
  }

  return { summa, ruoat };
};

/**
 * Palauttaa satunnaisen arvon annetusta taulukosta
 * @param {Array} taulukko
 * @return {*}
 */
Ravintola.prototype.palautaTaulukonSatunnainenArvo = function (taulukko) {
  return taulukko[Math.floor(Math.random() * taulukko.length)];
};

/**
 * Laskee summan annettujen boolean parametrien mukaisesti.
 * Jos parametrit eivät ole tyyppiä boolean, heittää TypeErrorin.
 *
 * 'loppuSumma' muuttujaan lisätään automaattisesti 'paaruokaHinta', ja loput hinnat sitten parametrien mukaisesti.
 *
 * Palauttaa lopussa 'loppuSumma'.
 *
 * @param {boolean} ottiAlkuruoan
 * @param {boolean} ottiJalkiruoan
 * @param {boolean} ottiJuoman
 * @return {number}
 */
Ravintola.prototype.laskeLasku = function (
  ottiAlkuruoan,
  ottiJalkiruoan,
  ottiJuoman
) {
  if (
    typeof ottiAlkuruoan !== 'boolean' ||
    typeof ottiJalkiruoan !== 'boolean' ||
    typeof ottiJuoman !== 'boolean'
  ) {
    throw new TypeError();
  }

  let loppuSumma = 0;

  loppuSumma += this.paaruokaHinta;

  if (ottiAlkuruoan) {
    loppuSumma += this.alkuruokaHinta;
  }

  if (ottiJalkiruoan) {
    loppuSumma += this.jalkiruokaHinta;
  }

  if (ottiJuoman) {
    loppuSumma += this.juomaHinta;
  }

  return loppuSumma;
};

const ravintola = new Ravintola();

module.exports = ravintola;
