export type { CompareFunction, CheckEqualityFunction } from './types';

export { defaultCompare } from './defaultCompare';
export {
  compareNumbersAscending,
  compareNumbersDescending,
} from './compareNumbers/compareNumbers';
export { getReverseCompare } from './getReverseCompare';

export { defaultCheckEquality } from './defaultCheckEquality';
export { checkNumbersEquality } from './checkNumbersEquality/checkNumbersEquality';
