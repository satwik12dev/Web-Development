const person = new Object({
    name:"Satwik",
    age:18,
    eye:"Black"
});

console.log(person.name+" "+person.age+" "+person.eye);


for(let x in person){
    console.log(person[x]+" ");
}

const arr =  Object.values(person);
const text = arr.toString();
console.log(text);

const fruits ={Banana:50,Oranges:60,Apple:120};
let t ="";
for(let [fruit,value] of Object.entries(fruits)){
    t += fruit +" "+value+" ";
}
console.log(t);

let text1 = JSON.stringify(person);
console.log(text1);


