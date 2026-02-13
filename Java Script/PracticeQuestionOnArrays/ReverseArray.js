function reverse(arr){
    for(let i = arr.length-1;i>=0;i--){
        console.log(arr[i]+" ");
    }
}

let arr = [1, 2, 3, 4, 5];
reverse(arr);


function rev2(arr){
    let start = 0; 
    let end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
let arr2 = [1, 2, 3, 4, 5];
console.log(rev2(arr2));