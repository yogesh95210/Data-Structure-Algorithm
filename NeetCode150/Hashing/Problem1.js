/*
Problem --> Ransome Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/


function canConstruct(ransomNote,magazine){
    let magArr= magazine.split("")

    for(let i=0;i<ransomNote.length;i++){
        let index= magArr.indexOf(ransomNote[i])
        if(index===-1){
            return false
        }
        magArr.splice(index,1)
    }
    return true
  }

console.log(canConstruct("a","b"))
console.log(canConstruct("aa","ab"))
console.log(canConstruct("aa","aab"))

function canConstructOptimal(ransomNote,magazine){
    let freqMap1= new Map()
    let freqMap2 = new Map()
    for(let ch of magazine){
        if(freqMap1.has(ch)){
        freqMap1.set(ch,freqMap2.get(ch)+1)
    }
    else{
        freqMap1.set(ch,1)
    }
    }

for(let ch of ransomNote){
        if(freqMap2.has(ch)){
        freqMap2.set(ch,freqMap2.get(ch)+1)
    }
    else{
        freqMap2.set(ch,1)
    }
    }
    
    
    return freqMap2
}

console.log(canConstructOptimal("a","b"))
console.log(canConstructOptimal("aa","ab"))
console.log(canConstructOptimal("aa","aab"))
console.log(canConstructOptimal("leetcode", "cooledt"))