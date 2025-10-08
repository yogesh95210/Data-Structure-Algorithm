/*
Products of Array Except Self
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in O(n)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0] 
*/


function productExceptSelf(arr){
    let res= Array(arr.length).fill(1)
    for(let i=0;i<arr.length;i++){
    let product=1;
    for(let j=0;j<arr.length;j++){
        if(i!==j){
            product *=arr[j]
        }
    }
    res[i]= product
}
return res
}
console.log(productExceptSelf([1,2,4,6]))
console.log(productExceptSelf([-1,0,1,2,3]))

/* This code may give error in Leetcode for one of the test cases (it is failing when given array is too long) */


function productExceptSelfOptimal(arr){
const res= Array(arr.length).fill(1)

// step 1 : Prefix product

let prefix= 1
for(let i=0;i<arr.length;i++){
    res[i]=prefix
    prefix *= arr[i]
}

// step 2 : Suffix product

let suffix= 1
for(let i= arr.length-1;i>=0;i--){
     res[i] *= suffix;
    suffix *= arr[i];
}
return res
}

console.log(productExceptSelfOptimal([1,2,4,6]))
console.log(productExceptSelfOptimal([-1,0,1,2,3]))
