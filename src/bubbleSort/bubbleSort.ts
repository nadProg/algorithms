export const bubbleSort = (
  items: number[],
  direction: 'asc' | 'desc' = 'asc',
): number[] => {
  const clonedItems = [...items];

  for (let i = 1; i < items.length; i++) {
    let isBreak = true;

    for (let j = 0; j < items.length - i; j++) {
      const itemA = clonedItems[j];
      const itemB = clonedItems[j + 1];

      const isToSwap = direction === 'desc' ? itemA < itemB : itemA > itemB;

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
