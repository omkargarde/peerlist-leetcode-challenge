function maxSubArray(nums: number[]): number {
  let max = Number.NEGATIVE_INFINITY;
  let localMax = 0;
  for (let i = 0; i < nums.length; i++) {
    localMax += nums[i];
    max = Math.max(localMax, max);
    localMax = Math.max(localMax, 0);
  }
  return max;
}
