//Optmized solution:

var containsDuplicate = function (nums) {
  let myHash = {};

  for (var i = 0; i < nums.length; i++) {
    if (myHash[nums[i]]) {
      myHash[nums[i]]++;
    } else {
      myHash[nums[i]] = 1;
    }
  }

  for (var i in myHash) {
    if (myHash[i] > 1) {
      return true;
    }
  }
  return false;
};

let nums = [1, 2, 3, 4, 4];
console.log(containsDuplicate(nums));

/*
Time Complexity: O(n) - Looping through array and hashmap is O(n)
Space Complexity is O(n) - n being array of numbers.
*/

/* ********************************************************** */
//First solution:
/*
var containsDuplicate = function (nums) {
  let checker = false;

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        checker = true;
        return checker;
      }
    }
  }
  return checker;
};

let nums = [1, 2, 3];
console.log(containsDuplicate(nums));
*/

/*
Solution: Use two pointers. check one at a time.
Create boolean called checker. Make it false.

loop 1 stays at one number at a time
    Loop 2 checks all numbers after it.
    if duplicate is found
        set checker to true
        return checker

return checker outside 2 loops. Will be false because if statement in Loop 2 never happened. 
*/

/*
Time Complexity: O(n^2) - Loop in a loop.
Space complexity: O(1) - Not creating any new space aside from a boolean variable. 
*/
