//  Leetcode -->487  -----Maximum Consecutive Ones II

//Given a binary array nums, return the maximum number of consecutive 1s in the array if you can flip at most one 0.

// Example:

// Input: nums = [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first 0 → [1,1,1,1,0], longest ones = 4

function maxConsecutiveOnes(arr){
    let zeroCount=0
    let l=0
    let maxCount=0
    for(let r=0;r<arr.length;r++){
       if(arr[r]===0){
        zeroCount++
       }
       while(zeroCount>1){
        if(arr[l]===0)zeroCount--;
        l++
       }
       maxCount= Math.max(maxCount,r-l+1)
    }
    return maxCount
}

console.log(maxConsecutiveOnes([1,0,1,1,0]))
console.log(maxConsecutiveOnes([1,1,1,1,1]))
console.log(maxConsecutiveOnes([1,1,0,1,1,1]))
console.log(maxConsecutiveOnes([1,0,1,0,1]))
console.log(maxConsecutiveOnes([0,0,0,0]))