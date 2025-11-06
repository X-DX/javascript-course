'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     }
// };

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // // ES6 enhanced object literals
    // openingHours,

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', address }) {
    //     console.log(
    //         `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    //     );
    // }
}

// Example array
const arr = [2, 3, 4];

// Without using destructuring:
// We manually access each value by indexing the array.
// 'arr[0]' means "give me the first element".
const a = arr[0];
const b = arr[1];
const c = arr[2];
// console.log(a, b, c);

// Using **array destructuring**:

// This syntax automatically pulls values out of the array
// and assigns them to variables in order.
// The first item in 'arr' goes into 'x'
// the second into 'y'
// the third into 'z'
const [x, y, z] = arr;
console.log(x, y, z);

// work from restaurant object : access 1st and 3rd element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// trick 1
// swap the categories
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// swap : doing same thing without using temp
[main, secondary] = [secondary, main]
console.log(main, secondary);

// ***************

// call the order function in normal way
console.log(restaurant.order(2, 0));

// lets do the same thing using de-structure
// Recive 2 return values from a function
const [starter, mainc] = restaurant.order(2, 0);
console.log(starter, mainc);

// nested array
const nested = [2, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

// Here we're destructuring an array with only 2 values
const [p, q, r] = [8, 9];
// p gets the first value: 8
// q gets the second value: 9
// r tries to get the third value, but the array doesn't have a third element
// so r becomes undefined
console.log(p, q, r);

// Destructuring with default values:
// If a value is missing in the array, the default value is used instead.
const [p2 = 1, q2 = 1, r2 = 1] = [9];
// p2 gets 9, because the first element exists
// q2 gets default 1, because second element is missing
// r2 also gets default 1, because third element is missing
console.log(p2, q2, r2);


