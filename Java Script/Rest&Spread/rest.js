// Rest operator is used to collect all the remaining elements into an array. It is used in function parameters to accept a variable number of arguments.
// function sum(...arr){
//     let sum = arr.reduce((acc, curr) => {
//         return acc + curr;
// });
//     return sum;
// }

// let op = sum(1,2,3,4,5,89,56,56,5,65,5)
// console.log(op); // 15



// destructuring with rest operator
// const arr = [1,2,3,4,5,6,7,8,9];
// const [first, ...rest] = arr;
// console.log(first);
// console.log(rest);


//Destructuring with rest operator in objects
let obj = {
    name:"satwik",
    age:21,
    passion:"coding",
}
// in object key matters 
let {name, age, ...rest} = obj
console.log(name);
console.log(age);
console.log(rest);
