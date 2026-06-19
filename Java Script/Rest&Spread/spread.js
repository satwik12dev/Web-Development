// let arr = [1,2,3,4,5];
// console.log(...arr); // Spread Operator
// // Spread Operator can be used to create a new array by combining existing arrays or adding new elements to an existing array.
// let newArr = [...arr,6,7,8];
// console.log(newArr);

// let arr1 = [1,2,3];
// let copyArr = arr1; // Spread Operator to create a copy of an array
// copyArr.push(4);
// console.log(copyArr); 
// console.log(arr1); // Original array is also modified because copyArr is a reference to arr1


//shalow copy
// let arr2 = [1,2,3];
// let shallowCopyArr = [...arr2];
// shallowCopyArr.push(4);
// console.log(shallowCopyArr); // [1, 2, 3, 4]
// console.log(arr2); // Original array is not modified because shallowCopyArr is a new array created using the spread operator


//merging arrays
// let arr3 = [1,2,3];
// let arr4 = [4,5,6];
// let mergedArr = [...arr3,...arr4];
// console.log(mergedArr); // [1, 2, 3, 4, 5, 6]


//spread string into array of characters
// let str = "Hello";
// let arr = [...str]; // Spread Operator to convert a string into an array of characters
// console.log(arr); // ['H', 'e', 'l', 'l', 'o']


//function call
// let users = ["satwik", "kutta", "sanya"];
// function greet(user1, user2, user3)  {
//     console.log("Hello " + user1 + ", " + user2 + ", and " + user3 + "!");
// }
// greet(...users); // Spread Operator to pass array elements as individual arguments to a function
// greet(users); // Passing the entire array as a single argument to the function



// spread objects

// let obj = {
//     name:"satwik",
//     age:21,
//     passion:"coding",
//     city:"delhi"
// }
// let objcopy = {
//     ...obj,
//     age:22,
//     passion:"gaming",
//     lifestyle:"healthy",
// }; // Spread Operator to create a copy of an object
// objcopy.name = "sanya"; // Modifying the copy does not affect the original object
// console.log(obj);
// console.log(objcopy);


//merge two objects
let obj1 = {
    name:"satwik",
    age:21,
}

let obj2 = {
    passion:"coding",
    city:"delhi"
}

let mergedObj = {
    ...obj1,
    ...obj2,
};

console.log(mergedObj); // { name: 'sanya', age: 22 } // The properties of obj2 overwrite the properties of obj1 in the merged object