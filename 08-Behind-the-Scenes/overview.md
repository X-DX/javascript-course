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

### JavaScript Engine

- A JavaScript engine is a program that interprets and executes JavaScript code.
  It’s part of your web browser (like Chrome or Firefox), or standalone (like Node.js uses one too)

- In simple terms:
  The engine takes human-readable JavaScript source code and turns it into low-level machine code that your CPU can execute efficiently.

- Examples of Popular JavaScript Engines
  Google Chrome / Node.js -> V8 -> C++
  Mozilla -> Firefox -> SpiderMonkey C++
  Safari -> JavaScriptCore (Nitro) -> C++
  Microsoft Edge (Legacy) -> Chakra -> C++

### JavaScript Engine Memory Architecture

┌──────────────────────────┐
│ Memory inside the Engine│
│ ┌────────────────────┐ │
│ │ ||||Call Stack|||| │ │ ← where code execution happens
│ └────────────────────┘ │
│ ┌────────────────────┐ │
│ │ |||||Heap||||||||| │ │ ← where objects and data live
│ └────────────────────┘ │
└──────────────────────────┘

1. The Call Stack: The Call Stack is a data structure (LIFO – Last In, First Out) that tracks the execution context of functions.

- Every time a function is called, a new stack frame (execution context) is pushed on top of the stack.
- When the function returns, its frame is popped off the stack.

-What’s Inside a Stack Frame?
A stack frame typically contains:

- Function’s local variables
- Parameters
- Reference to outer scope (lexical environment)
- The instruction pointer (where to return after the function finishes)

2. The Heap

- The Heap is a large, unstructured region in memory where objects, arrays, and functions are stored.
  Unlike the stack, the heap does not follow an order (not LIFO/FIFO).
  It’s more like a big “warehouse” where JS stores data that can grow dynamically.

- What Goes into the Heap?
  Objects
  Arrays
  Functions
  Closures
  Anything that’s referenced

### Compilation (Source Code → Compiler → Machine Code → CPU Executes)

- Compilation means translating the entire source code into machine code before the program runs.
  This translation is done by a compiler, which outputs a binary file (e.g., .exe, .out, etc.) that can run directly on the CPU.

### Interpretation

- Interpretation means executing the code line-by-line, translating and running on the fly.
  The interpreter directly reads the source code and executes each instruction without producing a standalone binary.

### Just-In-Time (JIT) Compilation

-JIT compilation is a hybrid approach that combines interpretation and compilation to achieve both:
fast startup (like interpretation)
fast execution (like compilation)
JIT compiles parts of the code while the program is running, hence the name “Just In Time”.

### How JIT Works (Step-by-Step)

Parser reads JS code → creates an AST (Abstract Syntax Tree).
Interpreter converts AST → bytecode (a low-level, portable code).
Profiler monitors which functions run frequently (called hot functions).
JIT Compiler converts only the hot parts of the code into optimized machine code.
If assumptions break (e.g., variable types change), the engine de-optimizes and falls back to the interpreter.

### JavaScript Runtime Environment

- A JavaScript Runtime is everything needed to execute JavaScript code, including the engine itself and extra components that the engine alone doesn’t provide — like the Web APIs, event loop, and callback queue.

  ## Components of the JavaScript Runtime

  - A complete JavaScript runtime (like Browser Runtime or Node.js Runtime) has 5 major parts:
    ┌────────────────────────────────────────────┐
    │ JavaScript Runtime Environment │
    ├────────────────────────────────────────────┤
    │ 1️⃣ JavaScript Engine (e.g., V8)
    │ 2️⃣ Memory (Call Stack + Heap)
    │ 3️⃣ Web APIs / Node APIs
    │ 4️⃣ Callback / Task Queue
    │ 5️⃣ Event Loop
    └────────────────────────────────────────────┘

- 1. JavaScript Engine (e.g., V8)
     We already know this part — it’s responsible for parsing, interpreting, compiling, and executing JS code.
     - Handles the Call Stack and Heap
     - Runs synchronous JS code line by line
     - Optimizes performance using JIT Compilation

- 2.  Memory Components
      🧩 Call Stack
      Stores function execution contexts (LIFO)
      Executes one function at a time → JS is single-threaded

          🧩 Heap

      Stores objects, arrays, and functions
      Managed by garbage collection

- 3. Web APIs / Node APIs
     The engine itself doesn’t know about things like:
     setTimeout()
     fetch()
     DOM manipulation
     console.log()
     File system (in Node)
     These features are provided by the runtime environment, not the engine.

- 4. Callback Queue (or Task Queue)
     When asynchronous operations (like timers or network requests) complete, their callback functions don’t go directly into the call stack.
     Instead, they are placed in a queue, waiting for the event loop to push them back to the stack when the stack is empty.

- 5. Event Loop
     - The event loop is the “conductor” that keeps everything running smoothly.
     - The event loop continuously checks the Call Stack and the Callback Queue.
       If the call stack is empty, it pushes the next callback from the queue into the stack for execution.

### Scope in js

1. Scope
   Scope defines where a variable is accessible in your code.
   It determines the visibility and lifetime of variables.

2. Types of Scope in JS
   Global Scope → Accessible anywhere in the code.
   Function Scope → Variables declared with var inside a function are only accessible within that function.
   Block Scope (ES6) → Variables declared with let or const are accessible only inside the block { }.

3. Scoping
   The process by which JavaScript determines the current context of execution and where variables can be accessed from.

4. Lexical Scoping
   Definition: Inner functions can access variables defined in their outer (parent) functions.
   It’s based on where the function is defined, not where it’s called.

5. Scope of a Variable
   var → Function-scoped, hoisted to the top of the function.
   let / const → Block-scoped, not accessible before declaration (Temporal Dead Zone).

6. Scope Chain
   The scope chain is the mechanism JS uses to resolve variables.
   When you access a variable, JavaScript looks for it in the current scope first, then moves up the chain(outer scopes) until it finds it — or throws a ReferenceError.

7. scope Chain vs Call Stack
