import { describe, test, expect } from 'vitest';
const ravintola = require('../ravintola/ravintola');

// tehtävä 1.1 ravintolan laskun laskemisen testaus

describe('Ravintolan laskeLasku testaus', () => {
  test('alkuruoka + pääruoka + jälkiruoka = 4 + 6 + 4 = 14', () => {
    expect(ravintola.laskeLasku(true, true, false)).toBe(14);
  });
});

