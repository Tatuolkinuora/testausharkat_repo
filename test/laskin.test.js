import { describe, test, expect, it } from 'vitest';
const Laskin = require('../laskin/laskin');

describe('Laskimen testaus', function () {
  const laskin = Laskin;

  it('Tarkistetaan, että plusLasku-funktio palauttaa oikean summan yhteenlaskulla 1 + 1', function () {
    const checkSumma = laskin.plusLasku(1, 1);
    expect(checkSumma).toBe(2);
  });

  it('Tarkistetaan, että miinusLasku-funktio palauttaa oikean erotuksen vähennyslaskulla 5 - 2', function () {
    const checkSumma = laskin.miinusLasku(5, 2);
    expect(checkSumma).toBe(3);
  });
  test('Tarkistetaan, että kertoLasku-funktio palauttaa oikean tulon kertolaskulla 3 * 4', function () {
    const checkSumma = laskin.kertoLasku(3, 4);
    expect(checkSumma).toBe(12);
  });
});
