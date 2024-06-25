import { getMaxStackDepth } from './getMaxStackDepth';

describe('getMaxStackDepth', () => {
  test('should return a number value', () => {
    const depth = getMaxStackDepth();

    console.log({ depth });

    expect(typeof depth).toBe('number');
  });
});
