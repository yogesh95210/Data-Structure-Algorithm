/*
Minimum Size Subarray Sum
You are given an array of positive integers nums and a positive integer target,
return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: target = 10, nums = [2,1,5,1,5,3]
Output: 3
Explanation: The subarray [5,1,5] has the minimal length under the problem constraint.

Example 2:
Input: target = 5, nums = [1,2,1]
Output: 0
*/

function minSizeSubarraySumBruteForce(arr,target){
       let len=Infinity
    for(let i=0;i<arr.length;i++){
    let sum=0
        for(let j=i;j<arr.length;j++){
           sum += arr[j]
           if(sum>=target){
              len= Math.min(len,j-i+1)
              break;
           }
        }
    }
    return len ===Infinity?0:len
}

console.log(minSizeSubarraySumBruteForce([2,1,5,1,5,3],10))
console.log(minSizeSubarraySumBruteForce([1,2,1],5))

function minSizeSubarraySumOptimal(arr,target){
    let minLen = Infinity
     let l=0
     let r=0
     let sum=0
     for(let r=0;r<arr.length;r++){
        sum+= arr[r]
        while(sum>=target){
           minLen= Math.min(minLen,r-l+1)
           sum-= arr[l] 
           l++
        }
     }
   return minLen===Infinity ?0: minLen
}

console.log(minSizeSubarraySumOptimal([2,1,5,1,5,3],10))
console.log(minSizeSubarraySumOptimal([1,2,1],5))
