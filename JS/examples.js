//Example 1
let x = 10;
x = x + 1;
console.log(x);


// Example 2
let students = ["John", "Jane", "Jim", "Jill"];
console.log(students[students.length - 1]);

// Example 2.1
let courses = new Array("HTML", "CSS", "JavaScript", "React");
// Remove the last item
console.log(courses.pop());
// Add new items at the beginning
courses.unshift("Chemistry", "Physics");  
console.log(courses);

// find the index of an item
console.log(courses.indexOf("JavaScript"));

// remove an item by index
courses.splice(courses.indexOf("JavaScript"), 1);
console.log(courses);

// Example 3
let student = {
    name: "John",
    age: 20,
    city: "New York"
};
console.log(student.name);

// Example 4: Primitive Data Types in JavaScript

/*
JavaScript has 6 primitive data types:
1. Number: Represents both integer and floating point numbers
2. String: Represents textual data
3. Boolean: Represents logical values (true/false)
4. Undefined: Represents undefined value
5. Null: Represents null i.e. no value at all
6. Symbol: Represents unique identifiers (introduced in ES6)
*/

// Examples of each primitive type:

// Numbers - can be integers or decimals
let age = 25;
let price = 99.99;

// Strings - can use single or double quotes
let name = "John";
let message = 'Hello World';

// Booleans - only two possible values
let isStudent = true;
let isEmployed = false;

// Undefined - variable declared but not assigned
let undefinedVar;
// Null - intentional absence of any object value
let nullVar = null;
// Symbol - unique and immutable primitive value
let sym = Symbol("description");

// Example 5: Arrow Functions

// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => a + b;

// Arrow function with single parameter (parentheses optional)
const square = x => x * x;

// Arrow function with no parameters
const sayHello = () => "Hello!";

// Arrow function with multiple lines needs curly braces and return
const multiply = (a, b) => {
    let result = a * b;
    return result;
};

// Example usage
console.log(addArrow(5, 3));      // 8
console.log(square(4));           // 16
console.log(sayHello());          // Hello!
console.log(multiply(4, 5));      // 20

// Different ways to create arrow functions:

// 1. Basic arrow function with implicit return
const sum = (a, b) => a + b;

// 2. Arrow function with explicit return using curly braces
const subtract = (a, b) => {
    return a - b;
};

// 3. Arrow function with single parameter (parentheses optional)
const double = x => x * 2;
const triple = (x) => x * 3;

// 4. Arrow function with no parameters (requires parentheses)
const greet = () => "Hi there!";

// 5. Arrow function returning an object (requires parentheses)
const makeUser = (name, age) => ({ name: name, age: age });

// 6. Arrow function with multiple statements
const calculateTotal = (price, tax) => {
    const taxAmount = price * tax;
    const total = price + taxAmount;
    return total;
};

// 7. Arrow function as a callback
const numbers = [1, 2, 3];
numbers.map(num => num * 2);

// 8. Immediately Invoked Arrow Function Expression (IIAFE)
(() => {
    console.log("This runs immediately!");
})();


