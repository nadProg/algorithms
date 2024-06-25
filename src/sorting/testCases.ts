type TestCase = {
  shuffle: number[];
  sortedAsc: number[];
  sortedDesc: number[];
};

export const caseOne = {
  shuffle: [5, 2, 9, 1, 5, 6],
  sortedAsc: [1, 2, 5, 5, 6, 9],
  sortedDesc: [9, 6, 5, 5, 2, 1],
} satisfies TestCase;

export const caseTwo = {
  shuffle: [3, 0, -2, 10, 7, -5, 3],
  sortedAsc: [-5, -2, 0, 3, 3, 7, 10],
  sortedDesc: [10, 7, 3, 3, 0, -2, -5],
} satisfies TestCase;

export const caseThree = {
  shuffle: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  sortedAsc: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  sortedDesc: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
} satisfies TestCase;

export const caseFour = {
  shuffle: [3.1, 2.4, 1.5, 3.6, 2.2, 3.0],
  sortedAsc: [1.5, 2.2, 2.4, 3.0, 3.1, 3.6],
  sortedDesc: [3.6, 3.1, 3.0, 2.4, 2.2, 1.5],
} satisfies TestCase;
