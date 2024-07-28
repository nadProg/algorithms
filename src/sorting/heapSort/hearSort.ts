import { type CompareFunction, defaultCompare } from '@/compare';

export const heapSort = <T>(
  items: T[],
  compare: CompareFunction<T> = defaultCompare,
): T[] => {
  if (items.length > 2) {
    compare(items[0], items[1]);
  }

  return [...items];
};
