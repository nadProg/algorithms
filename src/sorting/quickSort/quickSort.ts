import { type CompareFunction, defaultCompare } from '@/compare';

export const quickSort = <T>(
  items: T[],
  compare: CompareFunction<T> = defaultCompare,
): T[] => {
  if (items.length <= 1) {
    return items;
  }

  const referenceItem = items[0];

  const lowerItems: T[] = [];
  const middleItems: T[] = [];
  const greaterItems: T[] = [];

  items.forEach((item) => {
    if (compare(item, referenceItem) > 0) {
      greaterItems.push(item);
      return;
    }

    if (compare(item, referenceItem) < 0) {
      lowerItems.push(item);
      return;
    }

    middleItems.push(item);
  });

  return quickSort(lowerItems, compare).concat(
    ...middleItems,
    ...quickSort(greaterItems, compare),
  );
};
