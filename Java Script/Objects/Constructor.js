function detail(first,last,age){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.nationality = "India"
};

const father = new detail("Ashish","Saxena",43);
console.log(father);

father.nationality = "UP";
console.log(father);


detail.prototype.language = "HINDI";

console.log(father.language);


function person(First, Last, age){
    this.firstName = First;
    this.lastname = Last
    this.age = age;

    this.name = function(){
        return (this.firstName+" "+this.lastname);
    }
};

const self = new person("Satwik Sxaena",18);

console.log(self);
console.log(self.name());

person.prototype.changeName = function(name){
    this.lastname = name;
}

self.changeName("Sanya");
console.log(self);

