function vowels(str){
    str = str.toLowerCase();
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
            count++;
        }
    }
    console.log(count);
    
}

vowels("AEIOU");

const countVowels = (str) => {
    str = str.toLowerCase();
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowels("AEIOU");



let arr = ["satwik","saxena","javascript","is","fun"];
arr.forEach((val,idx, arr) => {
    console.log(val.toString().toUpperCase(),idx);
});
