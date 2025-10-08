console.log("Recusrion")

// Problem 1 ---> Factorial

function fact(n){
 if(n===0) return 1

 return n * fact(n-1)
}

console.log(fact(3))

// fibnoccie Series

function fibnoccie(n){
    if(n<=1) return n

    return fibnoccie(n-1)+fibnoccie(n-2)
}

console.log(fibnoccie(10))

function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(60)); // much faster 🚀

// Sum of natural Number

function sum(n){
    if(n===1) return 1
    
    return n+sum(n-1)
}

console.log(sum(7))

// Reverse a String

function reverseString(str){
if(str.length<=1) return str

return reverseString(str.slice(1))+ str[0]
}
console.log(reverseString("hello"))

// check palindrom

function isPalindrome(str){
    return reverseString(str)===str
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("madamtutu"))


// Helpwe Function problems

// Problem 1 --> Sum of digits of a number

function sumDigits(num){

    function helper(n){
        if(n===0) return 0
        return (n % 10) + helper(Math.floor(n / 10));
    }
    return helper(num)
}

console.log(sumDigits(1234))

// Problem 2 ---> find Max in an Array

function findMax(arr){
     function helper(index,maximum){
     if(index===arr.length) return maximum

     return helper(index+1,Math.max(maximum,arr[index]))
     }
     return helper(0,-Infinity)


}

console.log(findMax([2, 8, 11, 10, 5]))

// Problem 3 ---> check if array is sorted 

function isSorted(arr){
    function help(index){
if(arr.length-1===index) return true
if(arr[index]>arr[index+1]) return false
return help(index+1)

    }
    return help(0)
}
console.log(isSorted([1,2,3,4,5]))


// Easy Problem ---> Power of Two (leetcode-231)
// check power of 2

function poweOfTwo(n){
    if(n<=0) return false
    if(n===1) return true
    if(n%2!==0) return false
    return poweOfTwo(n/2)
}

console.log(poweOfTwo(16))
console.log(poweOfTwo(18))


// leetcode 78 ---> Subset

function subSet(arr){
  let subset=[]
  let res=[]

  function track(index){
     if(index===arr.length){
         res.push([...subset])
        return
        }
     
        subset.push(arr[index])
        track(index+1)

     subset.pop()

     track(index+1)
  }

  track(0)
  return res
}

console.log(subSet([1,2,3]))
