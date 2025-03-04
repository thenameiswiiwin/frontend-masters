var teacher = "Kyle"
var twitterHandle = "theGetify"
var age = 39

function whoAmI(myName, myNickname, myAge) {
    console.log(`
        Hi, I'm ${myName} (aka ${myNickname}), and I'm ${myAge}.
    `)
}

whoAmI(teacher, twitterHandle, age)

// - Operators

3 + 4 // 7
43 - 1 // 42

"Kyle" + " Simpson" // "Kyle Simpson"

!false // true

3.0 == 3 // true

4 < 3 // false

true && false // false

// - Typeof

typeof 42 // "number"

typeof "Kyle" // "string"

typeof true // "boolean"

typeof { age: 39 } // "object"

typeof null // "object"
typeof undefined // "undefined"
typeof [1, 2, 3] // "object"

// - Variables

var name = "Kyle Simpson"

var age
age = 39

var friends = ["Jenny", "John", "David"]

console.log(friends.length) // 3
console.log(friends[1]) // "John"

var age = 39

age++ // 40
age += 2 // 42

age // 42

// Decisions
if (age >= 21) {
    console.log("You can drink!")
} else {
    console.log("You can't drink!")
}

// Loops
var students = ["Kyle", "John", "David"]

function greetStudent(student) {
    console.log(`Hi, ${student}!`)
}

for (var i = 0; i < students.length; i++) {
    greetStudent(students[i])
} // Hi, Kyle! Hi, John! Hi, David!

for (let student of students) {
    greetStudent(student)
} // Hi, Kyle! Hi, John! Hi, David!

while (students.length > 0) {
    greetStudent(students.shift())
} // Hi, Kyle! Hi, John! Hi, David!
