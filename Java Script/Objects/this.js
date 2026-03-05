const person = {
    name : "Satwik",
    age : 18,
    full : function(){
        return (this.name+" "+this.age);
    }
};

const detail = new Object({
    name:"Sanya",
    age:21,
    full:function(){
        return (this.name+" "+this.age);
    }
});

console.log(person.full());

console.log(detail.full());

let x = this;
console.log(x);

function hello(){
    return this;
}
console.log(hello());
