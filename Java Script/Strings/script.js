let str = "Satwik";
let str2 = 'Satwik';

console.log(str);
console.log(str2);

console.log(str.length);
console.log(str2.length);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);


let str3 = `Hello ${str}, welcome to JavaScript!`;
console.log(str3);


let obj = {
    name: "Satwik",
    age: 20
};
console.log(obj.name);
console.log(obj.age);

let str4 = `Name: ${obj.name} \nAge: ${obj.age}`;
console.log(str4);


let name = "Satwik";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);



let newStr2 = "        Stawik      Saxena      Java Dev      "
console.log(newStr2.trim());
console.log(newStr2.trimStart());
console.log(newStr2.trimEnd());


console.log(name.slice(0,5));


console.log(name.concat(newStr));

console.log(str.replace("S","H"));

console.log(str.charAt(5));


