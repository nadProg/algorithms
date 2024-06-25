export const getMaxStackDepth = (depth = 0): number => {
  try {
    return getMaxStackDepth(depth + 1);
  } catch (error) {
    return depth;
  }
};
