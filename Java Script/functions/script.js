function myfunction(){
    console.log("Hello I am satwik.");
    console.log("I am learning JS.");
}

// myfunction();


function add(msg){//parametersparameters are the variables that are used in the function definition. They are placeholders for the values that will be passed to the function when it is called.
    console.log(msg);
}

add("Hello I am satwik.");// arguments
add("I am learning JS.");
add("I am loving it.");


function add2(a,b){
    console.log(a+b);
}
add2(10,20);
add2("satwik","saxena");


function add3(a,b){
    console.log("It will execute");
    
    return a+b;// return statement is used to return a value from a function. It is used to exit from a function and return a value to the caller.
    console.log("This will not be executed.");// this line will not be executed because the function will exit after the return statement.
}
let sum = add3(10,20);
console.log(sum);


function mul(a,b){
    return a*b;
}
let product = mul(10,20);
console.log(product);

const print = () => console.log("Hello I am satwik.");// arrow function is a shorter syntax for writing functions in JavaScript. It is also known as fat arrow function.
print();


const arrowsum = (a,b) => {// arrow function is a shorter syntax for writing functions in JavaScript. It is also known as fat arrow function.
    return a+b;
}
let sum2 = arrowsum(10,20);
console.log(sum2);


const arrowmul = (a,b) => a*b;// if the function body contains only one statement, we can omit the curly braces and the return keyword.
let product2 = arrowmul(10,20);
console.log(product2);

print();