// x = 10
// y = 5
// x + y = 15
const firstNumber = 5
const secondNumber = 10

// addition
console.log("add numbers", firstNumber + secondNumber)

// subtraction
console.log("subtract numbers", firstNumber - secondNumber)

// multiplication
console.log("multiply numbers", firstNumber * secondNumber)

// division
console.log("divide numbers", firstNumber / secondNumber)

// exponent
console.log("exponent of numbers", firstNumber ** secondNumber)

// modulus
console.log("modulus of numbers", firstNumber % secondNumber)

// experiments
// console.log(0 / 0)
// console.log(15 / 0)
// console.log(50 + "abc")
// console.log(50 - "abc")
// console.log("abc" + "def")
// console.log("abc" * 5)
// console.log("abc".repeat(5))
// console.log(1e309)
// console.log(Infinity * 4)
// console.log(Infinity * Infinity)
// console.log(Infinity - Infinity)
// console.log(Infinity + Infinity)

// increment/decrement
let initialNumber = 3

initialNumber++
console.log(initialNumber)

initialNumber++
console.log(initialNumber)

initialNumber--
console.log(initialNumber)

initialNumber--
console.log(initialNumber)

// += operator
let myScore = 75
console.log("my score is", myScore)

myScore += 15
console.log("my score is now", myScore)

myScore -= 10
console.log("my score finally is", myScore)

myScore *= 2
console.log("myScore *=", myScore)

myScore /= 20
console.log("myScore /=", myScore)

myScore **= 2
console.log("myScore **=", myScore)

myScore %= 6
console.log("myScore %=", myScore)

// comparison operators
const x = 5
const y = 4

// equality
console.log("x === y:", x === y)

// inequality
console.log("x !== y:", x !== y)

// greater than
console.log("x > y:", x > y)
console.log("y > x:", y > x)

// less than
console.log("x < y:", x < y)
console.log("y < x:", y < x)

// greater or equal
console.log("x >= y:", x >= y)
console.log("y >= x:", y >= x)

// less than or equal
console.log("x <= y:", x <= y)
console.log("y <= x:", y <= x)

// Logical operators
// AND - &&
console.log("true && true:", true && true)
console.log("true && false:", true && false)
console.log("false && false:", false && false)

// OR - ||
console.log("true || true:", true || true)
console.log("true || false:", true || false)
console.log("false || false:", false || false)
console.log("false && false:", false && false)

// NOT
console.log("!true:", !true)
console.log("!false:", !false)

// 10
// "10"
let a = 10
let b = "10"
console.log("a == b:", a == b)
console.log("a === b:", a === b)

//
let userIsLoggedIn = true
let userIsAdmin = false
let userIsSubscribed = false

// userIsLoggedIn && userIsAdmin && userIsSubscribed -> give access
// else -> deny access

// string operators
let myName = "Michael Peter"
console.log(`My name is ${myName} and that's all.`)
