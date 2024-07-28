import { CompareFunction } from './types';

export const getReverseCompare =
  <T>(compare: CompareFunction<T>): CompareFunction<T> =>
  (a, b) => {
    const compareResult = compare(a, b);

    if (compareResult > 0) {
      return -1;
    }

    if (compareResult < 0) {
      return 1;
    }

    return 0;
  };
