import { quickSort as sort } from './quickSort';
import { caseFour, caseOne, caseThree, caseTwo } from '../testCases';

describe('quickSort', () => {
  test('should exist', () => {
    expect(sort).toBeDefined();
  });

  test('should handle empty array', () => {
    expect(sort([])).toEqual([]);
  });

  describe('should handle sorted arrays', () => {
    test(JSON.stringify(caseOne.sortedAsc), () => {
      expect(sort(caseOne.sortedAsc)).toEqual(caseOne.sortedAsc);
    });

    test(JSON.stringify(caseTwo.sortedAsc), () => {
      expect(sort(caseTwo.sortedAsc)).toEqual(caseTwo.sortedAsc);
    });

    test(JSON.stringify(caseThree.sortedAsc), () => {
      expect(sort(caseThree.sortedAsc)).toEqual(caseThree.sortedAsc);
    });

    test(JSON.stringify(caseFour.sortedAsc), () => {
      expect(sort(caseFour.sortedAsc)).toEqual(caseFour.sortedAsc);
    });
  });

  describe('should sort numbers ascending by default', () => {
    test(JSON.stringify(caseOne.shuffle), () => {
      expect(sort(caseOne.shuffle)).toEqual(caseOne.sortedAsc);
    });

    test(JSON.stringify(caseTwo.shuffle), () => {
      expect(sort(caseTwo.shuffle)).toEqual(caseTwo.sortedAsc);
    });

    test(JSON.stringify(caseThree.shuffle), () => {
      expect(sort(caseThree.shuffle)).toEqual(caseThree.sortedAsc);
    });

    test(JSON.stringify(caseFour.shuffle), () => {
      expect(sort(caseFour.shuffle)).toEqual(caseFour.sortedAsc);
    });
  });

  describe('should sort numbers ascending', () => {
    test(JSON.stringify(caseOne.sortedAsc), () => {
      expect(sort(caseOne.shuffle, 'asc')).toEqual(caseOne.sortedAsc);
    });

    test(JSON.stringify(caseTwo.shuffle), () => {
      expect(sort(caseTwo.shuffle, 'asc')).toEqual(caseTwo.sortedAsc);
    });

    test(JSON.stringify(caseThree.shuffle), () => {
      expect(sort(caseThree.shuffle, 'asc')).toEqual(caseThree.sortedAsc);
    });

    test(JSON.stringify(caseFour.shuffle), () => {
      expect(sort(caseFour.shuffle, 'asc')).toEqual(caseFour.sortedAsc);
    });
  });

  describe('should sort numbers descending', () => {
    test(JSON.stringify(caseOne.shuffle), () => {
      expect(sort(caseOne.shuffle, 'desc')).toEqual(caseOne.sortedDesc);
    });

    test(JSON.stringify(caseTwo.shuffle), () => {
      expect(sort(caseTwo.shuffle, 'desc')).toEqual(caseTwo.sortedDesc);
    });

    test(JSON.stringify(caseThree.shuffle), () => {
      expect(sort(caseThree.shuffle, 'desc')).toEqual(caseThree.sortedDesc);
    });

    test(JSON.stringify(caseFour.shuffle), () => {
      expect(sort(caseFour.shuffle, 'desc')).toEqual(caseFour.sortedDesc);
    });
  });
});
