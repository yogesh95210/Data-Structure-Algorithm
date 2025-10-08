/*
Longest Consecutive Sequence
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
 */


// Brute Force

function longestConsecutive(arr){
    if(arr.length===0) return 0;
   let longest=1
       for(let i=0; i<arr.length;i++){
        let current= arr[i]
        let count= 1

        while(linearSearch(arr,current+1)){
          current = current+1
          count= count +1
        }
        longest= Math.max(longest,count)
        }
return longest
}

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false
}
console.log(longestConsecutive([2,20,4,10,3,4,5]))
console.log(longestConsecutive([0,3,2,5,4,6,1,1]))

// 

function longestConsecutive1(arr){
        let res = 0;
        const store = new Set(arr);

        for (let num of arr) {
            let count = 0,
                curr = num;
            while (store.has(curr)) {
                count++;
                curr++;
            }
            res = Math.max(res, count);
        }
        return res;
    
}
console.log(longestConsecutive1([2,20,4,10,3,4,5]))
console.log(longestConsecutive1([0,3,2,5,4,6,1,1]))


// solution using Hash Set

function longestConsecutiveBetter(arr){
let set = new Set(arr)
let longest=1

for(let num of set){
    if(set.has(num+1)){
        let len=1
        while(set.has(num+len)){
            len++
        }
        longest= Math.max(longest,len)
    }
}
return longest
}
console.log(longestConsecutiveBetter([2,20,4,10,3,4,5]))
console.log(longestConsecutiveBetter([0,3,2,5,4,6,1,1]))