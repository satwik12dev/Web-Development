let flag = false;;
function linearSearch(arr,tar){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==tar){
            flag=true;
        }
    }
    if(flag==true){
        console.log("Element found!");
    }else{
        console.log("Element not found!");
        
    }
}

let arr = [8,9,6,3,2,0,5,6];
let tar = 5;
linearSearch(arr,tar);