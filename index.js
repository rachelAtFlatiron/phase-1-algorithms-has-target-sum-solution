// [1, 3, 4, 2, 9, 7]
// 1 -> 1+3, 1+4, 1+2, 1+9, 1+7
// 3 -> 3+4, 3+2, 3+9, 3+7
// 4 -> 4+2, 4+9, 4+7
// 2 -> 2+9, 2+7
// 9 -> 9+7
function hasTargetSum(array, target) {
  for(let i = 0; i < array.length - 1; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. for loop i index
    (let i = 0; i < array.length - 1; i++)
    2. for loop j index
    (let j = i + 1; j < array.length ; j++)
      3. test if array[i] + array[j] === target
        4. return true (we don't have to finish looking through the rest of the array)
  5. return false (we have finished our for loops, we have checked every single possible combination, and found no matching sum)
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

module.exports = hasTargetSum;
