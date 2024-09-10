function maxSubArray(nums: number[]): number {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    let localMax = 0;
    for (let j = i; j < nums.length; j++) {
      localMax = localMax + nums[j];
      max = Math.max(localMax, max);
    }
  }
  return max;
}
