var reverse = function (left, right, arr) {
  while (left < right) {
    let vLeft = arr[left];
    arr[left] = arr[right];
    arr[right] = vLeft;
    right--;
    left++;
  }
};

var rotate = function (nums, k) {
  k = k %= nums.length;
  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);

/*
Time: O(n)
Space: O(1)

Create swap function.

Reverse entire array.
Reverse left half of array with 0 & k %= nums.lenght - 1
Reverse right side of array with k and end of array with nums.lenght - 1.

*/
//https://leetcode.com/problems/rotate-array/solutions/2220556/javascript-solution-o-n-time-o-1-space/
