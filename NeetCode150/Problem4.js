/*
Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]
 */

function topKfreqtEle(arr,k){
     let freqMap= new Map()
   for( let i=0; i<arr.length;i++){
    if(freqMap.has(arr[i])){
        freqMap.set(arr[i],freqMap.get(arr[i])+1)
    }
    else{
        freqMap.set(arr[i],1)
    }
   }

   const sorted= [...freqMap.entries()].sort((a,b)=>b[1]-a[1])
   return sorted.slice(0,k).map((item)=>item[0])
}
console.log(topKfreqtEle([1,2,2,3,3,3],2))
console.log(topKfreqtEle([5,6,6,8,8,8],2))
console.log(topKfreqtEle([7,7],1))