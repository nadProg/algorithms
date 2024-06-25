const mergeItems = (
  itemsA: number[],
  itemsB: number[],
  direction: "asc" | "desc",
): number[] => {
  let indexA = 0;
  let indexB = 0;

  const mergedItems: number[] = [];

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

    const isItemAPickedUp =
      direction === "desc" ? itemA > itemB : itemA < itemB;

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

export const mergeSort = (
  items: number[],
  direction: "asc" | "desc" = "asc",
): number[] => {
  if (items.length <= 1) {
    return items;
  }

  const middleIndex = Math.floor(Math.random() * items.length);

  const startItems = items.slice(0, middleIndex);
  const endItems = items.slice(middleIndex, items.length);

  const sortedStartItems = mergeSort(startItems, direction);
  const sortedEndItems = mergeSort(endItems, direction);

  return mergeItems(sortedStartItems, sortedEndItems, direction);
};
