'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return (this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
    },

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20.00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
});

// Object Destructuring: extract name, openingHours, and categories into variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// replace the name and put new varibale name
// Destructuring with renaming:
// name -> restaurantName, openingHours -> hours, categories -> tags
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Assigning default values while destructuring:
// If restaurant.menu doesn't exist → default to []
// Rename starterMenu to starter and fallback to [] if missing
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating varibale : override value
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
// { a, b } = obj; // throw an error
// Because JavaScript thinks that {a, b} = obj is the start of a block, not a destructuring assignment.
//To fix this, you need to wrap the destructuring assignment in parentheses so JS knows you’re reassigning existing variables
({ a, b } = obj);
console.log(a, b);


// nested object
const {
    fri: { open, close }
} = openingHours;

console.log(open, close);

