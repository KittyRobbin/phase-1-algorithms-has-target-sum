
/*
function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
        return true; // Found a pair that adds up to the target
    }

    seen.add(num);
}

return false; // No pair found
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}



/* 
  Add your pseudocode here
  
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  return false;
}
}
*/
/*
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  function runTests() {
    function test(description, expected, array, target) {
      const result = hasTargetSum(array, target);
      if (result === expected) {
        console.log(`Pass: ${description}`);
      } else {
        console.error(`Fail: ${description}`);
      }
    }
  
    // Test cases
    test("Test 1", true, [3, 8, 12, 4, 11, 7], 10);
    test("Test 2", true, [22, 19, 4, 6, 30], 25);
    test("Test 3", false, [1, 2, 5], 4);
    test("Test 4", true, [-7, 10, 4, 8], 3);
    test("Test 5", true, [1, 2, 3, 4], 5);
    test("Test 6", true, [2, 2, 3, 3], 4);
    test("Test 7", false, [4], 4);
  }
  
  runTests();
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
*/

function hasTargetSum(nums, target) {
  const Numbers =  new Set();

  for (const num of nums) {
      const complement = target-num;
if (Numbers.has(complement)) {
          return true;
      }

      Numbers.add(num);
  }

  return false;
}

// Example usage:
const numbers = [3,9,34,8 ,56, 43];
const targetSum = 88;

const result = hasTargetSum(numbers, targetSum);
console.log(result)





  // Write your algorithm here

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  write a function
  create an array of numbers
    create a target number
    return true if any of the pairs in the array add up to the target number
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum