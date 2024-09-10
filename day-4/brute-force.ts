function productExceptSelf(nums: number[]): number[] {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[j] === 0) {
        product = 0;
        break;
      }
      product *= nums[j];
    }
    answer[i] = product;
  }
  return answer;
}
