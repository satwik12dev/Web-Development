const f = ["Apple","Mango","Banana"];
let [f1,f2,f3]=f;
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f);

let [f4,,f6]= f;//Mango skip
console.log(f4);
console.log(f6);

const b = ["a","b","c","d"];
let {[0]:a1, [1]:a2, [2]:a3} = b;
console.log(a1+a2+a3);
console.log(b);