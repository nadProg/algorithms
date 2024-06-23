const compareFunctions = {
    asc: (a: number, b: number): number => a - b,
    desc: (a: number, b: number): number => b - a
} as const;

export const quickSort = (items: number[], direction: 'asc' | 'desc' = 'asc'): number[] => {
    const clonedItems = [...items];

    const compareItems = compareFunctions[direction];

    return clonedItems.sort(compareItems);
}