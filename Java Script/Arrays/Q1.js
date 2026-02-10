let marks = [97,64,32,79,99,96,89,49];

let newmarks = marks.filter((val,idx) => {
    return val>=90;
});

console.log(newmarks);


let n = prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i);
}
console.log(arr);



let newarr = arr.reduce((acc,val) => {
    return acc+val;
});

console.log(newarr);

let newarr1 = arr.reduce((acc,val) => {
    return acc*val;
});
console.log(newarr1);