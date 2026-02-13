function genSubArrays(arr) {
    let subArrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArrays.push(arr.slice(i, j + 1));
        }
    }
    return subArrays;
}   
let arr = [1, 2, 3];
console.log(genSubArrays(arr)); 