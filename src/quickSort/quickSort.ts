export const quickSort = (items: number[], direction: 'asc' | 'desc' = 'asc'): number[] => {
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

    const sortedAscendingItems = quickSort(lowerItems).concat(...middleItems, ...quickSort(greaterItems));

    if (direction === 'desc') {
        return sortedAscendingItems.reverse();
    }

    return sortedAscendingItems;
}