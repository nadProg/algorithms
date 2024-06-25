import { defaultCompare } from '../defaultCompare';
import { isUndefined } from '../../utils/isUndefined';
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

    const mergeItemA = (item: T): void => {
      mergedItems.push(item);
      indexA++;
    };

    const mergeItemB = (item: T): void => {
      mergedItems.push(item);
      indexB++;
    };

    const isNoItemsA = isUndefined(itemA) && !isUndefined(itemB);

    if (isNoItemsA) {
      mergeItemB(itemB);
      continue;
    }

    const isNoItemsB = !isUndefined(itemA) && isUndefined(itemB);

    if (isNoItemsB) {
      mergeItemA(itemA);
      continue;
    }

    const isNoItemsAtAll = isUndefined(itemA) || isUndefined(itemB);

    if (isNoItemsAtAll) {
      break;
    }

    if (compare(itemA, itemB) < 0) {
      mergeItemA(itemA);
      continue;
    }

    mergeItemB(itemB);
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
