var intersect = function (nums1, nums2) {
  let myHash = {};
  let myArray = [];

  for (let i of nums1) {
    if (!myHash[i]) {
      myHash[i] = 1;
    } else {
      myHash[i]++;
    }
  }

  for (let i of nums2) {
    if (myHash[i] > 0) {
      myArray.push(i);
      myHash[i]--;
    }
  }
  return myArray;
};

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
intersect(nums1, nums2);

//Solution:
/*
Create a hashmap variable.
create empty array to return with intersection values.

Loop thorugh nums1 to add num1 numbers as keys and how often they appear as values.

Loop thorugh nums2 to see if that value exist in the hashmap
    if nums2 value exist in hashmap
        push that value to the array.
        decrease the value in the hashmap

return the intersectoin array.
*/

/*
Time Complexity: O(n + m) - Loop through nums1 and nums2 array once.
Space Complexity: O(n + m) - worst case nums1 and nums2 has the exact same values.
*/
