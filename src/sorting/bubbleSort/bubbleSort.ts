import { type CompareFunction, defaultCompare } from '@/compare';

export const bubbleSort = <T>(
  items: T[],
  compare: CompareFunction<T> = defaultCompare,
): T[] => {
  const clonedItems = [...items];

  for (let i = 1; i < items.length; i++) {
    let isBreak = true;

    for (let j = 0; j < items.length - i; j++) {
      const itemA = clonedItems[j];
      const itemB = clonedItems[j + 1];

      const isToSwap = compare(itemA, itemB) > 0;

      if (isToSwap) {
        clonedItems[j] = itemB;
        clonedItems[j + 1] = itemA;
        isBreak = false;
      }
    }

    if (isBreak) {
      break;
    }
  }

  return clonedItems;
};
