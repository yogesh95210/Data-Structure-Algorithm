// LeetCode-Contains Duplicate II

//You are given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k, otherwise return false.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [2,1,2], k = 1
// Output: false

function containsDuplicate(arr,k){
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j] && Math.abs(i-j)<=k){
            return true
        }
    }
   }
  return false
}

console.log(containsDuplicate( [1,2,3,1],3))
console.log(containsDuplicate( [2,1,2],1))

// better approch with O(n^2)

function containsDuplicateBetter(arr,k){
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<=i+k && j<arr.length;j++){
        if(arr[i]===arr[j] && Math.abs(i-j)<=k){
            return true
        }
    }
   }
  return false
}

console.log(containsDuplicateBetter( [1,2,3,1],3))
console.log(containsDuplicateBetter( [2,1,2],1))

// Optimal Approch

function containsDuplicateOptimal(arr,k){
  let set= new Set()
  let i=0
  for(let j=0;j<arr.length;j++){
   if(set.has(arr[j])){
    return true
   }
   set.add(arr[j])
   if(j-i>=k){
    set.delete(arr[i])
    i++
   }
  }
  return false
}

console.log(containsDuplicateOptimal( [1,2,3,1],3))
console.log(containsDuplicateOptimal( [2,1,2],1))
console.log(containsDuplicateOptimal([1,3,2,5,3,6],3))
