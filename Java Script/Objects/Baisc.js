const obj = {
    name:"Satwik",
    age:20
}

console.log(obj.name);
console.log(obj.age);

console.log(obj["name"]);
console.log(obj["age"]);

const car = {
    n:"bmw",
    price:230000,
    car1 : {
        n:"Honda",
        p:15000,
    }
}

console.log(car.n);
console.log(car.car1.n);


const myArray = Object.values(car);

// Stringify the Array
let text = myArray.toString();

console.log(text);


let text2 = JSON.stringify(car);
console.log(text2);
