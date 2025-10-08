/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Example 1:
Input: nums = [3,0,1]
Output: 2

Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:
Input: nums = [0,1]
Output: 2

Explanation:
n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8

Explanation:n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */


function missingNumber(arr){
     let sorted= arr.sort((a,b)=>a-b)

    for(let i=0;i<sorted.length-1;i++){
        if(sorted[i]+1!==sorted[i+1]){
            return sorted[i]+1
        }
    }
}

console.log(missingNumber([3,0,1]))


/// One more approch

//Step 1 ---> bcz given input is [0,n] --> so first find the n number total n(n+1)/2
//Step 2 ---> Find the sum of given Array
// Step 3 ---> total n number sum - sum of given array is answer