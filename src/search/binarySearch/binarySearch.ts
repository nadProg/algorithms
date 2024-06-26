export const binarySearch = <T>(items: T[], target: T): number => {
  return items.findIndex((item) => item === target);
};
