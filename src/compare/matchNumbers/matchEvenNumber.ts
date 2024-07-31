import type { MatchFunction } from '../types';

export const matchEvenNumber: MatchFunction<number> = (
  number: number,
): boolean => number % 2 === 0;
