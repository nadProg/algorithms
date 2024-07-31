import type { MatchFunction } from '../types';

export const matchOddNumber: MatchFunction<number> = (
  number: number,
): boolean => Math.abs(number % 2) === 1;
