import type { CompareFunction } from '../types';

type CompareNumbersFunction = CompareFunction<number>;

export const compareNumbersAscending: CompareNumbersFunction = (a, b) => a - b;

export const compareNumbersDescending: CompareNumbersFunction = (a, b) => b - a;
