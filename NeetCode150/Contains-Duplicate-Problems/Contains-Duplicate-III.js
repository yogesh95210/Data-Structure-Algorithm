/*
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

 

Example 1:

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
Example 2:

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
*/

 function containsNearbyAlmostDuplicate(arr, indexDiff, valueDiff) {
     for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<=i+indexDiff && j<arr.length;j++){
        if(Math.abs(i-j)<=indexDiff && Math.abs(arr[i]-arr[j])<=valueDiff){
            return true
        }
    }
   }
  return false
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0))
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3))
// above approch may cause problem


// Lets see Optimal Solution

function containsNearbyAlmostDuplicateOptimal(arr,indexDiff,valueDiff){
 let set= new Set()
  let i=0
  for(let j=0;j<arr.length;j++){
   if(set.has(arr[j])){
    return true
   }
   set.add(arr[j])
   if(j-i>=indexDiff && Math.abs(arr[i]-arr[j])>=valueDiff){
    set.delete(arr[i])
    i++
   }
  }
  return false
}

console.log(containsNearbyAlmostDuplicateOptimal([1,2,3,1],3,0))
console.log(containsNearbyAlmostDuplicateOptimal([1,5,9,1,5,9],2,3))
