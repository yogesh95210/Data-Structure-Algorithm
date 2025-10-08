



function maxConsecutiveOnes(arr,k){
    let zeroCount=0
    let l=0
    let maxCount=0
    for(let r=0;r<arr.length;r++){
       if(arr[r]===0){
        zeroCount++
       }
       while(zeroCount>k){
        if(arr[l]===0)zeroCount--;
        l++
       }
       maxCount= Math.max(maxCount,r-l+1)
    }
    return maxCount
}
console.log(maxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0],2))
console.log(maxConsecutiveOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))