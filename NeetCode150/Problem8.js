// Leetcode 485----> Maximum Consecutive ones

//Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

function maxCountOnes(arr){
let count= 0
let MaxCount= 0

for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
        count++
        MaxCount= Math.max(count,MaxCount)
    }else{
        count= 0
    }
}
return MaxCount
}

console.log(maxCountOnes([1,1,0,1,1,1]))
console.log(maxCountOnes([1,0,1,1,0,1]))