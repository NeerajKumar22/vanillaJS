# Objects In JavaScript

## Everything is an object

| PRIMITIVES | EVERYTHING ELSE...                    |
| ---------- | ------------------------------------- |
| Number     | Array                                 |
| String     | Function                              |
| Boolean    | Objects                               |
| Undefined  | Dates                                 |
| Null       | Wrapper for Number, Strings, Booleans |

## OBJECT-ORIENTED PROGRAMMING

- Objects interacting with one another through methods and properties.
- Used to store data, structure application into modules and keeping code clean.

## INHERITANCE

- One object based on another object.
- One object get access of another object properties and methods.

** JavaScript is a prototype based language.
** Each and every JavaScript object has a prototype property which makes inheritance possible.

## SUMMARY

- :+1: Every JavaScript object has a **ProtoType Property**, which makes inheritance possible in JavaScript.

- :+1: The prototype property of an objects is where we put methods and properties that we want **Other objects to inherit**.

- :+1: The Constructor's prototype property is **NOT** the prototype of the Constructor itself, it is the prototype of **ALL** instance that are created though it.

- :+1: When a certain method (or property) is called, the search stars in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method found: **Prototype Chain**.
