var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

let digits = [9, 9];
console.log(plusOne(digits));

//Solution:
/*
create loop that starts at the end
    if value is less than 9
        incase it by 1
        return digits array
    else
        set it to 0

add 1 to beginning using unshift(1)  //USECAE: [9,9]
return digits array.
*/

/*
Time Complexity: O(n) - Going through array once.
Space Complexity: O(1) - Not creating any extra space.
*/

/* **************************************** */
//Solution 2:

/*
var plusOne = function (digits) {
  let heldNumber = digits.join("");
  heldNumber = BigInt(heldNumber);
  heldNumber = heldNumber + BigInt(1);
  digits = [];
  digits = String(heldNumber).split("");

  return digits;
};

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
plusOne(digits);
*/

//Solution
/*
1) Attach all numbers in hte digits array and store it in a variable.
2) Take that variable and increase it's value by 1.
3) Delete all the values in the digits array.
4) Add each number 1 at a time in digits array.
5) Return digits array.
*/

/*
Time Complexity: O(n) - the .join method is O(n).
Space Complexity: 
*/
