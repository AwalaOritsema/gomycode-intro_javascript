// this lesson is about function in JavaScript
// a function is a bunch of statements and expressions that produce a result
// let firstName = "Michael"

// function sayMyName(name) {
//   console.log("Your name is:", name)
// }

// firstName = "Anthonia"
// sayMyName(firstName)

// function addTwo(number) {
//   let result = number + 2
//   return result
// }

// function doSomething() {
//   console.log("I am doing something")

//   return 100
// }

// let hundred = doSomething()
// console.log(hundred)

// arrow function
// let addTwo = (number) => number + 2

// let myValue = 80
// let expectedResult = addTwo(myValue)
// console.log(expectedResult)

// console.log("Trying git commands")

// a recursive function
// function factorial(number) {
//   if (number <= 1) {
//     return 1
//   }

//   return number * factorial(number - 1)
// }

// 5! = 5!
// 5! = 5 x 4!
// 5! = 5 x 4 x 3!
// 5! = 5 x 4 x 3 x 2!
// 5! = 5 x 4 x 3 x 2 x 1

function factorial(number) {
  if (number <= 1) {
    return 1
  }

  return number * factorial(number - 1)
}
// 5 * 4 * 3 * 2 * 1
