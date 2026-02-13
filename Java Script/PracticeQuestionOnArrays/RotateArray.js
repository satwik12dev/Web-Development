function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    let rotated = arr.slice(-k).concat(arr.slice(0, -k));
    return rotated;
}
let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]


function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArrayInPlace(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

let arr2 = [1, 2, 3, 4, 5];
console.log(rotateArrayInPlace(arr2, k)); // Output: [4, 5, 1, 2, 3]