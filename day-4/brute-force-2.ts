function productExceptSelf(nums: number[]): number[] {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1,
      leftProduct = 1,
      rightProduct = 1;
    let left = i - 1,
      right = i + 1;
    while (left >= 0) {
      leftProduct *= nums[left];
      left--;
    }
    while (right < nums.length) {
      rightProduct *= nums[right];
      right++;
    }
    answer[i] = leftProduct * rightProduct;
  }
  return answer;
}
