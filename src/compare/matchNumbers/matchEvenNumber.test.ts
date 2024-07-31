import { matchEvenNumber } from './matchEvenNumber';

describe('matchEvenNumber', () => {
  describe('Positive cases', () => {
    test('0', () => {
      expect(matchEvenNumber(0)).toBe(true);
    });

    test('2', () => {
      expect(matchEvenNumber(2)).toBe(true);
    });

    test('10', () => {
      expect(matchEvenNumber(10)).toBe(true);
    });

    test('-0', () => {
      expect(matchEvenNumber(-0)).toBe(true);
    });

    test('-2', () => {
      expect(matchEvenNumber(-2)).toBe(true);
    });

    test('-10', () => {
      expect(matchEvenNumber(-10)).toBe(true);
    });
  });

  describe('Negative cases', () => {
    test('1', () => {
      expect(matchEvenNumber(1)).toBe(false);
    });

    test('3', () => {
      expect(matchEvenNumber(3)).toBe(false);
    });

    test('11', () => {
      expect(matchEvenNumber(11)).toBe(false);
    });

    test('-1', () => {
      expect(matchEvenNumber(-1)).toBe(false);
    });

    test('-3', () => {
      expect(matchEvenNumber(-3)).toBe(false);
    });

    test('-11', () => {
      expect(matchEvenNumber(-11)).toBe(false);
    });

    test('0.5', () => {
      expect(matchEvenNumber(0.5)).toBe(false);
    });

    test('-0.5', () => {
      expect(matchEvenNumber(-0.5)).toBe(false);
    });

    test('0.2', () => {
      expect(matchEvenNumber(0.2)).toBe(false);
    });

    test('-0.2', () => {
      expect(matchEvenNumber(-0.2)).toBe(false);
    });

    test('1.2', () => {
      expect(matchEvenNumber(1.2)).toBe(false);
    });

    test('-1.2', () => {
      expect(matchEvenNumber(-1.2)).toBe(false);
    });

    test('2.2', () => {
      expect(matchEvenNumber(2.2)).toBe(false);
    });

    test('-2.2', () => {
      expect(matchEvenNumber(-2.2)).toBe(false);
    });
  });
});
