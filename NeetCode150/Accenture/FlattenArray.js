// 👉 Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
// 👉 Output: [1,2,3,4,5,6,7,8,10,11,9]

//Conventional way
function flatten(arr){
let res= []
        for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res=res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
        }
        return res
   }

console.log(flatten([1,2,3,[4,5,6,[7,8,[10,11]]],9]))
console.log(flatten([1,[2,3],[4]]))


//Direct Way
console.log([1,2,3,[4,5,6,[7,8,[10,11]]],9].flat(Infinity))