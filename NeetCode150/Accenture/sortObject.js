const users = [
  { name: 'A', profile: { age: 25 } },
  { name: 'B', profile: { age: 20 } },
  { name: 'C', profile: { age: 30 } }
];


//sort by profile.age

function sortObject(arr){
  
    return [...arr].sort((a,b)=>{
        const ageA= a?.profile?.age
        const ageB= b?.profile?.age
           return ageA-ageB
    })

}

console.log(sortObject(users))