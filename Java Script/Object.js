const person = { //object literal
    name: "Satwik",
    age: 18,
    isStudent: true,
    isPassed: true
};

person.name = "Satwik Saxena";//reassigning value to object property
person.age = person.age + 1;//updating age property by adding 1
console.log(typeof person);//object
console.log(person.name);
console.log(person.age);



console.table(person);