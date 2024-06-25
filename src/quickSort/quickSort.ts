export const quickSort = (
  items: number[],
  direction: 'asc' | 'desc' = 'asc',
): number[] => {
  if (items.length <= 1) {
    return items;
  }

  const referenceItem = items[0];

  const lowerItems: number[] = [];
  const middleItems: number[] = [];
  const greaterItems: number[] = [];

  items.forEach((item) => {
    if (item > referenceItem) {
      greaterItems.push(item);
      return;
    }

    if (item < referenceItem) {
      lowerItems.push(item);
      return;
    }

    middleItems.push(item);
  });

  if (direction === 'desc') {
    return quickSort(greaterItems, direction).concat(
      ...middleItems,
      ...quickSort(lowerItems, direction),
    );
  }

  return quickSort(lowerItems, direction).concat(
    ...middleItems,
    ...quickSort(greaterItems, direction),
  );
};
