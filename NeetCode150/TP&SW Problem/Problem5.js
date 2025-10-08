/*
Max/Min sum of subarray of size k

Given an integer array nums and an integer k, find the maximum sum of any subarray of length k.

✅ Example:

nums = [2,1,5,1,3,2], k = 3  
Subarrays of size 3 → [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6  
Answer = 9
*/

function maxSubarrayBruteForce(arr,k){
    let maxSum=-Infinity
    for(let i=0;i<=arr.length-k;i++){
          let sum=0
        for(let j=i;j<i+k;j++){
            sum+=arr[j]
        }
            maxSum= Math.max(sum,maxSum)

    }
    return maxSum
}

console.log(maxSubarrayBruteForce([2,1,5,1,3,2],3))

function maxSubarrayOptimal(arr,k){
   let windowSum=0
   let maxSum= -Infinity

   for(let i=0; i<k;i++){
    windowSum+= arr[i]
   }
   maxSum= windowSum/k

   for(let i=k;i<arr.length;i++){
    windowSum+= arr[i]-arr[i-k]  // add and subtract first index element
    maxSum= Math.max(windowSum/k,maxSum)
   }

   return maxSum
}

console.log(maxSubarrayOptimal([2,1,5,1,3,2],3))
console.log(maxSubarrayOptimal([1,12,-5,-6,50,3],4))
console.log(maxSubarrayOptimal([5],1))



/*
Given an integer array nums and an integer k, find the minimum sum of any subarray of length k.

✅ Example:

nums = [2,1,5,1,3,2], k = 3  
Subarrays of size 3 → sums = [8,7,9,6]  
Answer = 6
*/


function minSubarrayBruteForce(arr,k){
    let minSum=+Infinity
    for(let i=0;i<=arr.length-k;i++){
          let sum=0
        for(let j=i;j<i+k;j++){
            sum+=arr[j]
        }
            minSum= Math.min(sum,minSum)

    }
    return minSum
}

console.log(minSubarrayBruteForce([2,1,5,1,3,2],3))




function minSubarrayOptimal(arr,k){
   let windowSum=0
   let minSum= Infinity

   for(let i=0; i<k;i++){
    windowSum+= arr[i]
   }
   minSum= windowSum

   for(let i=k;i<arr.length;i++){
    windowSum+= arr[i]-arr[i-k]  // add and subtract first index element
    minSum= Math.min(windowSum,minSum)
   }

   return minSum
}

console.log(minSubarrayOptimal([2,1,5,1,3,2],3))
