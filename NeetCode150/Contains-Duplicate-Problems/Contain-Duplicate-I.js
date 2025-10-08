function containsDuplicate(arr){
    arr.sort((a,b)=>a-b)  // if we dont use sort then some cases fails
    let l=0         //  and if we dont want to use sorting then we have to  to use hasSet to solve this problem
    let r=1
    while(r<arr.length){
        if(arr[l]===arr[r]){
            return true
        }
        l++
        r++
    }
    return false
}
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1]))
console.log(containsDuplicate([]))
console.log(containsDuplicate([0,0]))

//Note---> yaha hum sabse best has set use kar sakte hain, iss tarh ka problem solve karne kae liye.
// 1. either we can solve the using set data and using size or we can itrate as well