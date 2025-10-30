
// 'use strict' is a directive that enables strict mode in JavaScript, which enforces stricter parsing and error handling rules. It helps catch common coding mistakes and "unsafe" actions.
'use strict';

// Customer information
let hasEnoughMoney = false;
const pizzaPrice = 15;

// Wallet amount
const walletMoney = 20;

// Check if customer can afford pizza
if (walletMoney >= pizzaPrice) {
    hasEnoughMoney = true;
}

// Process order
if (hasEnoughMoney) {
    console.log('✅ Pizza ordered successfully! Enjoy your meal! 🍕');
    console.log(`💰 Change: $${walletMoney - pizzaPrice}`);
} else {
    console.log('❌ Not enough money for pizza! 💸');
}

///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
// Calling, running, and invoking a function in JavaScript all mean the same thing — executing the code inside a function by using its name followed by parentheses (e.g., myFunction()); it tells JavaScript to perform the actions defined in that function.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
// Function Declarations are functions defined with the function keyword and are hoisted, meaning they can be called before their definition.
// ✅ Function Declaration
function greet() {
    console.log("Hello from a function declaration!");
}
greet(); // ✅ Works even if called before or after definition (hoisted)

// *********

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
// Function Expressions assign a function to a variable and are not hoisted, so they can only be called after they are defined.
// ❌ Function Expression
const sayHi = function () {
    console.log("Hello from a function expression!");
};
sayHi(); // ✅ Works only after definition (not hoisted)

// ***********

const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions
// Arrow functions are a shorter way to write function expressions in JavaScript, introduced in ES6 — they don’t have their own this, arguments, or prototype

// Regular function expression
const add = function (a, b) {
    return a + b;
};

// ✅ Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // Output: 8

// **************

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

///////////////////////////////////////
// Functions Calling Other Functions
// Functions calling other functions means one function executes another function inside its body to reuse code or perform a subtask.
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions
// Reviewing functions means checking how a function is written and used — ensuring it has a clear purpose, proper naming, correct parameters, returns the right values, and follows best coding practices for readability and reusability.
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement2 = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge4 = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age11 = calcAge4(years[0]);
const age22 = calcAge4(years[1]);
const age33 = calcAge4(years[years.length - 1]);
console.log(age11, age22, age33);

const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[years.length - 1])];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

