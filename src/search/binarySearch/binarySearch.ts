export const binarySearch = (items: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = items.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.round((leftIndex + rightIndex) / 2);

    if (items[middleIndex] === target) {
      return middleIndex;
    }

    if (items[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};
