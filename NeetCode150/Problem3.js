/*Two Sum
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
Return the answer with the smaller index first.

Example 1:
Input: 
nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:
Input: nums = [4,5,6], target = 10
Output: [0,2]

Example 3:
Input: nums = [5,5], target = 10
Output: [0,1]
 */

function twoSum(arr,target){
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===target){
            return [i,j]
        }
    }
}
}
console.log(twoSum([3,4,5,6],7))
console.log(twoSum([4,5,6],10))
console.log(twoSum([5,5],10))


//better approch using hashing Map()
function twoSumBetter(arr,target){
let map= new Map()
for(let i=0;i<arr.length;i++){
      let temp= target- arr[i]
      if(map.has(temp)){
   return [map.get(temp),i]
      }
    map.set(arr[i],i)
}
}
console.log(twoSumBetter([3,4,5,6],7))
console.log(twoSumBetter([4,5,6],10))
console.log(twoSumBetter([5,5],10))

// If given Input Sorted  

function twoSumOptimal(arr,target){
    let l=0
    let r= arr.length-1

    while(l<r){
        let sum= arr[l]+arr[r]

        if(sum===target){
            return [l,r]
        }else if(sum<target){
            l++
        }else{
            r--
        }
    }
    return []
}
console.log(twoSumOptimal([3,4,5,6],7))
console.log(twoSumOptimal([4,5,6],10))
console.log(twoSumOptimal([5,5],10))
console.log(twoSumOptimal([-1,-2,-3,-4,-5],-8)) // yaha yeah  its descending order so we need to check the condition {this failed}
