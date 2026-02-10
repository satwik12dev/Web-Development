let arr = ["satwik","saxena","javascript","is","fun"];

let newarr = arr.map((val,idx) => {
    return val;
});

console.log(newarr);


let num = [1,2,3,456,5];
num.map((val,idx) => {
    console.log(val,idx);
});

let newnum= num.filter((val,idx) => {
    return val%2==0;
});

console.log(newnum);


let red = num.reduce((acc,val) => {
    return acc+val;
});

console.log(red);1

let red2 = num.reduce((acc,val) => {
    return acc>val?acc:val;
});
console.log(red2);
