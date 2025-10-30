///////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

///////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

///////////////////////////
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators

// ************ Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName2 = 'Jonas';
const lastName2 = 'Schmedtmann';
console.log(firstName2 + ' ' + lastName2);

// *********** Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// ********** Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
// Operator precedence defines the priority of operators in an expression.
// Higher-precedence operators are evaluated before lower-precedence ones
// When operators have the same precedence, associativity decides the direction of evaluation: Left-to-right (Left associative) and Right-to-left (Right associative)
const now2 = 2037;
const ageJonas2 = now2 - 1991;
const ageSarah2 = now2 - 2018;

console.log(now2 - 1991 > now2 - 2018);

let x2, y;
x2 = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x2, y);

const averageAge2 = (ageJonas2 + ageSarah2) / 2;
console.log(ageJonas2, ageSarah2, averageAge2);

////////////////////////////////////
// Strings and Template Literals
const firstName3 = 'Jonas';
const job3 = 'teacher';
const birthYear3 = 1991;
const year3 = 2037;

const jonas = "I'm " + firstName3 + ', a ' + (year3 - birthYear3) + ' year old ' + job3 + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName3}, a ${year3 - birthYear3} year old ${job3}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\ multiple \n\ lines');

console.log(`String multiple lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
const age4 = 15;

if (age4 >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age4;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear4 = 2012;

let century;
if (birthYear4 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

////////////////////////////////////
// Type Conversion and Coercion

// type conversion : Type Conversion means changing a value from one data type to another.
// Explicit (Type Conversion) : You manually convert a value using functions like Number(), String(), Boolean()
// Implicit (Type Coercion) JS automatically converts values during operations

// Type Conversion (Explicit Conversion)
//This is when you intentionally convert a value from one type to another using built-in functions like Number(), String(), or Boolean().
const inputYear = '1991';

// Convert string to number
console.log(Number(inputYear), inputYear);
// → 1991 '1991'
// The first is a number, second is still a string

// Perform arithmetic after conversion
console.log(Number(inputYear) + 18);
// → 2009

// Try converting a non-numeric string
console.log(Number('Jonas'));
// → NaN (Not a Number, but of type 'number')

// Check type of NaN
console.log(typeof NaN);
// → 'number' (weird but true!)

// Convert number to string
console.log(String(23), 23);
// → '23' 23


// Type Coercion (Implicit Conversion)
// This is when JavaScript automatically converts types behind the scenes during an operation.
console.log('I am ' + 23 + ' years old');
// → 'I am 23 years old'
// '+' operator forces number → string, and concatenates

console.log('23' - '10' - 3);
// → 10
// '-' operator forces both strings → numbers

console.log('23' / '2');
// → 11.5
// '/' also forces numeric conversion

let n = '1' + 1; // '+' → string concatenation
// n = '11'
n = n - 1;       // '-' → numeric operation → 11 - 1
console.log(n);  // → 10

// Truthy and Falsy Values
// JS has 5 falsy values:
// 0, '' (empty string), undefined, null, NaN
// Everything else is truthy (evaluates to true in boolean context).
console.log(Boolean(0));          // false
console.log(Boolean(undefined));  // false
console.log(Boolean('Jonas'));    // true
console.log(Boolean({}));         // true
console.log(Boolean(''));         // false

// Let’s use this in conditionals:

const money = 100;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}
// → truthy (100) → "Don't spend it all ;)"

let height = 0;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
// → falsy (0) → 'Height is UNDEFINED'

// Equality Operators (== vs ===)
// === → Strict Equality
// No type coercion — both value and type must match.

// == → Loose Equality
// Allows type coercion — JS converts one side to match the other.
const age5 = '18';

if (age5 === 18) console.log('You just became an adult :D (strict)');
// → false (string !== number)

if (age5 == 18) console.log('You just became an adult :D (loose)');
// → true ('18' converted to number)

// Now, let’s check a user input example:
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

// Not equal operator
if (favourite !== 23) console.log('Why not 23?');



////////////////////////////////////
// Logical Operators
// Logical operators work with boolean values, but also perform short-circuiting (return the actual value, not necessarily a boolean).
// && -> AND -> true && false → false and ! -> NOT -> !true → false

const hasDriversLicense = true;  // A
const hasGoodVision = true;      // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense);                 // false

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);
// → false (because isTired = false)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
// → 'Sarah is able to drive!'


////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
// Expression → produces a value
// Statement → performs an action
3 + 4 // Expression
1991 // Expression
true && false && !false // Expression

if (23 > 10) {  // Statement
    const str = '23 is bigger';
}

const me = 'Jonas'; // Statement
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age6 = 23;
// age6 >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age6 >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age6 >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age6 >= 18 ? 'wine 🍷' : 'water 💧'}`);