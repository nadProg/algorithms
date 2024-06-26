import { type CompareFunction, defaultCompare } from '@/compare';

export const binarySearch = <T>(
  items: T[],
  target: T,
  compare: CompareFunction<T> = defaultCompare,
): number => {
  let leftIndex = 0;
  let rightIndex = items.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.round((leftIndex + rightIndex) / 2);

    if (compare(items[middleIndex], target) === 0) {
      return middleIndex;
    }

    if (compare(items[middleIndex], target) < 0) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};
