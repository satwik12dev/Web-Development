const car = {
    name:"BMW",
    price:800000,
    model:2026,
    age:15,
    details:function(){
        return (this.name+" "+this.price+" "+this.model);
    }
};

console.log(car.details());

car.valid = function(){
    return this.age+16;
};

console.log(car.age);
console.log(car.valid());

let x = this;
console.log(x);


function hello(){
    return this;
}
console.log(hello());
