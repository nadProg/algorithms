import {
  type CompareFunction,
  defaultCompare,
  getReverseCompare,
} from '@/compare';
import { Heap } from '@/heap';

export const heapSort = <T>(
  items: T[],
  compare: CompareFunction<T> = defaultCompare,
): T[] => {
  const heap = new Heap(items, getReverseCompare(compare));

  const sortedItems: T[] = [];

  while (heap.getSize() > 0) {
    const extractedRootNode = heap.extractRootNode();
    if (extractedRootNode !== null) {
      sortedItems.push(extractedRootNode);
    }
  }

  return sortedItems;
};
