function productExceptSelf(nums: number[]): number[] {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer[i] = findProduct(nums, 0, i) * findProduct(nums, i + 1, nums.length);
  }
  return answer;
}

function findProduct(nums, start, end) {
  let product = 1;
  for (let j = start; j < end; j++) {
    if (nums[j] === 0) {
      product = 0;
      break;
    }
    product *= nums[j];
  }
  return product;
}
