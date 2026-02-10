let num = prompt("Enter a number:");
if(num%5==0){
    console.log("The number is divisible by 5");
}else{
    console.log("The number is not divisible by 5");
}


let grade = prompt("Enter your grade:");
if(grade >= 90){
    console.log("You got an A");
}else if(grade >= 80){
    console.log("You got a B");
}
else if(grade >= 70){
    console.log("You got a C");
}
else if(grade >= 60){
    console.log("You got a D");
}
else{
    console.log("You got an F");
}