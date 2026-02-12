let a = [1,2,3,4,5];
let b = [6,7,8,9,10];
console.log(typeof a);

//Accessing elements of an array
console.log("First element: "+a[0]);// this will give us the first element of the array.
console.log("Last element: "+a[4]);

//Modifying elements of an array
console.log("Original array a: "+a);
a[0] = 10;
console.log("Modified array a: "+a);
b[4] = 20;
console.log("Modified array b: "+b);

//adding elements to an array
a.push(6);
console.log("Array a after adding an element: "+a);
b.unshift(0);
console.log("Array b after adding an element at the beginning: "+b);


//removing elements from an array
a.pop();
console.log("Array a after removing the last element: "+a);
a.shift();
console.log("Array a after removing the first element: "+a);
a.splice(2,2);// this will remove the element at index 2 and the next element.
console.log("Array a after splicing: "+a);

//length of an array
console.log("Length of array a: "+a.length);
console.log("Length of array b: "+b.length);

//increase and decreaze the size of an array
a.length = 10;
console.log("Array a after increasing the size: "+a);
a.length = 3;
console.log("Array a after decreasing the size: "+a);

//concatenation of two arrays
let c = a.concat(b);
console.log("Concatenated array: "+c);

//array to string
let str = c.toString();
console.log("Array to string: "+str);

//string to array
let str1 = "Hello, World!";
let arr = str1.split(", ");
console.log("String to array: "+arr);

//type of an array
console.log("Type of array a: "+typeof a);
console.log("Type of array b: "+typeof b);

//recognizing an array
console.log("Is a an array? "+Array.isArray(a));
console.log("Is b an array? "+Array.isArray(b));

//instance of an array
console.log("Is a an instance of Array? "+(a instanceof Array));
console.log("Is b an instance of Array? "+(b instanceof Array));


//common errors
const d = [5];
const e = new Array(5);
console.log("Array d: "+d);
console.log("Array e: "+e);
// this is a common error because we are trying to create an array of size 5 using the Array constructor, but it creates an array with one element which is 5.