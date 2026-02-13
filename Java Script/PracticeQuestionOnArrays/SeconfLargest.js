function second(arr){
    let max = arr[0];
    let secMax = -1;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            secMax = max;
            max = arr[i];
        }
        else if(arr[i] > secMax && arr[i] != max){
            secMax = arr[i];
        
        }
    }
    return secMax;
}

let arr = [1, 2, 3, 4, 5];
console.log(second(arr));