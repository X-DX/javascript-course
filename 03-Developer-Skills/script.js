// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN to solve problems

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curtemp = temps[i];

        if (curtemp > max) max = curtemp;
        if (curtemp < min) min = curtemp;
    }
    console.log(max, min);
    return max - min
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);



// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curtemp = temps[i];

        if (curtemp > max) max = curtemp;
        if (curtemp < min) min = curtemp;
    }
    console.log(max, min);
    return max - min
}
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

///////////////////////////////////////
// 🔹 PART 1: Debugging with the Console and Breakpoints

const measureKelvin = function () {
    // STEP 1: Create a measurement object
    const measurement = {
        type: 'temp', // Describes the type of data
        unit: 'celsius', // Unit of the temperature
        // value: Number(prompt('Degrees celsius:')), // Old code (would ask user input)
        value: 10, // FIXED: Hardcoded for debugging
    }

    // STEP 2: Log the measurement table in a clean way
    console.table(measurement); // Displays object as a table (easy to debug)

    // STEP 3: Convert Celsius to Kelvin
    const kelvin = measurement.value + 273;
    return kelvin; // Return the Kelvin value
}
// STEP 4: Run the function and display the result
console.log(measureKelvin());

// console.table() -> Displays object data in a neat table for easy inspection
// console.log(), console.warn(), console.error() -> Help debug with different levels of output
// prompt() -> Would normally ask the user for input, but is commented out for simplicity
// Purpose -> This section teaches how to inspect data and fix values when debugging

///////////////////////////////////////
// 🔹 PART 2: Debugging Using a Debugger or Logical Check

const calcTempAmplitudeBug = function (t1, t2) {
    // STEP 1: Combine two temperature arrays
    const temps = t1.concat(t2);
    console.log(temps); // See the combined array in console

    // ❌ BUG: Starting max and min at 0 causes incorrect results
    let max = 0;
    let min = 0;

    // STEP 2: Loop through all temperature readings
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        // Skip non-number values
        if (typeof curTemp !== 'number') continue;

        // Find maximum temperature
        if (curTemp > max) max = curTemp;

        // Find minimum temperature
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min); // Show current max and min values

    // STEP 3: Calculate and return the amplitude (max - min)
    return max - min;
};

// STEP 4: Call the function with sample arrays
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// STEP 5: Output the result
console.log(amplitudeBug);


// Bug in Logic	-> max and min are both initialized to 0. If all temperatures are above 0, min will stay 0, which is wrong.
// Fix	-> Initialize max and min to the first number in the array instead of 0.
// Purpose	-> Demonstrates how to find and fix logical bugs using console.log() and the debugger tool in DevTools.

// Here’s the corrected version
const calcTempAmplitudecorrected = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    // ✅ FIX: Start with first temperature as baseline
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amplitudecorrected = calcTempAmplitudecorrected([3, 5, 1], [9, 4, 5]);
console.log(amplitudecorrected); // Correct output: 8
