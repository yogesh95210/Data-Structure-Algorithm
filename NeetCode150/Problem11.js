// Merge two sorted Array

// arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output : [1,2,3,4,5,6]

function mergeSortedArray(arr1,arr2){
let i=0
let j=0

let result= []

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j]){
        result.push(arr1[i])
        i++
    }else{
           result.push(arr2[j])
           j++
    }
}

while(i<arr1.length){
    if(arr1[i]!==0){
    result.push(arr1[i])
    }
    i++
}

while(j<arr2.length){
    if(arr2[j]!==0){
    result.push(arr2[j])
    }
    j++
}
return result

}

console.log(mergeSortedArray([1,3,5],[2,4,6]))
console.log(mergeSortedArray([10,20,20,40,0,0],[1,2]))  // only iss case mein work kar rha hain , kai cases mein fail bhi kar rha hain
