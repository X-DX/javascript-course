'use strict';

///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

///////////////////////////////////////
// Dot vs Bracket Notation
const jonas2 = {
    firstName: 'Jonas',
    lastName: 'Roy',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas2);

console.log(jonas2.lastName);
console.log(jonas2['firstName']);

const nameKey = 'Name';
console.log(jonas2['first' + nameKey]);
console.log(jonas2['last' + nameKey]);
// console.log(jonas2.'last' + nameKey);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// if (jonas2[interestedIn]) {
//     console.log(jonas2[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// add in object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas2.firstName} has ${jonas2.friends.length} friends, and his best friend is called ${jonas2.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas3 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas3.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas3.calcAge());

console.log(jonas3.age);
console.log(jonas3.age);
console.log(jonas3.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas3.getSummary());

