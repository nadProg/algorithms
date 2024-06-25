import { defaultCompare } from '../defaultCompare';
import type { CompareFunction } from '../types';

const mergeItems = <T>(
  itemsA: T[],
  itemsB: T[],
  compare: CompareFunction<T>,
): T[] => {
  let indexA = 0;
  let indexB = 0;

  const mergedItems: T[] = [];

  while (indexA < itemsA.length || indexB < itemsB.length) {
    const itemA = itemsA.at(indexA);
    const itemB = itemsB.at(indexB);

    if (itemA === undefined && itemB !== undefined) {
      mergedItems.push(itemB);
      indexB++;
      continue;
    }

    if (itemA !== undefined && itemB === undefined) {
      mergedItems.push(itemA);
      indexA++;
      continue;
    }

    if (itemA === undefined || itemB === undefined) {
      break;
    }

    const isItemAPickedUp = compare(itemA, itemB) < 0;

    if (isItemAPickedUp) {
      mergedItems.push(itemA);
      indexA++;
      continue;
    }

    mergedItems.push(itemB);
    indexB++;
  }

  return mergedItems;
};

export const mergeSort = <T>(
  items: T[],
  compare: CompareFunction<T> = defaultCompare,
): T[] => {
  if (items.length <= 1) {
    return items;
  }

  const middleIndex = Math.floor(Math.random() * items.length);

  const startItems = items.slice(0, middleIndex);
  const endItems = items.slice(middleIndex, items.length);

  const sortedStartItems = mergeSort(startItems, compare);
  const sortedEndItems = mergeSort(endItems, compare);

  return mergeItems(sortedStartItems, sortedEndItems, compare);
};
