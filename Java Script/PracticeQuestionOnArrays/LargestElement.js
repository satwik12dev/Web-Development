function largest(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max);
}

let arr = [5,6,8,10,23];
largest(arr);