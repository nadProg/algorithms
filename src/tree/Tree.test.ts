import { Tree } from './Tree';

describe('Test', () => {
  test('should be defined', () => {
    expect(Tree).toBeDefined();
  });

  test('should create an instance', () => {
    const tree = new Tree(1);
    expect(tree).toBeDefined();
  });
});
