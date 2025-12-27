// const inputStr = "the quick brown fox jumps over the lazy dog";

// Based on the "inputStr", complete the transform function to get the below output -
//   [
//         { a: 1 }, { b: 1 }, { c: 1 },
//         { d: 1 }, { e: 3 }, { f: 1 },
//         { g: 1 }, { h: 2 }, { i: 1 },
//         { j: 1 }, { k: 1 }, { l: 1 },
//         { m: 1 }, { n: 1 }, { o: 4 },
//         { p: 1 }, { q: 1 }, { r: 2 },
//         { s: 1 }, { t: 2 }, { u: 2 },
//         { v: 1 }, { w: 1 }, { x: 1 },
//         { y: 1 }, { z: 1 }
//     ]


function transform(inputStr){
let map= new Map()
for(let char of inputStr){
    if(map.has(char)){
        map.set(char, map.get(char)+1)
    }else{
        map.set(char,1)
    }
}
let res= []
for( let [key,value] of map){
    if(key !==" "){
        res.push({[key]: value})
    }
}
const sortedByKey= res.sort((a,b)=>{
    const keyA= Object.keys(a)[0]
    const keyB= Object.keys(b)[0]
    return keyA.localeCompare(keyB)
})

// const sortWithValue= res.sort((a,b)=>{
//     const valA= Object.values(a)[0]
//     const valB= Object.values(b)[0]
//     return valA-valB
//})
return sortedByKey
}

console.log(transform("the quick brown fox jumps over the lazy dog"))