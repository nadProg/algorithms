import { CheckEqualityFunction } from '../types';

export const checkNumbersEquality: CheckEqualityFunction<number> = (a, b) =>
  a === b;
