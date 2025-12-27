// Find first repeating character   ("success" → "c")

function firstRepeatingChar(str){
    let set=new Set()
    for(let char of str){
       if(set.has(char)){
        return char
       }else{
        set.add(char)
       }
    }
    return null

}
console.log(firstRepeatingChar("success"))
console.log(firstRepeatingChar("suces"))
console.log(firstRepeatingChar("asdfghjkl"))