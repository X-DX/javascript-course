### 1. High-level

Meaning: You don’t manage low-level details like memory, CPU registers, or pointers (unlike C or C++).
Why: JavaScript abstracts these complexities so you can focus on logic, not the hardware.
Example:
let x = 10; // you don't allocate or free memory for 'x' manually

The JS engine handles memory management, data types, and garbage collection for you.

### 2. Garbage Collected

Meaning: JavaScript automatically frees memory that is no longer in use.
Why: Prevents memory leaks by removing data that’s no longer referenced.
Example:

function create() {
let obj = { name: "test" };
}
create(); // after function ends, 'obj' is no longer reachable → garbage collected

You don’t have to call free() or delete as in C or C++.

### 3. Interpreted or Just-in-Time (JIT) Compiled

Meaning: Historically, JS was interpreted (executed line by line by the browser).
Modern engines (like V8, SpiderMonkey, Chakra) now JIT compile JS — they convert frequently used code into machine code on the fly for better performance.

Example Flow:

- You write JS code.
- The engine parses it into bytecode.
- The interpreter runs it immediately.
- Hot (repeated) code paths are JIT compiled to native machine code for speed.

### 4. Multi-paradigm

Meaning: JavaScript supports several programming styles:
Procedural (step-by-step logic)
Object-oriented (using objects & prototypes)
Functional (functions as values)

Example:
// Procedural
let total = 0;
for (let i = 0; i < 5; i++) total += i;

// Object-Oriented
const person = { name: "Alice", greet() { console.log("Hi " + this.name); } };

// Functional
const numbers = [1, 2, 3];
const squared = numbers.map(n => n \* n);

### 5. Prototype-based Object Oriented

Meaning: Instead of classes (like in Java or C++), JavaScript uses prototypes — objects that serve as templates for other objects.
Every object can inherit from another via its prototype chain.

Example:
const animal = { eat() { console.log("eating"); } };
const dog = Object.create(animal);
dog.bark = () => console.log("woof");
dog.eat(); // inherited from prototype

Modern JS added class syntax (ES6), but it’s syntactic sugar over the prototype system.

### 6. First-class Functions

Meaning: Functions in JS are first-class citizens, meaning they can:
Be stored in variables,
Passed as arguments,
Returned from other functions.

Example:
function greet(name) { return "Hello " + name; }
function log(fn) { console.log(fn("Bob")); }
log(greet); // pass function as argument

→ This enables callbacks, closures, higher-order functions, and functional programming patterns.

### 7. Dynamic

Meaning: JavaScript is dynamically typed — variable types are determined at runtime, not compile time.
Example:
let x = 10; // number
x = "hello"; // now a string, no error

There’s no need to declare variable types explicitly (though TypeScript adds that capability).

### 8. Single-threaded

Meaning: JavaScript runs on one main thread (the “call stack”) — only one piece of code executes at a time.
Why: Simpler model, avoids race conditions and complex locking.
BUT: This doesn’t mean it’s slow — it uses asynchronous non-blocking mechanisms (next point).

### 9. Non-blocking Event Loop

Meaning: Even though it’s single-threaded, JS can handle concurrent operations (like network requests, timers, or file reads) through an event loop.
How: Time-consuming tasks are offloaded to the browser or Node.js runtime.
When finished, they’re queued back to JS via callbacks, promises, or async/await.

Example:
console.log("Start");
setTimeout(() => console.log("Async task done"), 1000);
console.log("End");

output:
Start
End
Async task done

→ The event loop ensures non-blocking behavior.
