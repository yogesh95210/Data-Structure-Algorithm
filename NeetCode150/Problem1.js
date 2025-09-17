/* Problem Statement
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
*/

function containsDuplicate(arr){
   let set= new Set(arr)  // Here we can pass like this but in Brute force we need to write for loop to itreate and create new set Object
   if(set.size!==arr.length){
    return true
   }
   return false
}
console.log(containsDuplicate([1,2,3,3]))
console.log(containsDuplicate([1,2,3,4]))

function containsDuplicateBruteForce(arr){
   let set = new Set()
   for(let i=0; i<arr.length;i++){
    set.add(arr[i])
   }
   if(set.size=== arr.length){
    return false
   }
   return true
}
console.log(containsDuplicateBruteForce([1,2,3,3]))
console.log(containsDuplicateBruteForce([1,2,3,4]))
