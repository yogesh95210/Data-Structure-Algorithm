

function countOccurrences(arr){
 let map= new Map()
 for (let idx of arr){
    if(map.has(idx)){
         map.set(idx, map.get(idx)+1)
    }else{
        map.set(idx,1)
    }
 }
  return Object.fromEntries(map)
}

console.log(countOccurrences(['a','b','a','c','b','a']))  // → { a: 3, b: 2, c: 1 }