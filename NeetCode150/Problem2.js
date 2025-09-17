/* 
Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true

Example 2:
Input: s = "jar", t = "jam"
Output: false

*/

function validAnagram(s,t){
 if(s.length!==t.length) return false
   let hash= {}

   for(let char of s){
    hash[char]=(hash[char] ||0)+1
   }
   //return hash

   for(let char of t){
    if(!hash[char]) return false
    hash[char]--
   }

   return true
}

console.log(validAnagram("racecar","carrace"))
console.log(validAnagram("jar","jam"))
console.log(validAnagram("ddffhg","yui"))


// New way to handle this problem

function isAnagram(s,t){
if(s.length!==t.length) return false
let count= Array(26).fill(0)
for(let i=0; i<s.length;i++){
    count[s.charCodeAt(i)-97]++
    count[t.charCodeAt(i)-97]--
}
return count.every(val=> val===0)
}
console.log(isAnagram("racecar","carrace"))
console.log(isAnagram("jar","jam"))
console.log(isAnagram("ddffhg","yui"))