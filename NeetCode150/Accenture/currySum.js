//sum(10)(20)(30)() → 60
//sum(10)(20)(30)(40)(50)(60)() → 210

function sum(a){
    return function (b){
        if(b!== undefined){
            return sum(a+b)
        }else{
            return a
        }
    }
}


console.log(sum(10)(20)(30)())
console.log(sum(10)(20)(30)(40)(50)(60)())
