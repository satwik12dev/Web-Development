{   
    var a = 10;
    console.log(a);
}
a = 50;
console.log(a);// this works because var is function scoped and we are trying to access it outside the block but still in the same function.

{
    let b = 20;
    console.log(b);
}
// console.log(b);//this gives an error because let is block scoped and we are trying to access it outside the block.


let x = 100;
function fun(){
    console.log(x);
}
fun();// this works because x is declared in the global scope and we can access it inside the function.

function fun1(){
    let y = 200;
    console.log(x+y);
}
fun1();// this works because x is declared in the global scope and we can access it inside the function, and y is declared inside the function and we can access it inside the function.

function fun2(y){    
    console.log(y);
}
fun2(300);// this works because we are passing the value of y as an argument to the function and we can access it inside the function.