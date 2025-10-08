/*
Remove duplicate from sorted array

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

function RemoveDuplicate(arr){
   if(arr.length===0) return 0
    let p=1
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr[p-1]){
            arr[p]= arr[i]
            p++
        }
    }
    return p
}

console.log(RemoveDuplicate([1,1,2]))
console.log(RemoveDuplicate([0,0,1,1,1,2,2,3,3,4]))

function removeDuplicate(arr){
    let l=0
    let r=1

    while(r<arr.length){
        if(arr[l]!==arr[r]){
            l++
            r++
        }else if(arr[l]===arr[r]){
            arr.splice(r,1)
        }
    }
    return arr
}

console.log(removeDuplicate([1,1,2]))
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))


