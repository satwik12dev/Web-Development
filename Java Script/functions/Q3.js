let arr = [1,2,3,4,5];

let calSquare = (num) => num*num;

arr.forEach((calSquare));

arr.forEach((val,idx) => {
    console.log(idx, val*val);
});

