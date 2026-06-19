function greet(name) {
    console.log("Hello, " + name + "!");
}
function processUserInput(callback) {
    var name = "Alice";
    callback(name);
}
console.log(processUserInput(name));
