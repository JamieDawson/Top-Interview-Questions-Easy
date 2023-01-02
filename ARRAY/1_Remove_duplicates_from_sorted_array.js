// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
var removeDuplicates = function (nums) {
  let index = 1;

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

/*
Have an index counter set to 1. This will be used to set the values of the array one at a time.

loop thorugh nums. Create i - 1 counter for whole array so you don't go over.
    if nums[i] IS NOT equal to nums[i + 1]
        nums[index] = nums[i + 1]
        increae index by 1

    return index variable 
*/
