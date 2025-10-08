/*
LeetCode 930  ===> Binary Subarray with Sum

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.
Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15
*/

function subArrayWithSumBruteForce(arr,goal){
     let count=0 
   for(let i=0;i<arr.length;i++){
   let sum =0
    for(let j=i;j<arr.length;j++){
      sum+= arr[j]
      if(sum===goal){
        count++
    }
    }
    
  }
  return count
}

console.log(subArrayWithSum([1,0,1,0,1],2))
console.log(subArrayWithSum([0,0,0,0,0],0))
