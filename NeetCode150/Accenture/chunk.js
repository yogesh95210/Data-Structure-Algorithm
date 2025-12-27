// Input ---> chunk([1,2,3,4,5],2)
// Output --->  [[1,2],[3,4],[5]]

function chunk(arr,target){
    let res=[]

    for(let i=0;i<arr.length;i=i+target){
        res.push( arr.slice(i,i+target))
    }

    return res
}

console.log(chunk([1,2,3,4,5],2))
console.log(chunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],3))