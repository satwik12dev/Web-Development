function removeduplictaes(arr){
    let j = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] != arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
    return arr.slice(0, j+1);
}
let arr = [2,2, 2,2,2,2];
console.log(removeduplictaes(arr)); // Output: [1, 2, 3, 4, 5]