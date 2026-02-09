// // for(let i =0;i<5;i++){
// //     console.log("Hello world");
    
// // }
// let sum = 0;
// for(let i = 1;i<=10;i++){
//     sum += i;
// }
// console.log(sum);


// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let i1 =20;
// do{
//     console.log(i1);
//     i1--;
// }while(i1>0);


// let str = "Hello";
// for(let i of str){
//     console.log(i);
// }

// let student = {
//     name: "Satwik",
//     age: 20,
//     grade: "A"
// };
// for(let key in student){
//     console.log(key);
    
//     console.log(key + ": " + student[key]);
// }


for(let i =0 ;i<100;i++){
    if(i%2==0){
        console.log("Number is even");

    }
}


//Question 2
let gameNum = 25;
let guess = 0;
while(guess !== gameNum){
    guess = parseInt(prompt("Guess the number between 1 and 100:"));
}
if(guess === gameNum){
    console.log("Congratulations! You guessed the number.");
}