/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++){
      for ( let j = i + 1; j < nums.length; j++)
    if (nums[i] + nums[j] === target) 
        return [i, j]
  }
};
  

//   if (num[0] + num[1] === target) {
//         return [0], [1] }
// else if()
