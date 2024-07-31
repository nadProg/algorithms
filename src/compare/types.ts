export type CompareFunction<T> = (a: T, b: T) => number;

export type CheckEqualityFunction<T> = (a: T, b: T) => boolean;

export type MatchFunction<T> = (item: T) => boolean;
