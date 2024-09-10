function twoSum(nums: number[], target: number): number[] {
  let map: any[] = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] >= 0) {
      return [map[diff], i];
    } else {
      map[nums[i]] = i;
    }
  }
}
