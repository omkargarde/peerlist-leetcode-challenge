/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  for (let i = 1; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j -= 1;
    }
    nums[j + 1] = key;
  }
}
