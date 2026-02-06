let age = 18;
console.log(typeof age);//number

let name = "Satwik";
console.log(typeof name);//string

let isLoggedIn = false;
console.log(typeof isLoggedIn);//boolean

let x ;
console.log(typeof x);//undefined

let y = null;
console.log(typeof y);//object (this is a known bug in JavaScript, null is not actually an object)

let bigIntValue = BigInt("1234567890123456789012345678901234567890");
console.log(typeof bigIntValue);//bigint
let symbolValue = Symbol("id");
console.log(typeof symbolValue);//symbol

let  a = 5;
let str = "5"; //type conversion from number to string

let str2 = a+str;
console.log(str2);
