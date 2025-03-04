# Primer

## Values

### Primitive

- Numbers
    - No distinction between floats and integers -> 42, 3.14

- Strings
    - Collection of character that goes together, enclosed by single ('), double ("), and template literal (` `) -> "Hello, friend."

- Boolean
    -  true / false

- Empty Values
    - Null -> a deliberate assignment indicating the absence of a value.
    - Undefined -> a variable declared but not assigned a value.

### Non-Primitive

- Arrays
    - A collection of Ordered list indexed numerically. -> [1, 2, 3] -> Array[1] // 2

- Objects
    - Key : Value paris where keys are typically strings. -> { name: "Kyle"} -> object.key // "value"

## Operations

- Arithmetic operations
    - +, -, *, / -> work on numbers

- String concatenation
    - + -> join strings -> "Hello + " World" // "Hello World"

- Boolean operators (1)
    - Single operand
    - ! -> logical NOT -> negates a boolean value ->  !false // true
    - || -> logical OR -> at least one must be true -> true || false // true && -> logical AND -> both must be true -> true && true // true

- Comparison operators
    - == -> loose equality -> compares values with type conversion -> "3" == 3 // true
    - === -> strict equality -> requires exact type match -> "3" == 3 // false
    - (>, <, >=, =<)

## Types
- typeof -> unary operator -> return the type of the value

## Variables
- Store values in memory, acting as named references.
- var, let, const -> variable declarations
    - let and const -> block-scoped.
    - var -> function-scoped.
- Operators only can be use with variables.
    - =, ++, --, +=
    - Operate then Reassigned the value.

## Expresssions vs. Statements

- Statements -> perform actions but do not return a value, statements end with semicolons, end of a sentence.
    - var age = 39;
    - age = 1 + (age * 2);
- Expressions -> produce a vallue
    - var age = 39;
        - var age -> assignment expression
    - age = 1 + (age * 2); -> total of 6 expressions
        - 2 -> literal expression
        - age
        - (age * 2)
        - 1
        - 1 + 78
        - age = 79
    - Expressions can be part of statements

## Decisions
- if statement - if () {...} -> execute code only if a condiditon evaluates to true.
- else statement if () {...} else {...} -> execute code only if statement is false.

## Loops
- for loop -> iterate a fixed number of times.
    - for (var i = 0; i < students.length; i++) {}
- for of loops -> loops iterate over iterable objects (arrays).
    - for (let student of students) {}
- while loops -> run while a conition remains true.
    - while (students.length > 0) {}
