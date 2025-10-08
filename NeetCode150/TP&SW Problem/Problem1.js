/*
 Longest substring without duplicate characters.

 Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/


function longestSubstringBruteForce(str){
    let maxLen= 0
    for(let i=0;i<str.length;i++){
         let set= new Set()
         let count=0
     for(let j=i;j<str.length;j++){
         if(set.has(str[j])){
            break
         }
         set.add(str[j])
         count++
         maxLen= Math.max(count,maxLen)
     }
    }
return maxLen
}

console.log(longestSubstringBruteForce("abcabcbb"))
console.log(longestSubstringBruteForce("bbbbb"))
console.log(longestSubstringBruteForce("pwwkew"))


function longestSubstringOptimal(str){
   let maxLen=0
   let set= new Set()
   let left= 0 

   for(let right=0;right<str.length;right++){
   while(set.has(str[right])){
    set.delete(str[left])
    left++
   }
    set.add(str[right])
    maxLen= Math.max(maxLen,right-left+1)
   }
   
return maxLen

}

console.log(longestSubstringOptimal("abcabcbb"))
console.log(longestSubstringOptimal("bbbbb"))
console.log(longestSubstringOptimal("pwwkew"))